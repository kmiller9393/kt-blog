

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/kumi5605/Desktop/projects/kt-blog/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/404.js'
      
const t_1 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/blog.js'), universalOptions)
      t_1.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/blog.js'
      
const t_2 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/contact.js'), universalOptions)
      t_2.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/contact.js'
      
const t_3 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/food.js'), universalOptions)
      t_3.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/food.js'
      
const t_4 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/index.js'), universalOptions)
      t_4.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/index.js'
      
const t_5 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/lifestyle.js'), universalOptions)
      t_5.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/lifestyle.js'
      
const t_6 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post.js'), universalOptions)
      t_6.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post.js'
      
const t_7 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/thoughts.js'), universalOptions)
      t_7.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/thoughts.js'
      
const t_8 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/travel.js'), universalOptions)
      t_8.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/travel.js'
      
const t_9 = universal(import('/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post'), universalOptions)
      t_9.template = '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post'
      

// Template Map
export default {
  '/Users/kumi5605/Desktop/projects/kt-blog/src/pages/404.js': t_0,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/blog.js': t_1,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/contact.js': t_2,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/food.js': t_3,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/index.js': t_4,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/lifestyle.js': t_5,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post.js': t_6,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/thoughts.js': t_7,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/travel.js': t_8,
'/Users/kumi5605/Desktop/projects/kt-blog/src/pages/post': t_9
}
// Not Found Template
export const notFoundTemplate = "/Users/kumi5605/Desktop/projects/kt-blog/src/pages/404.js"

