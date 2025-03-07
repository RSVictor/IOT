<script setup lang="ts">
import {Device} from '@/models/devices';

const props = defineProps({
    device: {type: Device, required: true}
})

</script>

<template>
    <section :class="`flex flex-column text-center align-items-center justify-content-center device-${props.device.state}`">
      <h5>{{ props.device.name }}</h5>
      <span class="icons material-icons-round">{{props.device.icon}}</span>
      <div class="flex flex-row">
         <button class=" device-butons on-button">ON</button>
         <button class=" device-butons off-button">OFF</button>
        </div>
        </section>

</template>

<style scoped lang = "scss">

    section{       
        background-color: rgb(117, 90, 90);
        width: 10rem;
        height: 7rem;
        margin: 0.5rem;
        .icons{
            width: 1.5rem;    
            margin:0.5rem;            
}
    }
 .device-butons{
    border: none;
    padding: 0.6rem;
    border-radius: 10%;
    margin: 0.1rem;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
        transform: scale(1.05);
        transition: 0.2s;
    }   
 }

.device-true{
    .on-button{
        background-color: green;
    }
    .off-button{
        background-color: white;
    }
    
}

.device-false{
    .on-button{
        background-color: white;
    }
    .off-button{
        background-color: red;
    }
}
</style>