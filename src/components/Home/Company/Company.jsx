import React from 'react';
import styles from './Company.module.css'; // Ensure this path is correct
import video from '../../../assets/videos/video.mp4'; // Ensure this path is correct

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <video autoPlay loop muted className={styles.heroVideo}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1>Delivering software products beyond expectations</h1>
        <button className={styles.heroButton}>Ctact Us</button>
      </div>
    </div>
  );
};

export default HeroSection;
