import React from 'react';
import { styled } from 'styled-components';
import '../assets/css/Button.scss';

const Button = () => {
  return (
    <Container>
      <button className="custom-button">
        <div className="button-inner">
          <span className="button-text">CHECKOUT</span>
        </div>
      </button>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
