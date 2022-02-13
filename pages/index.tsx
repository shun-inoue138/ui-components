import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeadingWithNumber from '../src/components/atoms/HeadingWithNumber';
import SpeechBubbleLikeHeading from '../src/components/atoms/SpeechBubbleLikeHeading';
import UnderLinedText from '../src/components/atoms/UnderLinedText';

const Home: NextPage = () => {
  return (
    <>
      <HeadingWithNumber numData="02">hogehogehoge</HeadingWithNumber>
      <SpeechBubbleLikeHeading>sample text</SpeechBubbleLikeHeading>
      <p className="p-4 text-xl font-semibold tracking-wide">
        <UnderLinedText>hogehoge</UnderLinedText>
      </p>
    </>
  );
};

export default Home;
