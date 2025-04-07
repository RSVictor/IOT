import { defineStore } from 'pinia';
import axios from 'axios';
import type { Character } from '@/models/Character';

export const useCharacterStore = defineStore('characterStore', {
  state: () => ({
    characters: [] as Character[],
  }),

  actions: {
    async fetchCharacters() {
      try {
        const res = await axios.get('https://swapi.dev/api/people/');
        this.characters = res.data.results.map((char: any) => ({
          name: char.name,
          height: char.height,
          mass: char.mass,
          birth_year: char.birth_year,
          imageUrl: '', 
        }));
      } catch (err) {
        console.error('Erro ao buscar personagens:', err);
      }
    },
  },
});
