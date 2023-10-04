import React, { forwardRef } from 'react';
import { styled, css } from 'styled-components';
const Response = forwardRef(({ responseId, onDragStart, draggable = false, onDragEnd, className, icon: Icon }, ref) => (
  <Container ref={ref} className={className} onDragStart={() => draggable && onDragStart(responseId)} onDragEnd={onDragEnd} draggable={draggable}>
    <Icon />
  </Container>
));

export default Response;

const Container = styled.div`
  &:hover {
    ${({ draggable }) =>
      draggable &&
      css`
        cursor: grab;
      `}
  }
`;
