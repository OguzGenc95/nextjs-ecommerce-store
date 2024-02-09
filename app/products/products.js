import Link from 'next/link';
import Header from '../components/Header';
import { products } from '../data/products';
import styles from './styles.module.css';

const ProductsPage = () => {
  return (
    <div>
      <h1 data-test-id="products-page-title">Products</h1>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className={styles.product}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
