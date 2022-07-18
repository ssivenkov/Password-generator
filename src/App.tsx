import {
  BLUE_THEME,
  EIGHTH_ELEMENT,
  FIFTH_ELEMENT,
  FIRST_ELEMENT,
  FOURTH_ELEMENT,
  GREEN_THEME,
  NINTH_ELEMENT,
  RED_THEME,
  SECOND_ELEMENT,
  SEVENTH_ELEMENT,
  SIXTH_ELEMENT,
  THIRD_ELEMENT,
  YELLOW_THEME,
} from 'constants/common';

import React from 'react';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { RoutesContainer } from 'pages/routesContainer/RoutesContainer';
import SimpleBar from 'simplebar-react';

import './Null.module.scss';
import 'simplebar/dist/simplebar.min.css';
import './SimpleBar.scss';
import styles from './App.module.scss';
import {
  blueThemeColors,
  greenThemeColors,
  redThemeColors,
  yellowThemeColors,
} from './colors/themeColors';

type ChangeThemeParams = {
  userTheme: string;
  themeColors: Array<string>;
};

export const changeTheme = (params: ChangeThemeParams): void => {
  const { userTheme, themeColors } = params;

  localStorage.setItem('userTheme', userTheme);
  const doc = document.querySelector('html');

  if (doc) {
    doc.style.setProperty('--primary_light', themeColors[FIRST_ELEMENT]);
    doc.style.setProperty('--primary', themeColors[SECOND_ELEMENT]);
    doc.style.setProperty('--primary_dim', themeColors[THIRD_ELEMENT]);
    doc.style.setProperty('--primary_medium', themeColors[FOURTH_ELEMENT]);
    doc.style.setProperty('--primary_almost-medium', themeColors[FIFTH_ELEMENT]);
    doc.style.setProperty('--primary_half-medium', themeColors[SIXTH_ELEMENT]);
    doc.style.setProperty('--primary_dark', themeColors[SEVENTH_ELEMENT]);
    doc.style.setProperty('--background1', themeColors[EIGHTH_ELEMENT]);
    doc.style.setProperty('--background2', themeColors[NINTH_ELEMENT]);
  }
};

const App = () => {
  if (localStorage.getItem('userTheme')) {
    let localTheme = GREEN_THEME;
    const userTheme = localStorage.getItem('userTheme') ?? false;

    if (userTheme) {
      localTheme = userTheme;
    }

    let themeColorsPack = greenThemeColors;

    switch (localTheme) {
      case RED_THEME:
        themeColorsPack = redThemeColors;
        break;
      case YELLOW_THEME:
        themeColorsPack = yellowThemeColors;
        break;
      case GREEN_THEME:
        themeColorsPack = greenThemeColors;
        break;
      case BLUE_THEME:
        themeColorsPack = blueThemeColors;
        break;
      default:
        break;
    }

    changeTheme({ userTheme: localTheme, themeColors: themeColorsPack });
  }

  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <div className={styles.globalContainer}>
        <Header />
        <RoutesContainer />
        <Footer />
      </div>
    </SimpleBar>
  );
};

export default App;
