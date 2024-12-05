import { apiTranslateText } from "../api/api";

class Translate{
    async TranslateText(text){
        try{
            const response = await apiTranslateText.post('/translate',{
                q: text,
                source: 'en',
                target: 'pt',
                format: 'text',

            } )

            return response.data.translatedText
        }
        catch(error){
            return text
        }
    }
}

export default Translate