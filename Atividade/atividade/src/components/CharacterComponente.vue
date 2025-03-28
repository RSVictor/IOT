<script setup lang="ts">
import { Character } from '../models/Character';

const props = defineProps({
    character: { type: Character, required: true },
    showInfo: {type: Boolean, default: true},
});

const ChangeCharacter = (newState: boolean) =>{
    props.character.state = newState;
}

</script>

<template>
    <section 
     :class="`flex flex-column text-center align-items-center 
        justify-content-start device-${props.character.state}`">        
       <div>
        <h5>{{props.character.name}}</h5>   
        <span class="icons material-icons-round">{{ props.character.icon }}</span>       
        <div class="flex flex-row" v-if="props.showInfo">
            <button class="device-buttons on-button mr-1" @click="ChangeCharacter(true)"><span class="material-symbols-outlined">add</span></button>
            <
       </div>
        
    </div>
    </section>
</template>

<style scoped lang="scss">
    section{
        background-color: rgb(212, 221, 218);
        border: 1px solid gray;
        width: 10rem;
        height: 7.5rem;
        margin: 0.5rem;        
        .icons{
            width: 1.5rem;
            margin: 0.5rem;        
            color: rgb(87, 82, 82);    
        }

       
    }
    .device-buttons{
        border: none;
        padding: 0.6rem;
        border-radius: 0.2rem 0rem;   
        cursor: pointer;  
        &:hover{
          opacity: 0.6;  
          transform: scale(1.05);
          transition: 0.5s;        
        }   
    }        

    

</style>