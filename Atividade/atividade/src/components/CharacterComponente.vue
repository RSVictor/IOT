<script setup lang="ts">
import { Character } from '@/models/Character';
import { ref } from 'vue';

const props = defineProps({
  character: { type: Character, required: true },
  showInfo: { type: Boolean, default: true },
  showButtons: { type: Boolean, default: true },
});

const emit = defineEmits(['delete']);
const expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};

const handleDelete = () => {
  emit('delete');
};
</script>


<template>
    <section class="card" @click="toggleExpanded">      
      <h5>{{ props.character.name }}</h5>
  
      <div v-if="expanded">
        <p><strong>Idade:</strong> {{ props.character.birth_year }}</p>
        <p><strong>Altura:</strong> {{ props.character.height }}</p>
        <p><strong>Peso:</strong> {{ props.character.mass }}</p>
        <p><strong>Imagem:</strong> {{ props.character.image }}</p>
      </div>
      <div v-else class="dica">Clique para ver mais</div>
        <div class="delete-btn" v-if="props.showButtons" @click.stop="handleDelete">
        <span class="material-icons">delete</span>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .card {
    background-color: rgb(50, 187, 141);
    border: 1px solid rgb(29,21,21);
    width: 12rem;
    margin: 0.5rem;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    
  
    &:hover {
      transform: scale(1.02);
      background-color: rgb(46, 170, 129);
    }
  
    .dica {
      font-size: 0.85rem;
      color: #333;
      opacity: 0.7;
    }
  }
  </style>
  