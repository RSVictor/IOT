<template>
  <div id="app">
    <h1>Monitoramento IoT</h1>
    <form @submit.prevent="enviarDados">
      <div>
        <label for="temperaturaMotor">Temperatura do Motor:</label>
        <input type="number" v-model="temperaturaMotor" required />
      </div>

      <div>
        <label for="temperaturaBombas">Temperatura das Bombas:</label>
        <input type="number" v-model="temperaturaBombas" required />
      </div>

      <div>
        <label for="consumoEnergetico">Consumo Energético:</label>
        <input type="number" v-model="consumoEnergetico" required />
      </div>

      <div>
        <label for="timestamp">Timestamp:</label>
        <input type="datetime-local" v-model="timestamp" required />
      </div>

      <button type="submit">Enviar</button>
    </form>

    <div v-if="mensagem">
      <p>{{ mensagem }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      temperaturaMotor: null,
      temperaturaBombas: null,
      consumoEnergetico: null,
      timestamp: null,
      mensagem: ''
    };
  },
  methods: {
    async enviarDados() {
      try {
        const resposta = await axios.post('http://localhost:3000/iot', {
          temperaturaMotor: this.temperaturaMotor,
          temperaturaBombas: this.temperaturaBombas,
          consumoEnergetico: this.consumoEnergetico,
          timestamp: this.timestamp
        });

        this.mensagem = resposta.data.message;
      } catch (erro) {
        this.mensagem = 'Erro ao enviar dados: ' + erro.response.data.error;
      }
    }
  }
};
</script>

<style>
/* Adicione seus estilos aqui */
</style>
