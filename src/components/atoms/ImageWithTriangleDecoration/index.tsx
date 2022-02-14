import React, { VFC } from 'react';
import Image from 'next/image';

const ImageWithTriangleDecoration: VFC<{ img: string }> = ({ img }) => {
  return (
    <div className=" relative  before:r-t-triangle before:absolute  before:top-[-10px] before:right-[-10px]  before:content-[''] before:z-10 after:l-b-triangle after:absolute after:left-[-10px] after:bottom-[-10px] after:content-[''] after:z-10">
      <Image src={img} alt="hoge" width={1200} height={800} />
    </div>
  );
};

export default ImageWithTriangleDecoration;
