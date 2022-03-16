import React, { useState, useEffect } from 'react';
import content from "@/content/404.json";
import BaseLayout from '@/components/Layout/BaseLayout/BaseLayout';
import styles from "./404.module.css"

const FourOFour = () => {

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@1.4.1/dist/lottie-player.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
  },[])
  return (
    <BaseLayout content={content}>
      <section className={styles.error}>
        { isScriptLoaded &&
          <lottie-player 
            src="/404.json"  background="transparent"  
            speed="1"  
            loop 
            autoplay
          ></lottie-player> 
        }
      </section>
    </BaseLayout>
  )
}
export default FourOFour;
