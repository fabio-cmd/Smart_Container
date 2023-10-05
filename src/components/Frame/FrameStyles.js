import styled from 'styled-components';

export const Image = styled.div`
position: relative;
text-align: center;
`;

export const ImageContainer = styled.img`
width: 100%;
max-height: 650px;
opacity: 80%;
object-fit: cover;

`;

export const TextImage = styled.text`
font-size: 20px;
font-family: 'Times New Roman', Times, serif;
color: #000;
`

export const TextContainer = styled.span`
  position: absolute; 
  top: 50px; 
  left: 400px;
  font-size: 100px;
  color: #fff;
  padding: 10px;
  font-weight: 800;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 2px;
`;

export const FindPointButton = styled.button`
  background-color: green;
  position: absolute;
  top: 70%;
  left: 33%;
  font-size: 25px;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px;
`