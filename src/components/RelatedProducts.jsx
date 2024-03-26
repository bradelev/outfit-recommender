/* eslint-disable react/prop-types */
import CardProduct from './CardProduct';
import classes from './RelatedProducts.module.css';

const RelatedProducts = ({ products }) => {
  return (
    <div className={classes.relatedProducts} id="relatedProducts">
      {products.map((product, index) => (
        <CardProduct key={index} product={product} />
      ))}
    </div>
  );
};

export default RelatedProducts;
