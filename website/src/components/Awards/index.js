import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AwardList = [
  require('@site/static/img/awards/AWARD WINNER - Indiefare International Film Festival - 2023.png').default,
  require('@site/static/img/awards/AWARD WINNER - Top Film Awards - 2023.png').default,
  require('@site/static/img/awards/OFFICIAL SELECTION - New York Script Awards - 2023.png').default,
  require('@site/static/img/awards/quarter finalist_uniquevoices.png').default,
  require('@site/static/img/awards/quarter_finalist_uniquevoices-removebg-preview.png').default,
  require('@site/static/img/awards/Screenshot_20220607-192410_Instagram.jpg').default,
  require('@site/static/img/awards/SEMI_FINALIST - Kingston International Film Festival KIFF - 2022.png').default,
  require('@site/static/img/awards/WINNER - Best Script Award - London - 2022.png').default
]

export default function Awards() {
  return (
    <div className={styles.awards}>
      <div className={styles.awardsContainer}>
        {AwardList.map((award, idx) => (
          <img key={idx} src={award} alt={`Award ${idx}`} />
        ))}
      </div>
    </div>
  );
}
