import { defineStore } from 'pinia';
import { Character, Space } from '@/models/Character';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    spaces: [] as Space[]
  }),

  actions: {
    setSpaces(newSpaces: Space[]) {
      this.spaces = newSpaces;
    },

    addCharacterToSpace(spaceIndex: number, character: Character) {
      if (!this.spaces[spaceIndex]) return;
      this.spaces[spaceIndex].persons.push(character);
    },

    removeCharacterFromSpace(spaceIndex: number, personIndex: number) {
      if (!this.spaces[spaceIndex]) return;
      this.spaces[spaceIndex].persons.splice(personIndex, 1);
    }
  }
});
