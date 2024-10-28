import styled from 'styled-components';

export const LandContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
margin-top: 10px;
`;

export const LandTextTitle = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const LandTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5px;
`;

export const LandText = styled.div`
display: flex;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const LandValuesContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
margin-top: 10px;
gap: 6px;
`;

export const GetLandWidth = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 70px;
height: 20px;
`

export const InputLandText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;