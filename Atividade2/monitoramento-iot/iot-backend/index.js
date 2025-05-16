require('dotenv').config();  // Carrega as variáveis do arquivo .env
const express = require('express');  // Importa o Express
const contentful = require('contentful-management');  // Importa o Contentful

const app = express();
app.use(express.json());  // Para processar as requisições com JSON

// Inicializa o cliente do Contentful
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Endpoint para receber dados de monitoramento IoT
app.post('/iot', async (req, res) => {
  const { temperaturaMotor, temperaturaBombas, consumoEnergetico, timestamp } = req.body;

  // Validação simples para garantir que os dados necessários foram enviados
  if (
    typeof temperaturaMotor !== 'number' ||
    typeof temperaturaBombas !== 'number' ||
    typeof consumoEnergetico !== 'number' ||
    !timestamp
  ) {
    return res.status(400).json({ error: 'Dados inválidos ou incompletos' });
  }

  try {
    // Acessa o espaço e o ambiente do Contentful
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);

    // Cria a entrada no Contentful com os dados recebidos
    const entry = await environment.createEntry(process.env.CONTENTFUL_CONTENT_TYPE, {
      fields: {
        temperaturaMotor: { 'en-US': temperaturaMotor },
        temperaturaBombas: { 'en-US': temperaturaBombas },
        consumoEnergetico: { 'en-US': consumoEnergetico },
        timestamp: { 'en-US': timestamp },
      },
    });

    // Retorna uma resposta de sucesso
    res.status(201).json({ message: 'Dados de monitoramento registrados!', entryId: entry.sys.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao registrar dados no Contentful' });
  }
});

// Inicia o servidor na porta definida
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
