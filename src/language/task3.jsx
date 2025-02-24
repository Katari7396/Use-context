import React, { useContext } from 'react';
import { LanguageContext } from './task1';

function Greeting  () {
  
  const { language } = useContext(LanguageContext);
 
  const greeting = language === 'en' ? 'Hello Katari' : language === 'ja' ? 'Konnichiwa Katari' : 'Hello Katari';
 
  return <h2>{greeting}</h2>;
};
 
export default Greeting;