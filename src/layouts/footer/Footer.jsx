import React from "react";
import styles from "./Footer.module.scss";
import Button from "../../components/button/Button";
import appLogo from "../../assets/images/app-logo.png";
import ArrowToRightIcon from "../../components/icons/ArrowToRightIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import TikTokIcon from "../../components/icons/TikTokIcon";
import YouTubeIcon from "../../components/icons/YouTubeIcon";

const Footer = () => {
  return (
    <footer>
      <div className={styles.contactUsSection}>
        <div className={`container ${styles.contactUsSectionContainer}`}>
          <div>Let's discuss making your interior like a dream place!</div>
          <div>
            <p>
              Contact us below to work together to build your amazing interior
            </p>
            <Button variant="light">Contact Us</Button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.logoWithText}>
            <div>
              <img src={appLogo} alt="app-logo" />
            </div>
            <div className={styles.text}>One of the best furniture agency.</div>
          </div>
          <div className={styles.formWithSocialAccounts}>
            <div className={styles.subscibe}>
              <div className={styles.label}>
                <span></span>
                <label>Enter your email to get the laterst news</label>
              </div>
              <div className={styles.textField}>
                <input type="email" placeholder="Email Address" />
                <ArrowToRightIcon />
              </div>
              <div className={styles.followUs}>
                <div className={styles.followUsContainer}>
                  <label>Follow us On</label>
                  <div className={styles.socialIcons}>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TikTokIcon />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <YouTubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
