import auth from '@react-native-firebase/auth';
import { goHome } from '../../../navigation/navigator/navigator';

export const  submitRegister = async (email, password) => {
    console.log(email, password);
    try  {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log(res);
      goHome();
    } catch (e) {
      console.error(e.message);
    }
  }