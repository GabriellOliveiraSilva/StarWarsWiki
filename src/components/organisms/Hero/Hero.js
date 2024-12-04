import { StylesHero, StylesHeroImageBackground, StylesHeroLinearGradiaent, StylesButtonsView } from "./StylesHero";
import {colors} from '../../../styles/colors'
import {CustomText} from '../../atoms/Text/CustomText'
import {CustomLogo} from '../../atoms/Logo/CustomLogo'
import { Tag } from "../../molecules/Tag/Tag";
import { IconButton } from "../../molecules/IconButton/IconButton";
import { PlayButton } from "../../molecules/PlayButton/PlayButton";
import ImperialLogo from '../../../../assets/EmpireLogo.png'


export const Hero =()=>{
    return(
        <StylesHero>
            <StylesHeroImageBackground source={{uri: 'https://cdn.posteritati.com/posters/000/000/069/424/star-wars-sm-web.jpg'}}>
                <StylesHeroLinearGradiaent colors={[colors.dark, 'transparent', colors.dark]}>
                    <CustomLogo source={ImperialLogo} width={24} height={24} mt={-84}/>
                    <Tag text={'Filme'} mt={316}> </Tag>
                    <CustomText text={'Episódio I'} font={'title'} color='light' size={16} mt={20}/>
                    <CustomText text={'A Ameaça Fantasma'} font={'title'} color='light' size={12}/>
                    <StylesButtonsView>
                        <IconButton text={'Favoritos'} iconName={'add-circle-outline'}>
                        </IconButton>
                        <PlayButton text={'Assistir'} iconName={'play'}>
                        </PlayButton>
                        <IconButton text={'Saiba Mais'} iconName={'information-circle-outline'}>
                        </IconButton>

                        
                    </StylesButtonsView>
                </StylesHeroLinearGradiaent>
            </StylesHeroImageBackground>
        </StylesHero>
    )
}