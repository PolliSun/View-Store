import React, { FC } from "react";
import styles from "./home-page.module.css";

export const HomePageUI: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Hello! Welcome to View-Store.</h2>
      <p>
        This is a product card catalog where you can browse and make small
        modifications.
      </p>
      <p>Here, you can:</p>
      <ul>
        <li>
          View product cards as a full list or individually. All cards are
          available on the Products page.
        </li>
        <li>Add products to favorites and filter them by Favorites.</li>
        <li>Create your own product cards on the Create page.</li>
        <li>Delete cards from the main list.</li>
      </ul>

      <p>Add, delete, filter, choose…</p>

      <p>
        Simple to use, visually appealing, and conveniently organized for
        effortless navigation.
      </p>
    </section>
  );
};