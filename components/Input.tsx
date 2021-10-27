import copy from 'copy-to-clipboard';
import React, { createRef, HTMLAttributes, useRef, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { characters } from '../utils/types';
import { InputE, InputWrapper, SquareButton } from './styles';

const Input = ({ ...props }: any) => {
  const ref = createRef<HTMLInputElement>();

  const handleClick = () => {
    if (!ref.current) return;
    const value = ref.current.value;
    if (value === characters.default) return;

    copy(value);
  };

  return (
    <InputWrapper>
      <InputE type='text' autoFocus={true} placeholder='Password' ref={ref} readOnly {...props} />
      <SquareButton aria-label='Copy' onClick={handleClick}>
        <IoCopyOutline />
      </SquareButton>
    </InputWrapper>
  );
};

export default Input;
