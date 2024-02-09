import { products } from '../../data/products';
import styles from './styles.module.css';

const ProductPage = ({ params }) => {
  const productId = params.id;

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productCard}>
      {' '}
      {/* Apply the CSS module */}
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductPage;
