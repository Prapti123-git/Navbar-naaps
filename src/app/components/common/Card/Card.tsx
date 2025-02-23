import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  imageUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  linkUrl: string;
  reverse?: boolean; // for switching content to left or right
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  title,
  subtitle,
  description,
  linkText,
  linkUrl,
  reverse = false,
}) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={altText} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={linkUrl} className={styles.link}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;
