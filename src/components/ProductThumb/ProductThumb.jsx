import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Product.module.css';
import Ribbon from './Ribbon/Ribbon';
import RatingStars from './RatingStars/RatingStars';
import ActionsBox from './ActionsBox/ActionsBox';
import Prices from './Prices/Prices';
import { ITEM } from '../../constants/routes';

const ProductThumb = props => {
  const {
    item: { thumbnails, title, desc, rating, price, ribbonType, oldPrice, id }
  } = props;

  return (
    <div className={styles.Product}>
      <div className={styles.ProductInner}>
        <div className={styles.ImageBox}>
          <Ribbon type={ribbonType} />
          <Link to={`${ITEM}/${id}`}>
            <img src={thumbnails[0]} alt={desc} className={styles.Image} />
          </Link>
          <ActionsBox
            additionalClassName={styles.ActionsBox}
            addedToCart={props.onAddToCart}
            fetching={props.addingToCart}
            fetched={props.addedToCart}
          />
        </div>
        <div className={styles.Details}>
          <h3 className={styles.Title}>{title}</h3>
          <RatingStars rating={rating} />
          <Prices price={price} oldPrice={oldPrice} />
        </div>
      </div>
    </div>
  );
};

export default ProductThumb;
