import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 340px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background-color: var(--color-primary-800);
  border: 1px solid var(--color-primary-400);
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 40px;

  ::hover {
    border-color: var(--color-accent);
  }
`;

export const InputE = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  padding: 0px 20px;
  color: var(--color-primary-100);
  cursor: pointer;

  ::placeholder {
    color: var(--color-primary-300);
  }
`;

export const SquareButton = styled.button`
  aspect-ratio: 1 / 1;
  height: 100%;
  display: grid;
  place-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;

  svg {
    color: var(--color-accent);
    height: 20px;
    width: 20px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: var(--color-accent);
  outline: 0;
  border: 0;
  cursor: pointer;
  color: var(--color-primary-100);
  font-weight: 500;

  :hover {
    background-color: var(--color-accent-hover);
  }
`;
