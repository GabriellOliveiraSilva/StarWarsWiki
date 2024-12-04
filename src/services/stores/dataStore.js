import {create} from 'zustand';

export const useDataStore = create((set) => ({
  // Inicia nulo pois, por padrão, eu não tenho nenhum personagem ou filme selecionado
  selectedData: null,
  
  // Função que seleciona um personagem e armazena
  setSelectedData: (selectedData) => set({ selectedData }),
}));
