import React from "react";
import styles from "./Header.module.scss";
import appLogo from "../../assets/images/app-logo.png";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className={`container ${styles.headerContainer}`}>
          <div>
            <img src={appLogo} alt="app-logo" />
          </div>
          <div className={styles.navigation}>
            <Navbar />
            <div className={styles.contactUsBtn}>
              <Button variant="primary">Contact Us</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
