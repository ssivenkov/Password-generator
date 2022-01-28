import style from './Recommendations.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Recommendations = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.contentContainer}>
      <div>
        If it sounds hard to come up with a unique, random password each and every time
        you sign up for a new service, that’s because it is. 81% of data breaches are
        caused by weak or reused passwords, so random, unique passwords are your best
        defense against online threats. Therefore suggest you use this app for generate
        strong passwords.
      </div>
    </div>

    <div className={style.contentContainer}>
      <div className={style.question}>Why should my password be unique?</div>
      <div>
        If you use the same password for both your email and your bank account login, an
        attacker only needs to steal one password to get access to both accounts, doubling
        your exposure. If you&apos;ve used that same password for multiple different
        accounts, you&apos;re making the attacker&apos;s job very, very easy.
      </div>
    </div>

    <div className={style.contentContainer}>
      <div className={style.question}>Why should my password be random?</div>
      <div>
        Random passwords are hard to guess and harder for computer programs to crack. If
        there&apos;s a discernible pattern, the odds of an attacker gaining access to your
        account go up exponentially. Random passwords contain a jumble of unrelated
        characters, therefore their hack is much harder.
      </div>
    </div>

    <div className={style.contentContainer}>
      <div>Tips:</div>
    </div>

    <div className={style.contentContainer}>
      <div>
        Never include personally identifiable information in your passwords – or any
        fields related to your login credentials for that matter. You might be surprised
        at how much of that information can be found online. Those three security
        questions that your bank requires for you to log in? Don&apos;t answer those.
        Instead, use this app to generate random, unique answers to those questions. Save
        the answers in this app just like you would a regular password, and you&apos;re
        good to go.
      </div>
    </div>

    <div className={style.contentContainer}>
      <div>
        If possible, try to make passwords passwords at least 16 characters in length.
        Length can make a password much stronger than adding non-letters to a password. A
        12-character, letters-only password is just eight times harder to crack than a
        12-character password with digits, for example. But a 16-character, letters-only
        password is eight million times harder to guess than a 12-character password.
      </div>
    </div>

    <div className={style.contentContainer}>
      <div>
        To store passwords, we recommend creating a text file in which you can write login
        data to the desired you sites. Then put this file in an archive and protect the
        archive with a password. Thus, you only need to remember one password so that only
        you can access the login data for the sites you need.
      </div>
    </div>
  </div>
);
