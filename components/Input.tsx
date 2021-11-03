import copy from 'copy-to-clipboard';
import React, { createRef } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { characters } from '../utils/password-generator';
import { InputE, InputWrapper, SquareButton, TopEl } from './styles';

const Input = ({ ...props }: any) => {
  const ref = createRef<HTMLInputElement>();

  const handleClick = () => {
    toast.dismiss();
    if (!ref.current) return;
    const value = ref.current.value;
    if (value === characters.default) return;

    copy(value);

    toast('Copied', {
      position: 'bottom-center',
      autoClose: 1250,
      pauseOnHover: false,
      pauseOnFocusLoss: true,
      draggable: false,
      delay: 0,
      bodyStyle: {
        margin: 0,
        padding: 0,
        display: 'grid',
        placeItems: 'center',
      },
      style: {
        margin: 0,
        minHeight: 0,
        padding: '10px 5px',
        borderRadius: '8px',
        background: 'var(--color-accent)',
        textAlign: 'center',
      },
    });
  };

  return (
    <InputWrapper>
      <TopEl onClick={handleClick} />
      <InputE type='text' placeholder='Password' ref={ref} readOnly {...props} />
      <SquareButton aria-label='Copy'>
        <IoCopyOutline />
      </SquareButton>
    </InputWrapper>
  );
};

export default Input;
