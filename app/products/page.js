import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./page.module.css";


export default async function Products() {
  const response = await fetch("http://64.225.87.22/api/products");
  console.log(response)
  const data = await response.json()
  const products = data.data;

  console.log(products[0])

 
  return (
    <div className={styles.productsPage}>
      <h1>Product Catalog</h1>
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