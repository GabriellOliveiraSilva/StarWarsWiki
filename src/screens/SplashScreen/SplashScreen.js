
import EmpireLogo from '../../../assets/EmpireLogo.png'
import { CustomText } from '../../components/atoms/Text/CustomText';
import { CustomLogo } from '../../components/atoms/Logo/CustomLogo';
import {CustomContainer} from '../../components/atoms/Container/CustomContainer'
//Monitora o 
import { useEffect } from 'react';

export const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home')
  }, 1000);

  useEffect(()=>{}, [
    //Aqui eu insiro quais as dependências dela
    //Ou seja, quando um elemento mudar executa uma função
    navigation
  ])
  return (
    <CustomContainer align='center' justify="center">
      <CustomLogo source={EmpireLogo}></CustomLogo>
      <CustomText font={'title'} text="Star Wars - Wiki"></CustomText>
    </CustomContainer>
  );
}



