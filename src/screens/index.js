import { CustomText } from '../components/atoms/Text/CustomText';
import { CustomLogo } from '../components/atoms/Logo/CustomLogo';
import { CustomContainer } from '../components/organisms/Container/CustomContainer';
import EmpireLogo from '../../assets/EmpireLogo.png'


export const SplashScreen = () => {
  return (
    <CustomContainer>
      <CustomLogo source={EmpireLogo}></CustomLogo>
      <CustomText font={'title'} text="Star Wars - Wiki"></CustomText>
    </CustomContainer>
  );
}



