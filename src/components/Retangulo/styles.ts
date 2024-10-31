import styled from 'styled-components';

export const RectangleContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
`;

export const RectangleTextTitle = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const RectangleTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5px;
`;

export const RectangleText = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const RectangleluesContainer = styled.div`
display: flex;
flex-direction: column;
//margin-left: 210px;
margin-top: 10px;
gap: 6px;
`;

export const InputRectangleText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const GetRectangledData = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 80px;
height: 30px;
`

export const ResultRectangled = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;

`;

export const ResultRectangledText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;
