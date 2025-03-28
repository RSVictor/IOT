<script setup lang="ts">
    import { Character } from '../models/Character';
    import { Space } from '../models/Character';

    const props = defineProps({
        space: { type: Space, required: true },
        showInfo: { type: Boolean, default: true },
    });
    
</script>

<template>
    <section class="flex flex-column">
      <h2>{{ props.space.name }}</h2>
      <div>
        <div v-if="props.showInfo">
            <p>{{ props.space.idade }}</p>
            <p>{{ props.space.altura }}</p>

        </div>
      </div>

      

    </section>
      
</template>
    
<style scoped lang="scss">   

</style>
