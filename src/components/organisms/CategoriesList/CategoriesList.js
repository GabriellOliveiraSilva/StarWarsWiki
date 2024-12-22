import { StylesCategoriesList } from "./StylesCategoriesList";
import { Card } from "../../molecules/Card/Card";
import icoCharacter from "../../../../assets/boba-fett.png";
import icoDroid from "../../../../assets/bb-8.png";
import icoLocation from "../../../../assets/death-star.png";
import icoOrganization from "../../../../assets/jedi-order.png";
import icoSpecies from "../../../../assets/jedi.png";
import icoVehicles from "../../../../assets/at-at-walker.png";
const dados = [
  { id: 1, value: "Characters", icon: icoCharacter },
  { id: 3, value: "Droids", icon: icoDroid },
  { id: 4, value: "Locations", icon: icoLocation },
  { id: 5, value: "Organizations", icon: icoOrganization },
  { id: 6, value: "Species", icon: icoSpecies },
  { id: 7, value: "Vehicles", icon: icoVehicles },
];
export const CategoriesList = () => {
  return (
    <StylesCategoriesList
      vertical
      data={dados}
      renderItem={({ item }) => <Card item={item} type={"categories"}></Card>}
    ></StylesCategoriesList>
  );
};
