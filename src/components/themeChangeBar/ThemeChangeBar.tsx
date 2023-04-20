import { RED_THEME, YELLOW_THEME, GREEN_THEME, BLUE_THEME } from 'constants/common';

import {
  blueThemeColors,
  greenThemeColors,
  redThemeColors,
  yellowThemeColors,
} from 'colors/themeColors';
import { changeTheme } from 'themes/changeTheme';

import { ThemeButton } from './themeButton/ThemeButton';
import styles from './ThemeChangeBar.module.scss';

export const ThemeChangeBar = () => (
  <div className={styles.container}>
    <div className={styles.buttonsContainer}>
      <ThemeButton
        onClick={() => changeTheme({ userTheme: RED_THEME, themeColors: redThemeColors })}
        theme={RED_THEME}
      />
      <ThemeButton
        onClick={() =>
          changeTheme({ userTheme: YELLOW_THEME, themeColors: yellowThemeColors })
        }
        theme={YELLOW_THEME}
      />
      <ThemeButton
        onClick={() =>
          changeTheme({ userTheme: GREEN_THEME, themeColors: greenThemeColors })
        }
        theme={GREEN_THEME}
      />
      <ThemeButton
        onClick={() =>
          changeTheme({ userTheme: BLUE_THEME, themeColors: blueThemeColors })
        }
        theme={BLUE_THEME}
      />
    </div>
  </div>
);
