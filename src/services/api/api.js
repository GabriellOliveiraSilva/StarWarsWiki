
import axios from 'axios';

// Criando uma instância do axios com a baseURL correta
export const api = axios.create({
  baseURL: 'https://starwars-databank-server.vercel.app/api/v1',
});
