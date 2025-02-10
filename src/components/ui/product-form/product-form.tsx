import React, { FC } from "react";
import styles from "./product-form.module.css";
import { TProduct } from "../../../utils/types";
import { ReactComponent as BackButton } from "../../../assets/images/back_button.svg";

type ProductFormUIProps = {
  product: Omit<TProduct, "id">;
  categories: string[];
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBack: () => void;
};

export const ProductFormUI: FC<ProductFormUIProps> = ({
  product,
  categories,
  onSubmit,
  onChange,
  onBack,
}) => {
  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={onBack}>
        <BackButton fill="#00ffb0" className={styles.backButton} />
      </button>
      <form className={styles.form} onSubmit={onSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Select a product category *</legend>
          <div className={styles.categoryGroup} id="category">
            {categories.map((category) => (
              <label
                key={category}
                className={product.category === category ? styles.active : ""}
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={product.category === category}
                  onChange={onChange}
                  className={styles.radio}
                  required
                />
                {category}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            Add the product title *
          </label>
          <textarea
            id="title"
            name="title"
            value={product.title}
            onChange={onChange}
            placeholder="enter product title"
            className={styles.title}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="description">
            Add the product description *
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={onChange}
            placeholder="enter product description"
            className={styles.description}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="image">
            Add product image URL *
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={onChange}
            className={styles.image}
            value={product.image}
            required
            placeholder="enter image URL"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="price">
            Add product price *
          </label>
          <div className={styles.conteinerPrice}>
            <input
              type="number"
              name="price"
              min="0.49"
              step="0.01"
              id="price"
              className={styles.price}
              value={product.price}
              onChange={onChange}
              placeholder="enter price, example 9.99"
              required
            />
            <p className={styles.currency}>$</p>
          </div>
        </div>

        <span className={styles.requiredNote}>
          Fields marked with * are required.
        </span>

        <button type="submit" className={styles.submit}>
          Create
        </button>
      </form>
    </section>
  );
};
