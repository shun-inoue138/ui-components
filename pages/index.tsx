import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeadingWithNumber from '../src/components/atoms/HeadingWithNumber';

const Home: NextPage = () => {
  return (
    <>
      <HeadingWithNumber numData="02">hogehogehoge</HeadingWithNumber>
    </>
  );
};

export default Home;
