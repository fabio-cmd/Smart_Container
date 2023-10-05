import styled from 'styled-components';

export const Image = styled.div`
position: relative;
`;

export const ImageContainer = styled.img`
width: 100%;
height: 600px;
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
  top: 30px; 
  left: 30px;
  font-size: 30px;
  color: #000;
  padding: 10px;
`;