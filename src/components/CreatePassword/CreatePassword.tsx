import { Button } from '../common/Button/Button';

import style from './CreatePassword.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const CreatePassword = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.description}>
      Generate secure, random passwords to stay safe online
    </div>
    <div className={style.passwordContainer}>
      <div className={style.password}>Password</div>
    </div>
    <div className={style.buttonsContainer}>
      <Button>Generate</Button>
    </div>
    <div className={style.settingsContainer}>Settings</div>
  </div>
);
