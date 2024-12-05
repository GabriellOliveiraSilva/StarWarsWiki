
import axios from 'axios';
// Criando uma instância do axios com a baseURL para trazer informações a cerca da API
export const apiData = axios.create({
  baseURL: 'https://starwars-databank-server.vercel.app/api/v1',
});

// Criando uma instância do axios com a baseURL para traduzir informações da API

export const apiTranslateText = axios.create({
  baseURL: process.env.HOST
})