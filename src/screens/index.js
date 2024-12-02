import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CustomText } from '../components/atoms/Text/CustomText';
import { CustomLogo } from '../components/atoms/Logo/CustomLogo';
import { Container } from '../components/molecules/Container/Container';
import EmpireLogo from '../../assets/EmpireLogo.png'


export const SplashScreen = () => {
  return (
    <Container>
      <CustomLogo source={EmpireLogo}></CustomLogo>
      <CustomText text="StarWars - Wiki"></CustomText>
      <StatusBar style="auto" />
    </Container>
  );
}

