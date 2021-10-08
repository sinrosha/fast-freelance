import React from 'react';
import BaseLayout from '@/components/Layout/BaseLayout/BaseLayout';
import content from "@/content/home.json"
import styles from './index.module.css';

const Home = () => (
  <BaseLayout content={content}>
    <h1>Hello World</h1>
  </BaseLayout>
);

export default Home;
