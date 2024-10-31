import styled from 'styled-components';

export const SomaContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
`;

export const SomaTextTitle = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const SomaTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5px;
`;

export const SomaText = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const SomaDataContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
gap: 6px;
`;

export const InputSomaText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const GetSomaData = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 80px;
height: 30px;
`

export const ResultSoma = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;

export const ResultSomaText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

