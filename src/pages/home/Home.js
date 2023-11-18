import React from "react";
import styles from "./Home.module.scss";
import minimalistRoomImage from "../../assets/images/main-image.png";
import galleryImage1 from "../../assets/images/image1.png";
import galleryImage2 from "../../assets/images/image2.png";
import galleryImage3 from "../../assets/images/image3.png";
import galleryImage4 from "../../assets/images/image4.png";
import galleryImage5 from "../../assets/images/image5.png";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className="container">
        <h1 className={styles.title}>Minimalist Room</h1>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={styles.mainImage}>
          <img src={minimalistRoomImage} alt="Minimalist Room" />
        </div>
        <div className={styles.overviewAndProcess}>
          <div>
            <h2>Project Overview</h2>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <div className={styles.date}>
              <span>July 22 - 2022</span>
              <span>Interior Design - Furnitur</span>
            </div>
          </div>
          <div>
            <h2>Design Process</h2>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <br />
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </div>
        </div>
        <div className={styles.galleryGrid}>
          <div>
            <img src={galleryImage1} alt="galleryImage1" />
          </div>
          <div>
            <img src={galleryImage2} alt="galleryImage2" />
          </div>
          <div>
            <img src={galleryImage3} alt="galleryImage3" />
          </div>
          <div>
            <img src={galleryImage4} alt="galleryImage4" />
          </div>
          <div>
            <img src={galleryImage5} alt="galleryImage5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
