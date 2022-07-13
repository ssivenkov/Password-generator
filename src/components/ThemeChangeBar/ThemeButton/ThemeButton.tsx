import style from './ThemeButton.module.scss';
import { ThemeButtonPropsType } from './types';

export const ThemeButton = (props: ThemeButtonPropsType) => {
  const { theme, onClick } = props;

  return (
    <button
      className={`${style.baseButton} ${style[theme]}`}
      onClick={onClick}
      type='button'
    />
  );
};
