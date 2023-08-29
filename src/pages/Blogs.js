import React from 'react';
import Layout from './Layout';

const Blogs = () => {

  return (
    <div>
      {(() => {
        if (document.body.classList.value === 'body-style-1') {
          return <div>style1</div>;
        } else if (document.body.classList.value === 'body-style-2') {
          return <div>style2</div>;
        } else if (document.body.classList.value === 'body-style-3') {
          return <div>style3</div>;
        } else if (document.body.classList.value === 'body-style-4') {
          return <div>style4</div>;
        }
      })()}

      <Layout currentStyle={document.body.classList.value} />
    </div>
  );
};

export default Blogs;
