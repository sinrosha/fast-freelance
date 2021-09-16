import React from 'react';
import AboutComponent from '../components/About/about';
import styles from './about.module.css';

const About = () => (
  <>
    <h1 className={styles.about}>About</h1>
    <AboutComponent />
  </>
);

export default About;
