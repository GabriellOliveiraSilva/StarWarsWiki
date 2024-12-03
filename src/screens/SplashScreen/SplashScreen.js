
import EmpireLogo from '../../../assets/EmpireLogo.png'
import { CustomText } from '../../components/atoms/Text/CustomText';
import { CustomLogo } from '../../components/atoms/Logo/CustomLogo';
import {CustomContainer} from '../../components/atoms/Container/CustomContainer'

export const SplashScreen = () => {
  return (
    <CustomContainer align='center' justify="center">
      <CustomLogo source={EmpireLogo}></CustomLogo>
      <CustomText font={'title'} text="Star Wars - Wiki"></CustomText>
    </CustomContainer>
  );
}



