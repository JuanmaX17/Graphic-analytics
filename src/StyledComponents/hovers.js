import styled from 'styled-components';

export const IndicatorHov = styled.div`
  border-radius: 3px;
  width: 74%;
  margin: 0 auto;
  cursor: pointer;
  &:hover + div {
    visibility: visible !important;
    opacity: 1 !important;
  }
`;
