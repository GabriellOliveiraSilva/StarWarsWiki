import axios from "axios";
import { apiData } from "../api/api";

class Organization{
    static async getAllOrganization(){
        try{
            const response = await apiData.get('/organizations/?page=1&limit=1000')
            return response.data
        }catch(error){
            console.log('Error ao buscar as organizações:', error)
            return []
        }
    }

    static async getOrganizationWithLimit(page, limit){
        try{
            const response = await apiData.get(`/organizations/?page=${page}&limit=${limit}`)
            return response.data
        }catch(error){
            console.log('Error ao buscar as organizações:', error)
            return []
        }
    }

}

export default Organization