import { StylesHero, StylesHeroImageBackground, StylesHeroLinearGradiaent } from "./StylesHero";
import {colors} from '../../../styles/colors'
import {CustomText} from '../../atoms/Text/CustomText'
import {CustomLogo} from '../../atoms/Logo/CustomLogo'
import ImperialLogo from '../../../../assets/EmpireLogo.png'


export const Hero =()=>{
    return(
        <StylesHero>
            <StylesHeroImageBackground source={{uri: 'https://cdn.posteritati.com/posters/000/000/069/424/star-wars-sm-web.jpg'}}>
                <StylesHeroLinearGradiaent colors={[colors.dark, 'transparent', colors.dark]}>
                    <CustomLogo source={ImperialLogo} width={24} height={24}/>
                    <CustomText text={'Episódio I'} font={'title'} color='light' size={16} mt={300}/>
                    <CustomText text={'A Ameaça Fantasma'} font={'title'} color='light' size={12}/>

                </StylesHeroLinearGradiaent>
            </StylesHeroImageBackground>
        </StylesHero>
    )
}