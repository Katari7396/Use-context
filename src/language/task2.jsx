import React, { useContext } from 'react';
import { LanguageContext } from './task1';
 
 
function LanguageSwitcher () {
  const { switchLanguage } = useContext(LanguageContext);  
 
  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('ja')}>Japanese</button>
    </div>
  );
};
 
export default LanguageSwitcher;