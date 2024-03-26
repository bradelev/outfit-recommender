/* eslint-disable react/prop-types */
import classes from './CardProduct.module.css';

const CardProduct = ({ product }) => {

  const handleAddCart = () => {
    alert('Added to Cart!');
  }

  return (
    <div className={classes['CardProduct']}>
      <img src={product.img} alt={product.title} />
      <div className={classes.cardProductCaption}>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <button className={classes['upload-button']} onClick={handleAddCart}>
        {'Add to Cart'}
      </button>
    </div>
  );
};

export default CardProduct;
