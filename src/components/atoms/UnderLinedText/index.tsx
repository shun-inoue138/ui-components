import React, { VFC } from 'react';

const UnderLinedText: VFC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="bg-gradient-to-b from-transparent via-transparent to-[#243c5a]">
      {children}
    </span>
  );
};

export default UnderLinedText;
