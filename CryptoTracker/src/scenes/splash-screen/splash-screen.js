import React, {useEffect} from 'react';
import SceneContainer from '../../components/scene-container';
import Image from '../../components/image';
import logo from '../../assets/logo/logo.png';
import {goAuth, goHome} from '../../navigation/navigator/navigator';

const SplashScreen = () => {
  useEffect(() => {
    async function init() {
      setTimeout(() => {
        goAuth();
      }, 1000);
    }
    init();
  }, []);
  return (
    <SceneContainer style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image source={logo} />
    </SceneContainer>
  );
};

export default SplashScreen;
