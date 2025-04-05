
import { useState, useEffect } from 'react';
import Logo from './Logo';

const IntroOverlay = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`intro-overlay ${visible ? '' : 'hidden'}`}>
      <Logo size="large" spinning={true} />
    </div>
  );
};

export default IntroOverlay;
