import React from 'react';
import Heading from './mcomponents/Heading';
import BlogCard from './mcomponents/BlogCard ';

const LatestBlogs = () => {
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
    <Heading text='Latest Blogs' />
    <div className='grid md:grid-cols-3 md:gap-4 lg:gap-10'>
        <BlogCard />
           </div>
</div>
  )
}

export default LatestBlogs;
