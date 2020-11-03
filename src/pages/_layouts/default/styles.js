import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #e4e5e6, #e4e5e1);
  display: flex;
  justify-content: center;
  align-items: center;

  .linkButton{
    flex-direction: row;
    border: 1;
    border-radius: 4px;
    height: 39px;
    padding: 10px;
    margin: 0 0 10px;
    margin-top: 11px;
    margin-bottom: 30px;
    background-color: grey;
  }

  form {
    display: flex;
    margin-top: 30px;

    input {
      flex-direction: row;
      border: 1;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      margin-top: 30px;
      margin-bottom: 30px;
      width: 92%;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      :hover {
        opacity: 1;
      }
    }
`;
