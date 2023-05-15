import { createGlobalStyle } from "styled-components";
import backgroundImg from "../../assets/images/rick-and-morty-cover.jpg";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap');
html{
  font-size: 62.5%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  box-sizing: border-box;
  font-size: 1.6rem;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family:'Lora', serif;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.75);
  }
}
h1 {
  font-size: 5.2rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.6rem;
}
h4{
  font-size: 1.8rem;
}
img {
  display: block;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
a{
  display:block;
  text-decoration: none;
}
`;

export default GlobalStyles;
