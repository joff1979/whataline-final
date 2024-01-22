import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Intro from '@site/src/markdown/_intro.md';
import styles from './index.module.css';
import writersketch from '@site/static/img/writer_sketch-removebg-preview.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <img src={writersketch} alt="What a line" height="300"></img>
            </div>
          <div className="col col--6">
            <p className="heroTitle">{siteConfig.tagline}</p>
            <p className="heroPara"><Intro></Intro></p>
          </div>
          </div> 
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
