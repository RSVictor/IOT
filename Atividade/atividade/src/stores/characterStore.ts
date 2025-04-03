import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { Character, Space } from '../models/Character';

export const useCharacterStore = defineStore('characterStore', () => {
  // Lista de espaços e personagens
  const spaces: Array<Space> = reactive([]);

  // Criar um espaço inicial
  const space1: Space = reactive(new Space());
  space1.name = 'Quadro de Personagens';
  space1.persons = [];

  spaces.push(space1);

  // Função para adicionar um personagem
  const addCharacter = (name: string, idade: string, altura: string) => {
    if (name && idade && altura) {
      const newCharacter: Character = reactive(new Character());
      newCharacter.name = name;
      newCharacter.idade = idade;
      newCharacter.altura = altura;
      newCharacter.icon = 'person';

      space1.persons.push(newCharacter);
    }
  };

  // Função para excluir um personagem
  const deleteCharacter = (personId: number) => {
    space1.persons = space1.persons.filter((_, index) => index !== personId);
  };

  return { spaces, addCharacter, deleteCharacter };
});
