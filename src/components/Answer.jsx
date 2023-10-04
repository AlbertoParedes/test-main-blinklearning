import React, { forwardRef } from 'react';
import { styled, css } from 'styled-components';

const Answer = forwardRef(({ answerId, answerTitle, drop, children, isValid = false, ignoreValidation = false }, ref) => {
  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  return (
    <Container>
      <Title {...{ isValid, ignoreValidation }}>{answerTitle}</Title>
      <Placeholder ref={ref} {...{ isValid, ignoreValidation }} id={answerId} onDrop={(ev) => drop(ev, answerId)} onDragOver={allowDrop}>
        {children}
      </Placeholder>
    </Container>
  );
});

export default Answer;

const Container = styled.div`
  margin: 0 1rem;
`;

const Title = styled.p`
  text-transform: capitalize;
  ${({ isValid, ignoreValidation }) =>
    isValid &&
    !ignoreValidation &&
    css`
      color: green;
    `}

  ${({ isValid, ignoreValidation }) =>
    !isValid &&
    !ignoreValidation &&
    css`
      color: red;
    `}
`;

const Placeholder = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px #a8a5a5 solid;
  border-radius: 6px;

  ${({ isValid, ignoreValidation }) =>
    isValid &&
    !ignoreValidation &&
    css`
      border-color: green;
    `}

  ${({ isValid, ignoreValidation }) =>
    !isValid &&
    !ignoreValidation &&
    css`
      border-color: red;
    `}
`;
