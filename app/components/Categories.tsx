import React from 'react';
import Heading from './mcomponents/Heading';
import ProductCard from './mcomponents/ProductCard';

const Categories = () => {
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
        <Heading text='Top Categories' />
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10'>
            <ProductCard designType='CATEGORY PRODUCT' />

        </div>
    </div>
  )
}

export default Categories;
