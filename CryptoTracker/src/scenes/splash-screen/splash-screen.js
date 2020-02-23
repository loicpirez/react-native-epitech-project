import React, { useEffect } from 'react';
import SceneContainer from '../../components/scene-container';
import Image from '../../components/image';
import logo from '../../assets/logo/logo.png';
import { goHome } from '../../navigation/navigator/navigator';

const SplashScreen = () => {
  useEffect(() => {
    async function init() {
      setTimeout(() => {
        goHome();
      }, 4000);
    }
    init();
  }, []);
  return (
    <SceneContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={logo} />
    </SceneContainer>
  );
};

export default SplashScreen;
