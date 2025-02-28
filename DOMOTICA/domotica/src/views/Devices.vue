<script setup lang="ts">
    import { Device, Environment } from '@/models/devices';    
    import {reactive, ref} from 'vue';

    const environments: Array<Environment> =  reactive([]);
    

    const ar: Device = reactive(new Device());
    ar.name = 'Ar condicionado';
    ar.color = '#3266a8';

    const tv: Device = reactive(new Device());
    tv.name ='Smart TV';
    tv.state = true;
    tv.color = '#3266a8'

    const Iluminacao: Device = reactive(new Device());
    Iluminacao.name = 'Iluminação';
    Iluminacao.color = '#00ACC1'
        
    const sala: Environment = reactive(new Environment());
    sala.name = 'Sala';
    sala.devices = [ar,tv,Iluminacao];
    //sala.devices.push(ar);
    //sala.devices.push(tv);
    //sala.devices.push(iluminacao);
 

    environments.push(sala);

   

</script>

<template>
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Devices page!!!!</h1>
        <section class="environments flex flex-column border-round-sm">
            
        </section>
    </main>
</template>

<style scoped lang="scss">
    main{
        width: 100vw;
        min-height: 100vh;
        .environments{
            width: 90vw;
            min-height: 95vh;
            background-color: rgb(206, 160, 160);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
</style>