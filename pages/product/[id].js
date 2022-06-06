import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.id
  return <h1>Product Detail {productId}</h1>
}

export default ProductDetail
