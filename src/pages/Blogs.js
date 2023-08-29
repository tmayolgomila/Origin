import React, {useState} from 'react';
import Layout from './Layout';

const Blogs = () => {

  const [currentStyle, setCurrentStyle] = useState('body-style-2');
  console.log(document.body.classList.value)
  return (
    <div>
      {(() => {
        if (currentStyle === 'body-style-1') {
          return <div>style1</div>;
        } else if (currentStyle === 'body-style-2') {
          return <div>style2</div>;
        } else if (currentStyle === 'body-style-3') {
          return <div>style3</div>;
        } else if (currentStyle === 'body-style-4') {
          return <div>style4</div>;
        }
      })()}

      <Layout currentStyle={document.body.classList.value} />
    </div>
  );
};

export default Blogs;
