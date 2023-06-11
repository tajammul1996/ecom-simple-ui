import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL } from "../../helpers/constants";
import styles from "./page.module.css";

export default async function Products() {
  const response = await fetch(`${BASE_URL}/api/products?limit=200`);
  const data = await response.json();
  const products = data.data;

  return (
    <div className={styles.productsPage}>
      <SearchBar />
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// React server components
// Pros - less code, fast, cache, bundle size,
//  Cons - can't handle user interaction, no client side logic
