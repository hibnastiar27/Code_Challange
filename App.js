import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

import {Beranda} from './src/screen';
import {History} from './src/screen';
import {Profile} from './src/screen';

// return <Beranda />;
// return <History />;
// return <Profile />;
