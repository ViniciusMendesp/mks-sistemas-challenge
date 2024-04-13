import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #0F52BA;
    --background: #FFFFFF;
    --gray: #EEEEEE;
    --text: #2C2C2C;
  }


  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #a6a6a6;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b5b5b5;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  ::-webkit-scrollbar-track {
    background: #ebebeb;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #e6e6e6;
  }
  ::-webkit-scrollbar-track:active {
    background: #e6e6e6;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

`