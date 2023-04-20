import { BLUE_THEME, GREEN_THEME, RED_THEME, YELLOW_THEME } from 'constants/common';

import React from 'react';

import 'Null.module.scss';
import 'simplebar/dist/simplebar.min.css';
import './SimpleBar.scss';
import {
  blueThemeColors,
  greenThemeColors,
  redThemeColors,
  yellowThemeColors,
} from 'colors/themeColors';
import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { RoutesContainer } from 'pages/routesContainer/RoutesContainer';
import SimpleBar from 'simplebar-react';
import { changeTheme } from 'themes/changeTheme';

import styles from './App.module.scss';

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
      <div className={styles.appContainer}>
        <Header />
        <RoutesContainer />
        <Footer />
      </div>
    </SimpleBar>
  );
};

export default App;
