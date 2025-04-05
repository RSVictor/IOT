<script setup lang="ts">
import { Character, Space } from '@/models/Character';
import { reactive, ref, onMounted } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import CharacterComponent from '@/components/CharacterComponente.vue';


const store = useCharacterStore();
const newPerson = reactive(new Character());
const showForm = ref(false);

// Inicializa com um espaço, se ainda não tiver
onMounted(() => {
  if (store.spaces.length === 0) {
    const user1 = reactive(new Character());
    user1.name = "Personagem 1";
    user1.idade = "25";
    user1.altura = "1.7m";
    user1.icon = "person";

    const space = reactive(new Space());
    space.name = "Quadro";
    space.persons = [user1];
    store.setSpaces([space]);
  }
});

const addCharacter = () => {
  if (newPerson.name && newPerson.idade && newPerson.altura) {
    const newChar = reactive(new Character());
    Object.assign(newChar, newPerson);
    newChar.icon = "person";

    store.addCharacterToSpace(0, newChar); // Adiciona no espaço 0

    // Limpa os campos
    newPerson.name = '';
    newPerson.idade = '';
    newPerson.altura = '';
  }
};

const deleteCharacter = (index: number) => {
  store.removeCharacterFromSpace(0, index);
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
    <section class="spaces flex flex-wrap justify-content-center">
  <div v-for="(person, index) in store.spaces[0]?.persons" :key="index">
    <CharacterComponent
      :character="person"
      :id="index"
      :showButtons="true"
      @delete="deleteCharacter"
    />
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
    .card{
      background-color: rgb(212, 221, 218);
  border: 1px solid rgb(187, 51, 51);
  padding: 1rem;
  width: 12rem; /* Largura fixa para os cards */
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
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
