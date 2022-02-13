import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeadingWithNumber from '../src/components/atoms/HeadingWithNumber';
import SpeechBubbleLikeHeading from '../src/components/atoms/SpeechBubbleLikeHeading';

const Home: NextPage = () => {
  return (
    <>
      <HeadingWithNumber numData="02">hogehogehoge</HeadingWithNumber>
      <SpeechBubbleLikeHeading>sample text</SpeechBubbleLikeHeading>
    </>
  );
};

export default Home;
