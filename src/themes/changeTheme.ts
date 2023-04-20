import {
  EIGHTH_ELEMENT,
  FIFTH_ELEMENT,
  FIRST_ELEMENT,
  FOURTH_ELEMENT,
  NINTH_ELEMENT,
  SECOND_ELEMENT,
  SEVENTH_ELEMENT,
  SIXTH_ELEMENT,
  THIRD_ELEMENT,
} from 'constants/common';

type ChangeThemeParams = {
  userTheme: string;
  themeColors: string[];
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
