import React from 'react';

//w-[max-content] + pr-8でボーダーをちょうどいい長さに設定。h2タグにdata-number属性を設定し、before:content-[attr(data-number)]の形で受け取る。
//テキストをspanタグで囲いrelativeとz-20を設定しているのはbefore擬似属性の01の上部に配置するため。
const HeadingWithNumber = ({ numData = '01', children }) => {
  return (
    <h2
      className="w-[max-content] text-2xl p-4 pr-8 relative border-b-[#243c5a] border-b-2  before:content-[attr(data-number)] before:absolute before:top-0 before:left-0 before:text-[rgba(229,192,70,0.5)] before:z-10 before:text-6xl before:font-extrabold"
      data-number={numData}
    >
      <span className="relative z-20">{children}</span>
    </h2>
  );
};

export default HeadingWithNumber;