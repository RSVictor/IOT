<script setup lang="ts">
import { Character, Space } from '../models/Character';
import { reactive, ref } from 'vue';
import { useCharacterStore } from '../stores/characterStore';
import SpaceComponente from '../components/SpaceComponente.vue';

// Pegando os dados do store
const store = useCharacterStore();
// Definir os espaços e personagens
const spaces: Array<Space> = reactive([]);

// Personagem inicial
const user1: Character = reactive(new Character());
user1.name = "Personagem 1";
user1.altura = "1.7m";
user1.idade = "25";
user1.icon = "person";

// Criando o espaço com personagens
const space1: Space = reactive(new Space());
space1.name = 'Quadro de Personagens'
space1.persons = [user1];

// Adicionando o espaço à lista de espaços
spaces.push(space1);

// Definir as variáveis de controle para adicionar personagens
const newPerson = reactive(new Character());
const showForm = ref(false); // Controle de exibição do formulário




</script>

<template>
  <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Seus Personagens! 😎</h1>      
    <section class="spaces flex flex-grid border-round-sm">
      <div v-for="(space, env_Id) in spaces" :key="env_Id">
        <SpaceComponente :space="space"/>            
                            
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
