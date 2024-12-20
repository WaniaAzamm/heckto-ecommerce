import Companies from '.././components/Companies'
import MainHeader from '.././components/MainHeader'
import ProductCard from '.././components/mcomponents/ProductCard'
import StoreDatahandler from '.././components/mcomponents/StoreDatahandler'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'

const ShopGrid = () => {
  return (
    <>
      <MainHeader title='Shop Grid Default' prev='Home . Pages . ' current='Shop Grid Default' />
       <StoreDatahandler />

      <div className="px-5 md:px-10 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 py-10">
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
      </div>
        <Companies />
    </>
  )
}

export default ShopGrid