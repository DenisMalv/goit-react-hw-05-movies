import styled from '@emotion/styled';

export const MoviePageList = styled.ul`
  display: flex;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  list-style: none;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background: rgb(137 137 137);
  /* background: linear-gradient( 0deg, rgba(215, 254, 255, 0) 0%, rgba(69, 69, 69, 0.5) 50%, rgba(215, 254, 255, 0) 100% ); */
  margin: 0 auto 20px;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0px 0px 7px 8px rgb(137 137 137);
  height: 24px;
`;
export const SearchButton = styled.button`
  display: inline-block;
  color:#282828;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition:  color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: 
  cursor: pointer;
  outline: none;
  position: relative;
  background-color: #a0aead00;
  :hover {
    color: #00cdd5;
  }
  label {
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;
export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-family: Roboto;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #a0aead00;
  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const InputLabel = styled.label`
  width: 100%;
  background-color: #a0aead00;
`;
