import axios from "axios";
import { apiData } from "../api/api";

class Char {
  // Função para obter todos os personagens (sem limite)
  static async getAllChar() {
    try {
      const response = await apiData.get("/characters?page=1&limit=1000");
      return response.data; // Retorna os dados
    } catch (error) {
      console.error("Erro ao buscar os personagens:", error);
      throw new Error("Erro ao buscar os personagens"); // Lançando o erro para ser tratado em outro lugar
    }
  }

  // Função para obter personagens com limite e paginação
  static async getAllCharWithLimit(page, limit) {
    try {
      const response = await apiData.get(
        `/characters?page=${page}&limit=${limit}`
      );
      console.log(response);
      return response; // Retorna os dados
    } catch (error) {
      console.error("Erro ao buscar personagens com limite:", error);
      throw new Error("Erro ao buscar personagens com limite"); // Lançando o erro para ser tratado em outro lugar
    }
  }
}

export default Char;
