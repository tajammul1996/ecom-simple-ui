import CartItem from '@/components/CartItem/CartItem'

import styles from './page.module.css'

const cartItems = [
  {
    id: 'd9baf916-781b-4c2e-8d4a-3923b8a64a3d',
    name: "Absurd Full Sleeve Solid Men's Sweatshirt",
    price: 1375,
    description: "Absurd Full Sleeve Solid Men's Sweatshirt - Buy Royal Absurd Full Sleeve Solid Men's Sweatshirt For Only Rs. 1375 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    images: [
      'http://img6a.flixcart.com/image/sweatshirt/d/s/u/abms14-115-royal-absurd-l-original-imae4zh8bg5wyrhc.jpeg',
      'http://img5a.flixcart.com/image/sweatshirt/d/s/u/abms14-115-royal-absurd-l-original-imae4zh8bg5wyrhc.jpeg',
      'http://img5a.flixcart.com/image/sweatshirt/d/s/u/abms14-115-royal-absurd-l-original-imae4zh8hpfaugs2.jpeg',
      'http://img5a.flixcart.com/image/sweatshirt/d/s/u/abms14-115-royal-absurd-xxl-original-imae4zh8pfpezteg.jpeg',
      'http://img6a.flixcart.com/image/sweatshirt/d/s/u/abms14-115-royal-absurd-xl-original-imae4zh9ha8uqtpx.jpeg',
      'http://img5a.flixcart.com/image/sweatshirt/f/t/y/abms14-115-royal-absurd-m-original-imae4zh9ggz2gbgq.jpeg'
    ],
    createdAt: '2023-05-21T12:45:38.664Z',
    updatedAt: '2023-05-21T12:45:38.664Z'
  }
]

export default function Orders() {
  return (
      <div className={styles.cart}>
        { cartItems.length > 0 ? 
        <div>
          <h1>My orders</h1>
          {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
        </div> : <h2>Your order history is empty!</h2>}
      </div>
    )
}
