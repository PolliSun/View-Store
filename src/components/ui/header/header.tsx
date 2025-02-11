import React, { FC } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../../assets/images/logo.svg";
import { ReactComponent as CreateIcon } from "../../../assets/images/create.svg";
import { ReactComponent as ProductsIcon } from "../../../assets/images/products_box.svg";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <NavLink to={"/"} className={styles.link}>
            <HomeIcon fill="#00ffb0" className={styles.logo} />
            <h1 className={styles.title}>View-Store</h1>
          </NavLink>
        </div>
        <nav className={styles.navigation}>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <ProductsIcon className={styles.icon} />
            <p className={styles.text}>products</p>
          </NavLink>
          <NavLink
            to={"/create-product"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <CreateIcon className={styles.icon} />
            <p className={styles.text}>create</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
