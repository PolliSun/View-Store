import React, { FC } from "react";
import styles from "./product-card.module.css";
import { Link } from "react-router-dom";
import { TProduct } from "../../../utils/types";
import { ReactComponent as DeleteIcon } from "../../../assets/images/delete.svg";
import { ReactComponent as LikeIcon } from "../../../assets/images/like.svg";

type ProductCardUIProps = {
  product: TProduct;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
};

export const ProductCardUI: FC<ProductCardUIProps> = ({
  product,
  onLike,
  onDelete,
}) => {
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
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
        </div>
      </Link>
      <button
        className={styles.buttonDelete}
        onClick={() => {
          onDelete(product.id);
        }}
      >
        <DeleteIcon fill="#00000075" className={styles.icon} />
      </button>
      <button
        className={styles.buttonLike}
        onClick={() => {
          onLike(product.id);
        }}
      >
        <LikeIcon
          fill={product.isLiked ? "#ff7474" : "#00000075"}
          className={styles.icon}
        />
      </button>
    </li>
  );
};
