import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #e4e5e6, #e4e5e1);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    margin-top: 30px;

    label{
      margin-left: 30px;

    }

    input {
      flex-direction: row;
      border: 1;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      margin: 30px;
      width: 92%;
      max-width: 400px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    // button {
    //   margin: 0 0 10px;
    //   margin: 30px;
    //   height: 44px;
    //   background: #3b9eff;
    //   font-weight: bold;
    //   color: #fff;
    //   border: 0;
    //   border-radius: 4px;
    //   font-size: 16px;
    //   transition: background 0.2s;
    //   width:100%;
    //   :hover {
    //     background: ${darken(0.03, '#3b9eff')};
    //   }
    // }

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
