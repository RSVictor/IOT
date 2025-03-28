<script setup lang="ts">
import { Character, Space } from '../models/Character';
import { reactive, ref } from 'vue';
import SpaceComponente from '../components/SpaceComponente.vue';

// Definir os espaços e personagens
const spaces: Array<Space> = reactive([]);

// Personagem inicial
const user1: Character = reactive(new Character());
user1.name = "Personagem 1";
user1.altura = "1.75m";
user1.idade = "25";
user1.icon = "person";

// Criando o espaço com personagens
const space1: Space = reactive(new Space());
space1.persons = [user1];

// Adicionando o espaço à lista de espaços
spaces.push(space1);

// Definir as variáveis de controle para adicionar personagens
const newPerson = reactive(new Character());
const showForm = ref(false); // Controle de exibição do formulário

// Função para adicionar um personagem
const addCharacter = () => {
  if (newPerson.name && newPerson.idade && newPerson.altura) {
    const newCharacter: Character = reactive(new Character());
    newCharacter.name = newPerson.name;
    newCharacter.idade = newPerson.idade;
    newCharacter.altura = newPerson.altura;
    newCharacter.icon = 'person'; // Pode ser configurado dinamicamente

    // Adicionando o novo personagem ao espaço
    space1.persons.push(newCharacter);
    newPerson.name = ''; // Resetando os campos após adição
    newPerson.idade = '';
    newPerson.altura = '';
  }
};

// Função para excluir um personagem
const deleteCharacter = (personId: number) => {
  const space = spaces[0]; // Pegando o primeiro espaço (exemplo)
  space.persons = space.persons.filter((person, index) => index !== personId);
};
</script>

<template>
  <main class="flex flex-column text-center justify-content-center align-items-center">
    <h1>Gerencie Seus Personagens! 😎</h1>

    <!-- Botão para exibir o formulário de adicionar personagem -->
    <button @click="showForm = !showForm">
      <span class="material-icons"></span> Adicionar Personagem
    </button>

    <!-- Formulário de adição de personagem -->
    <div v-if="showForm">
      <input v-model="newPerson.name" placeholder="Nome" />
      <input v-model="newPerson.idade" placeholder="Idade" type="number" />
      <input v-model="newPerson.altura" placeholder="Altura" type="number" step="0.01" />
      <button @click="addCharacter">Adicionar Personagem</button>
    </div>

    <!-- Exibição dos espaços e personagens -->
    <section class="spaces flex flex-grid border-round-sm">
      <div v-for="(space, spaceId) in spaces" :key="spaceId">
        
        <div v-for="(person, personId) in space.persons" :key="personId">
          <p><strong>{{ person.name }}</strong></p>
          <p>Altura: {{ person.altura }}</p>
          <p>Idade: {{ person.idade }}</p>
          <p><img :src="`/icons/${person.icon}.png`" alt="Ícone do personagem" /></p>
          
          <!-- Botão para excluir personagem -->
          <button @click="deleteCharacter(personId)">
            <span class="material-icons"></span> Excluir Personagem
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
  main {
    width: 100vw;
    min-height: 100vh;
    .spaces {
      width: 90vw;
      min-height: 95vh;
      background-color: rgb(73, 67, 67);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  /* Estilo para os botões */
  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: #e53935;
  }
</style>
