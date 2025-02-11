import React, { FC } from "react";
import styles from "./home-page.module.css";
import { NavLink } from "react-router-dom";

export const HomePageUI: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Hello! Welcome to View-Store.</h2>
      <p className={styles.description}>
        This is a product card catalog where you can browse and make small
        modifications.
      </p>
      <p className={styles.paragraph}>Here, you can:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          View product cards as a full list or individually. All cards are
          available on the{" "}
          <NavLink to="/products" className={styles.link}>
            Products
          </NavLink>{" "}
          page.
        </li>
        <li className={styles.item}>
          Add products to favorites and filter them by Favorites.
        </li>
        <li className={styles.item}>
          Create your own product cards on the{" "}
          <NavLink to="/create-product" className={styles.link}>
            Create
          </NavLink>{" "}
          page.
        </li>
        <li className={styles.item}>Delete cards from the main list.</li>
      </ul>

      <p className={styles.paragraph}>Add, delete, filter, choose…</p>

      <p className={styles.paragraph}>
        Simple to use, visually appealing, and conveniently organized for
        effortless navigation.
      </p>
    </section>
  );
};
