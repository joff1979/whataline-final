import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const Projects = [
  {
    title: 'All Good',
    Img: require('@site/static/img/All_Good_Cover.jpg').default,
    description: (
      <>
        In a world where troublesome feelings can be erased, an embittered protestor seizes the opportunity of a power cut to try to dissuade a clinic's clients from having their procedure.Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    categories: (
      <>
        <p>Short  |  Drama  |  Sci-Fi</p>
      </>
    ),
  },
  {
    title: 'Fantasy Festival',
    Img: require('@site/static/img/Fantasy_Festival_Cover.png').default,
    description: (
      <>
        Two clueless teens stranded at a festival 30 years in the past battle their inexperience and emotional hang-ups as they form pivotal relationships and seek a pathway home.
      </>
    ),
    categories: (
      <>
        <p>Feature  |  Coming-of-Age  |  Comedy</p>
      </>
    ),
  },
  {
    title: 'Live Long',
    Img: require('@site/static/img/Live_Long_Cover.png').default,
    description: (
      <>
        Trapped in a temporal loop following a fatal accident, a beleaguered florist makes the ultimate sacrifice to free herself and save her soulmate from repeated death.
      </>
    ),
    categories: (
      <>
        <p>Feature  |  Romance  |  Dramedy</p>
      </>
    ),
  },
  {
    title: 'The Late Shift',
    Img: require('@site/static/img/The_Late_Shift_Cover.png').default,
    description: (
      <>
        An awkward threesome forces the restless trio to confront their doubts and insecurities as they pursue emotional fulfilment.
      </>
    ),
    categories: (
      <>
        <p>60 min Pilot  |  Ensemble Drama  |  Romance</p>
      </>
    ),
  },
  {
    title: 'Vincible',
    Img: require('@site/static/img/Vincible_Poster.png').default,
    description: (
      <>
        A conflicted victim of image-based sexual abuse must examine her morals when a vigilante fights fire with fire.
      </>
    ),
    categories: (
      <>
        <p>Short  |  Drama</p>
      </>
    ),
  },
];

function Work({Img, title, description, categories}) {
  return (
    <section className={styles.worksContainer}>
      <div className="row">
        <div className="col col--6">
          <img className={styles.featureImg} src={Img}  height="300" />
        </div>
        <div className="col col--6">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{categories}</p>
        </div>
      </div>
    </section>
  );
}

export default function Works() {
  return (
    <section >
      <div className="container">
          {Projects.map((props, idx) => (
            <Work key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}
