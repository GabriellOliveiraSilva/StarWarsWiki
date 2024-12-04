import { StylesHero, StylesHeroImageBackground, StylesHeroLinearGradiaent, StylesButtonsView } from "./StylesHero";
import {colors} from '../../../styles/colors'
import {CustomText} from '../../atoms/Text/CustomText'
import {CustomLogo} from '../../atoms/Logo/CustomLogo'
import { Tag } from "../../molecules/Tag/Tag";
import { IconButton } from "../../molecules/IconButton/IconButton";
import { PlayButton } from "../../molecules/PlayButton/PlayButton";
import ImperialLogo from '../../../../assets/EmpireLogo.png'
import { IconBack } from "../../molecules/IconBack/IconBack";

export const Hero =({item, type})=>{
    
    switch (type) {
        case 'detail':
            return(
        
                <StylesHero>
                    <StylesHeroImageBackground source={{uri: item.image ? item.image : item.thumb}}>
                        <StylesHeroLinearGradiaent colors={[colors.dark, 'transparent', colors.dark]}>
                            <IconButton iconName={'arrow-back-circle-outline'} align={'start'}></IconButton>
                            <Tag text={item.type} mt={214} > </Tag>
                            <CustomText text={item.title ? item.title : item.name} font={'title'} color='light' size={16} mt={20}/>
                            {item.aka && <CustomText text={item.aka} font={'subtitle'} color='light' size={12}/>}
                            <StylesButtonsView>
                                <IconButton text={'Favoritos'} iconName={'add-circle-outline'}>
                                </IconButton>
                                <IconButton text={'Saiba Mais'} iconName={'information-circle-outline'}>
                                </IconButton>
                            </StylesButtonsView>
                        </StylesHeroLinearGradiaent>
                    </StylesHeroImageBackground>
                </StylesHero>
            )
        default:
            return(
                <StylesHero>
                    <StylesHeroImageBackground source={{uri: item.image ? item.image : item.thumb}}>
                        <StylesHeroLinearGradiaent colors={[colors.dark, 'transparent', colors.dark]}>
                            <CustomLogo source={ImperialLogo} width={24} height={24}/>
                            <Tag text={'Filme'} mt={214}> </Tag>
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
}