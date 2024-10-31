import styled from 'styled-components';

export const AgeContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
`

export const AgeTextTitle = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const AgeTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5px;
`;

export const AgeText = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const AgeContainerText = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
gap: 6px;
`;

export const InputAgeText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const GetAgeInput = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 80px;
height: 30px;
`

export const GetAgeName = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 200px;
height: 30px;
`

export const ResultAgeAverageText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;