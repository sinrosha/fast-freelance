import React from 'react';
import HomeComp from '../components/Home/home';
import BaseLayout from '../components/Layout/BaseLayout/BaseLayout';
import content from "../content/home.json"
import styles from './index.module.css';

const Home = () => (
  <BaseLayout content={content}>
    <h1 className={styles.home}>Hello World</h1>
    <HomeComp />
  </BaseLayout>
);

export default Home;
