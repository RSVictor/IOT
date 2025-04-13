<script setup lang="ts">
import { Character, Space } from '@/models/Character';
import { reactive, ref, onMounted } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import CharacterComponent from '@/components/CharacterComponente.vue';


const store = useCharacterStore();
const showForm = ref(false);

onMounted(async () => {
  await store.fetchCharacters();
});


const deleteCharacter = (index: number) => {
  store.removeCharacterFromSpace(0, index);
};
</script>

<template>
  <main class="flex flex-column text-center justify-content-center align-items-center">
    <h1>Gerencie Seus Personagens! 😎</h1>
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
      background-color: rgb(50, 187, 141);
  border: 1px solid rgb(29, 21, 21);
  padding: 1rem;
  width: 12rem; /* Largura fixa para os cards */
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    }
  }  
</style>
