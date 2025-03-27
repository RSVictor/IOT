<script setup lang="ts">
import CharacterComponente from '../components/CharacterComponente.vue';
import SpaceComponente from '../components/SpaceComponente.vue';
import {Character , Space} from '../models/Character';
import { reactive, ref } from 'vue';

const spaces: Array<Space> = reactive([]);
         
const person: Character = reactive(new Character());
person.name = 'Teste';
person.idade =  35;
person.altura = 1,72;
person.icon = '';

const page: Space = reactive(new Space());
page.name = 'Quadro';
page.persons = [person];

spaces.push(page)
</script>

<template>
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Seus Dispositivos! 😎</h1>
        <section class="spaces flex flex-column border-round-sm">
            <div v-for="(space, env_id) in spaces" :key="env_id">
                <SpaceComponente :environment="space"/>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
  main{
        width: 100vw;
        min-height: 100vh;
        .spaces{
            width: 90vw;
            min-height: 95vh;
            background-color: rgb(73, 67, 67);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
</style>

