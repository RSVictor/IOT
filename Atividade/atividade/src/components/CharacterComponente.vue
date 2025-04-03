<script setup lang="ts">
import { Character } from '../models/Character';


const props = defineProps({
    character: { type: Character, required: true },
    showInfo: {type: Boolean, default: true},
    showButtons: { type: Boolean, default: true },
});


</script>

<template>
    <section 
     :class="`flex flex-start text-center align-items-center 
        justify-content-start`">        
        <div v-if="!props.showButtons" class="remove-container flex mt-2 justify-content-end align-items-center">
            <span class="icons material-icons-round ">delete</span>
        </div>
       <div>
        <h5>{{props.character.name}}</h5>  
         <div class="flex flex-row" v-if="props.showButtons">       
            <button class="device-buttons on-button mr-1" @click="changeDevice(true)">Exibir </button>   
       </div>
        
    </div>
    </section>
</template>

<style scoped lang="scss">
    section{
        background-color: rgb(50, 187, 141);
        border: 1px solid rgb(187, 51, 51);
        width: 10rem;
        height: 7.5rem;
        margin: 0.5rem;        
        .icons{
            width: 1.5rem;
            margin: 0.5rem;        
            color: rgb(87, 82, 82);    
        }
        .remove-container{
            width: 100%;
            height: 1rem;
            span{
                font-size: 0.85rem;
                cursor: pointer;
                &:hover{
                    transform: scale(1.25);
                    color: rgb(87, 18, 18);
                }
            }
        }

       
    }
    .character-buttons{
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