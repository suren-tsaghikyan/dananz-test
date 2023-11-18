import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  variant,
  onClick,
  disabled = false,
  children,
  ...restAttributes
}) => {
  return (
    <button
      className={styles[variant]}
      onClick={onClick}
      disabled={disabled}
      {...restAttributes}
    >
      {children}
    </button>
  );
};

export default Button;
