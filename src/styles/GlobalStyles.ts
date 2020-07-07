import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    font-family: 'roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    height:100%;
}

:root {
    --gray: #f3f3f3;
    --darkblue: #2f4154;
    --lightblue: #3b9fc1;
    --white: #fff;
    --black: #000;
  }
`;
