import { defineStore } from 'pinia';
import axios from 'axios';
import type { Character } from '@/models/Character';

export const useCharacterStore = defineStore('characterStore', {
  state: () => ({
    characters: [] as Character[],
    spaces: [] as { name: string; persons: Character[] }[],
  }),

  actions: {
  async fetchCharacters() {
    try {
      const res = await axios.get('https://swapi.dev/api/people/');
      const characters = res.data.results.map((char: any) => ({
        name: char.name,
        birth_year: char.birth_year,
        height: char.height,
        mass: char.mass,
        image: ''
      }));
  
      this.spaces = [
        {
          name: '',
          persons: characters,
        },
      ];
    } catch (err) {
      console.error('Erro ao buscar personagens:', err);
    }
  },
    setSpaces(spaces: { name: string; persons: Character[] }[]) {
      this.spaces = spaces;
    },

    addCharacterToSpace(spaceIndex: number, character: Character) {
      this.spaces[spaceIndex]?.persons.push(character);
    },

    removeCharacterFromSpace(spaceIndex: number, characterIndex: number) {
      this.spaces[spaceIndex]?.persons.splice(characterIndex, 1);
    },
  },
});
