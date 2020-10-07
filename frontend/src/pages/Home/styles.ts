import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  height: 100vh;
  overflow: ${({ open }) => open ? 'hidden' : 'auto'};
  overflow-x: hidden;
`;
