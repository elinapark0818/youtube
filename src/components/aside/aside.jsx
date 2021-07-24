import React, { memo } from 'react';
import styles from './aside.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Aside = memo(() => {
  return (
    <ul className={styles.list}>
      <li className={`${styles.item} ${styles.selected}`}>
        <a className={styles.link} title='홈' href='/'>
        <FontAwesomeIcon icon={faHome} className="styles.icon" />Home
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='탐색' href='/'>
        <FontAwesomeIcon icon={faCompass} className="styles.icon" />Compass
        </a>
      </li>
      
      <li className={styles.item}>
        <a className={styles.link} title='YouTube Music' href='/'>
        <FontAwesomeIcon icon={faPlayCircle} className="styles.icon" />Subscribe
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='보관함' href='/'>
        <FontAwesomeIcon icon={faArchive} className="styles.icon" />Locker
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='시청 기록' href='/'>
        <FontAwesomeIcon icon={faHistory} className="styles.icon" />History
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='내 동영상' href='/'>
        <FontAwesomeIcon icon={faUserPlus} className="styles.icon" />My video
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='좋아요 표시한 동영상' href='/'>
        <FontAwesomeIcon icon={faThumbsUp} className="styles.icon" />Like
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='더보기' href='/'>
        <FontAwesomeIcon icon={faChevronDown} className="styles.icon" />More
        </a>
      </li>
      
    </ul>
  );
});

export default Aside;