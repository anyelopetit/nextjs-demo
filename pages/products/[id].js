import React from 'react'
import { useRouter } from 'next/router'

const productItem = () => {
  const router = useRouter()
  return (
    <div>
      Producto: {router.query.id}
    </div>
  )
}

export default productItem
