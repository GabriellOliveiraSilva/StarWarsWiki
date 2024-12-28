import Char from "./Char";
import Organization from "./Organization";
export const apiService = async (type, page) => {
  switch (type) {
    case "Characters":
      const response = await Char.getAllCharWithLimit(page, 20);
      if (!response.data) throw new Error("Erro ao buscar locais");
      return response.data;
    default:
  }
};
w;
