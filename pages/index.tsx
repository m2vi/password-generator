import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Input from '../components/Input';
import { Button, Inner, Wrapper } from '../components/styles';
import { characters, PasswordGenerator } from '../utils/password-generator';

const Home: NextPage = () => {
  const [value, setValue] = useState(characters.default as string);

  const generator = new PasswordGenerator();

  const generate = () =>
    generator.getPassword({
      length2: 32,
      letters: true,
      numbers: true,
      specialCharacters: true,
      lockedSpecialCharacters: false,
    });

  return (
    <>
      <Head>
        <title>Password Generator</title>
      </Head>
      <Wrapper>
        <Inner>
          <Input value={value} />
          <Button onClick={() => setValue(generate())}>Generate</Button>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
