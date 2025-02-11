import React, { FC } from "react";
import styles from "./product-detail.module.css";
import { TProduct } from "../../../utils/types";
import { ReactComponent as BackButton } from "../../../assets/images/back_button.svg";

type ProductDetailUIProps = {
  product: TProduct;
  onBack: () => void;
};

export const ProductDetailUI: FC<ProductDetailUIProps> = ({
  product,
  onBack,
}) => {
  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={onBack}>
        <BackButton fill="#00ffb0" className={styles.backButton} />
      </button>
      <article className={styles.article}>
        <div className={styles.conteinerTitle}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>$ {product.price}</p>
        </div>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.conteinerImage}>
          <img
            className={styles.image}
            src={product.image}
            alt="image product"
          />
          <div className={styles.about}>
            <span className={styles.aboutText}>about :</span>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      </article>
    </section>
  );
};
