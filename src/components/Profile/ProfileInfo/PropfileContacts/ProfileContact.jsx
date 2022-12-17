import PropTypes from "prop-types";
import { Icon24LogoFacebook } from '@vkontakte/icons';
import { Icon24LogoInstagram } from '@vkontakte/icons';
import { Icon24LogoTwitter } from '@vkontakte/icons';
import { Icon16Globe } from '@vkontakte/icons';
import { Icon28PlayCards2Outline } from '@vkontakte/icons';
import { Icon16Linked } from '@vkontakte/icons';
import { Icon24LogoVkColor } from '@vkontakte/icons';
import styles from "../../ProfileInfo/ProfileInfo.module.css";


const github = <svg  className={styles.link__logo}   width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

export const ProfileContact = ({property, value}) => {
   let  icon = null;
    switch (property) {
        case "github": {
            icon = github
            break
        }
        case "vk": {
            icon = <Icon24LogoVkColor width={16} height={16} className={styles.link__logo} />
            break
        }
        case "facebook": {
            icon = <Icon24LogoFacebook width={16} height={16} className={styles.link__logo} />
            break
        }
        case "instagram": {
            icon = <Icon24LogoInstagram width={16} height={16} className={styles.link__logo} />
            break
        }
        case "twitter": {
            icon = <Icon24LogoTwitter width={16} height={16} className={styles.link__logo} />
            break
        }
        case "website": {
            icon = <Icon16Globe width={16} height={16} className={styles.link__logo} />
            break
        }
        case "youtube": {
            icon = <Icon28PlayCards2Outline width={16} height={16} className={styles.link__logo} />
            break
        }
        case "mainLink": {
            icon = <Icon16Linked width={16} height={16} className={styles.link__logo} />
            break
        }
        default: {} 
    }


  return ( value ?
    <div className={styles.link}>
      {icon}
      <a href={`${value}`} target="_blank" rel="noopener noreferrer">
        {value.replace("https://", "")}
      </a>
    </div>
    : null
  );
};


ProfileContact.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };
  