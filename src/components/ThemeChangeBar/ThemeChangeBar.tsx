import {
  blueThemeColors,
  greenThemeColors,
  redThemeColors,
  yellowThemeColors,
} from './Colors/Colors';
import { ThemeButton } from './ThemeButton/ThemeButton';
import style from './ThemeChangeBar.module.scss';

import { changeTheme } from 'App';
import { RED_THEME, YELLOW_THEME, GREEN_THEME, BLUE_THEME } from 'constants/common';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const ThemeChangeBar = (): ReturnComponentType => (
  <div className={style.container}>
    <ThemeButton
      onClick={() => changeTheme(RED_THEME, redThemeColors)}
      theme={RED_THEME}
    />
    <ThemeButton
      onClick={() => changeTheme(YELLOW_THEME, yellowThemeColors)}
      theme={YELLOW_THEME}
    />
    <ThemeButton
      onClick={() => changeTheme(GREEN_THEME, greenThemeColors)}
      theme={GREEN_THEME}
    />
    <ThemeButton
      onClick={() => changeTheme(BLUE_THEME, blueThemeColors)}
      theme={BLUE_THEME}
    />
  </div>
);
