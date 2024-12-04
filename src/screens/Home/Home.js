import { Card } from "../../components/molecules/Card/Card";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { Hero } from "../../components/organisms/Hero/Hero";
import { ScrollView } from "react-native";


const DATA_CHARACTER = [
    { 'id': 0,
      "name": "Luke Skywalker",
      "aka": "The Last Jedi",
      "image": "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    },
    {'id': 1,
      "name": "Darth Vader",
      "aka": "The Chosen One",
      "image": "https://starwars-visualguide.com/assets/img/characters/4.jpg"
    },
    {  'id': 2, 
      "name": "Leia Organa",
      "aka": "Princess Leia",
      "image": "https://starwars-visualguide.com/assets/img/characters/5.jpg"
    },
    {'id': 3,
      "name": "Yoda",
      "aka": "The Grand Master",
      "image": "https://starwars-visualguide.com/assets/img/characters/20.jpg"
    },
    {'id': 4,
      "name": "Obi-Wan Kenobi",
      "aka": "Ben Kenobi",
      "image": "https://starwars-visualguide.com/assets/img/characters/10.jpg"
    },
    {'id': 5,
      "name": "Han Solo",
      "aka": "The Smuggler",
      "image": "https://starwars-visualguide.com/assets/img/characters/14.jpg"
    },
    {'id': 6,
      "name": "Chewbacca",
      "aka": "Chewie",
      "image": "https://starwars-visualguide.com/assets/img/characters/13.jpg"
    },
    {'id': 7,
      "name": "Palpatine",
      "aka": "Darth Sidious",
      "image": "https://starwars-visualguide.com/assets/img/characters/21.jpg"
    },
    {'id': 8,
      "name": "R2-D2",
      "aka": "Astromech Droid",
      "image": "https://starwars-visualguide.com/assets/img/characters/3.jpg"
    },
    {'id': 9,
      "name": "C-3PO",
      "aka": "Protocol Droid",
      "image": "https://starwars-visualguide.com/assets/img/characters/2.jpg"
    }
  ]
  

  const DATA_MOVIE = [
    {
      "id": 1,
      "title": "Star Wars: Episode IV - A New Hope",
      "thumb": "https://starwars-visualguide.com/assets/img/films/1.jpg"
    },
    {
      "id": 2,
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "thumb": "https://starwars-visualguide.com/assets/img/films/2.jpg"
    },
    {
      "id": 3,
      "title": "Star Wars: Episode VI - Return of the Jedi",
      "thumb": "https://starwars-visualguide.com/assets/img/films/3.jpg"
    },
    {
      "id": 4,
      "title": "Star Wars: Episode I - The Phantom Menace",
      "thumb": "https://starwars-visualguide.com/assets/img/films/4.jpg"
    },
    {
      "id": 5,
      "title": "Star Wars: Episode II - Attack of the Clones",
      "thumb": "https://starwars-visualguide.com/assets/img/films/5.jpg"
    },
    {
      "id": 6,
      "title": "Star Wars: Episode III - Revenge of the Sith",
      "thumb": "https://starwars-visualguide.com/assets/img/films/6.jpg"
    },
    {
      "id": 7,
      "title": "Star Wars: Episode VII - The Force Awakens",
      "thumb": "https://starwars-visualguide.com/assets/img/films/7.jpg"
    },
    {
      "id": 8,
      "title": "Star Wars: Episode VIII - The Last Jedi",
      "thumb": "https://starwars-visualguide.com/assets/img/films/8.jpg"
    },
    {
      "id": 9,
      "title": "Star Wars: Episode IX - The Rise of Skywalker",
      "thumb": "https://starwars-visualguide.com/assets/img/films/9.jpg"
    }
  ]
  

export const Home = () =>{
    return(
        <ScrollView>
                  <CustomContainer justify="center" align="start">
            <Hero></Hero>
            <HomeList text={'Personagens'} data={DATA_CHARACTER} ph={10} mt={10} type={'char'}></HomeList>
            <HomeList text={'Filmes'} data={DATA_MOVIE} ph={10} mt={10} ></HomeList>

        </CustomContainer>
        </ScrollView>
    )
}