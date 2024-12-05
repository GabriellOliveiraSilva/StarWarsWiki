import { CustomContainer } from "../../atoms/Container/CustomContainer";
import { CustomText } from "../../atoms/Text/CustomText";
import { StylesDescription } from "./StylesDescription";
import { useState, useEffect } from "react";
import Translate from "../../../services/hooks/Translate";

export const Description = ({description}) =>{
    //Começa com o texto em inglês
    const [translateDescription, setTranslateDescription] = useState(description)
    const translator = new Translate()
    //Chama a tradução
    const translate = async () =>{
        try{
            const data = await translator.TranslateText(description)
            return data
        }catch(error){
            return description
        }
    }

    useEffect(()=>{
        const fetchTranslate = async () =>{
            try{
                const textTranslate = await translate()
                setTranslateDescription(textTranslate)
            }
            catch(error){
                setTranslateDescription(description)
            }
        }

        fetchTranslate()
    }, [])

    return(
        <StylesDescription>
            <CustomContainer>
                <CustomText text={translateDescription} font={'description'} size={12} >
                </CustomText>
            </CustomContainer>
        </StylesDescription>
    )
}