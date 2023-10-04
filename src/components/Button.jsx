import React from 'react';
import { styled, css } from 'styled-components';

const Button = ({ text, onClick, href = '#', secondary = false, disabled = false }) => (
  <Container role="button" href={href} tabIndex={0} {...{ secondary, disabled, onClick }}>
    {text}
  </Container>
);

export default Button;

const Container = styled.div`
  padding: 14px 30px;
  background: #4ec946;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  user-select: none;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #4a4a4a;
    `}

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;

      &:hover {
        cursor: default;
      }
    `}
`;
