import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin color="#00BFFF" height={30} width={30} ariaLabel="loading" />
    </LoaderWrapper>
  );
};
