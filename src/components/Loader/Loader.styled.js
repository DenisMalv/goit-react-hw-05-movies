import styled from '@emotion/styled';
import { ImSpinner2 } from 'react-icons/im';

export const LoaderIcon = styled(ImSpinner2)`
position:absolute;
top:50%;
left:50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  animation: loading-spinner 0.4s infinite linear;
  @keyframes loading-spinner {
  0% {
    transform: rotate(0deg);
  }
          
  100% {
    transform: rotate(360deg);
  }
`;
