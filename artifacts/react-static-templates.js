

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.tsx'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.tsx'
      
const t_1 = universal(import('__react_static_root__/src/pages/about.tsx'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/about.tsx'
      
const t_2 = universal(import('__react_static_root__/src/pages/blog.tsx'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/blog.tsx'
      
const t_3 = universal(import('__react_static_root__/src/pages/index.tsx'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/index.tsx'
      
const t_4 = universal(import('__react_static_root__/src/containers/Post'), universalOptions)
      t_4.template = '__react_static_root__/src/containers/Post'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.tsx': t_0,
'__react_static_root__/src/pages/about.tsx': t_1,
'__react_static_root__/src/pages/blog.tsx': t_2,
'__react_static_root__/src/pages/index.tsx': t_3,
'__react_static_root__/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.tsx"

