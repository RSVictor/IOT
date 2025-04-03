<script setup lang="ts">
    import { Character } from '../models/Character';
    import { Space } from '../models/Character';

    const props = defineProps ({ 
      space: { type: Space, required: true},
      });
</script>

<template>
  <div class="flex flex-column"> 
    <div class="flex flex-row">
      <div v-for="(person, personId) in space.persons" :key="personId" >          
      </div>
    </div>
  </div>
</template>
    
<style scoped lang="scss">   

</style>
