import { CustomContainer } from "../../atoms/Container/CustomContainer";
import { CustomText } from "../../atoms/Text/CustomText";
import { StylesDescription } from "./StylesDescription";
import { useState, useEffect } from "react";
import Translate from "../../../services/hooks/Translate";
export const Description = ({ description }) => {
  //Começa com o texto em inglês
  const [translateDescription, setTranslateDescription] = useState(description);

  //Chama a tradução
  const translate = async () => {
    try {
      const data = await Translate.TranslateText(description);
      if (data === "" || data === null || data === undefined) {
        return description;
      }
      return data;
    } catch (error) {
      return description;
    }
  };

  useEffect(() => {
    const fetchTranslate = async (description) => {
      try {
        const textTranslate = await translate();
        setTranslateDescription(textTranslate);
      } catch (error) {
        return description;
      }
    };

    fetchTranslate(description);
  }, []);

  return (
    <StylesDescription>
      <CustomContainer>
        <CustomText
          text={translateDescription}
          font={"description"}
          size={12}
        />
      </CustomContainer>
    </StylesDescription>
  );
};
