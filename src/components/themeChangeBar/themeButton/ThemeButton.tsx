import styles from './ThemeButton.module.scss';
import { ThemeButtonPropsType } from './types';

export const ThemeButton = (props: ThemeButtonPropsType) => {
  const { theme, onClick } = props;

  return (
    <button
      className={`${styles.themeButton} ${styles[theme]}`}
      onClick={onClick}
      type='button'
    />
  );
};
