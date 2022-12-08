const globalStyle = `
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color:transparent;
}  

html,
  body, {
    padding: 0;
    margin: 0;
    background: white;
    font-size: 16px;
    font-family: 'Noto Sans KR', 'Arial', sans-serif;
  },
  ul,ol,li {
    list-style: none;
    padding: 0;
  },
  h1,h2,h3 {
    margin:0;
  },
  p{
    margin:0;  
  },
  img {
    width: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  },
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    outline: focus-visible;
  }
`;

export default globalStyle;
