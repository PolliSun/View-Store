import React, { FC } from "react";
import styles from "./product-card.module.css";
import { Link } from "react-router-dom";
import { TProduct } from "../../../utils/types";
import { ReactComponent as DeleteIcon } from "../../../assets/images/delete.svg";
import { ReactComponent as LikeIcon } from "../../../assets/images/like.svg";

type ProductCardUIProps = {
  product: TProduct;
};

export const ProductCardUI: FC<ProductCardUIProps> = ({ product }) => {
  return (
    <li className={styles.container}>
      <Link
        className={styles.article}
        to={`/products/${product.id}`}
        state={{ background: location.pathname }}
      >
        <img
          className={styles.image}
          src={product.image}
          alt="image product."
        />
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <DeleteIcon fill="#fff" className={styles.icon} />
          </button>
          <button className={styles.button}>
            <LikeIcon fill="#fff" className={styles.icon} />
          </button>
        </div>
        <p className={styles.price}>${product.price}</p>
      </Link>
    </li>
  );
};
