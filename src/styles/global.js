import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

.comboboxControl{
  width: 100%;
  color: #666;
  padding-left: '10px'
}

.container{
  max-width: 100%;
  padding-right: 0;
  padding-left:0;
}

.containerForm{
  width: 100%;
  max-width: 1366px;
  margin-right: 30px;
}

a:hover{
  text-decoration: none;
}

*:focus{
  outline:0;
}

html, body, #root {
  height: 100%;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color: #2f353a;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
  overflow: hidden;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

// Tabs component
.tabs {
  width: 100%;

  &__list {
    display: block;
    width: 100%;
    border-bottom: 2px solid #DFE2E3;
    padding: 0;
    list-style: none;

  }

  &__tab {
    display: inline-block;
  }

  &__tab-link {
    display: inline-block;
    text-align: center;
    padding: 30px;
    color: rgba(#052843, .65);
    border-bottom: 4px solid transparent;
    cursor: pointer;
    text-decoration: none !important;

    &--active {
      color: #052843;
      font-weight: bold;
      border-color: #23AAE0;
    }
  }

  .tabs__tab a {
    color: #000
  }

  &__content {
    margin: 30px auto;
    width: 100%;
  }

  .checkbox{
    display: flex;
    width: 25px;
  }

  .containerPai{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 90%;
    border-radius: 4px;
    margin: auto auto 15px;
  }

  .comboboxControl{
    border-top: 2px solid rgb(154, 154, 154);
    border-left: 2px solid rgb(154, 154, 154);
    height: 42px;
  }

  .comboboxGroup{
    margin: 30px 0px 30px 30px;
  }

  li {cursor: pointer;}

}
`;
