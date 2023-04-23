import React from 'react';
import LoafMug from "../assets/gif/loaf-mug-with-cartoon-steam-rising.gif";
import styles from './Splashpage.module.css';

function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

const links = ["Personal blog", "GitHub"];

function Splashpage() {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <img className={styles.mug_image} src={LoafMug} alt="mug" />
        <List items={links} />
        <p>
          This website is a place for myself (Ch0live) to post content to the internet.
          My aim is to exercise my skills in writing and programming through creating content for this site (and creating the site itself!).
          Hopefully it is also interesting to read and explore, but if not feel free to switch back to Twitter.
        </p>
        <p className={styles.warning}>
          Please be aware that the site is very disfunctional at the moment as I have begun the process of recreating the original HTML CSS site to a React app.
          I will have everything fixed and working soon!
        </p>
      </div>
    </div>
  );
}

export default Splashpage;