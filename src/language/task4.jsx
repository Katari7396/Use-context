import React from 'react';
import LanguageSwitcher from './task2';
import Greeting from './task3';
import { LanguageProvider } from './task1';
 

function Main ()  {
  return (
    <LanguageProvider>
      <div>
        <h1>Change Language</h1>
        <Greeting/>
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};
 
export default Main;