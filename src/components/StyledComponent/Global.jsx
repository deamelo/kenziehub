import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    background-color: #000000;
    height: 100vh;
  }

  body { 
    margin: 0;
    padding: 0;
  }

`

export default Global