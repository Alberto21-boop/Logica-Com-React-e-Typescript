import styled from 'styled-components';

export const AgeWithButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 210px;
`;

export const AgeWithButtonTextTitle = styled.div`
 display: flex;
 font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const AgeWithButtonTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5px;
`;

export const AgeWithButtonText = styled.div`
 display: flex; 
 font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const AgeWithButtonContainerText = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
gap: 6px;
`;

export const InputAgeWithButtonText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const GetAgeWithButtonInput = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 80px;
height: 30px;
`

export const GetAgeNameWithButton = styled.input`
display: flex;
margin-top: 3px;
border-radius: 8px;
width: 200px;
height: 30px;
`

export const AgeWithButtonTitleResult = styled.div`
display: flex;
margin-top: 16px;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;

export const ButtonResult = styled.button`
  display: flex;
  width: 290px;
  height: 50px;
  margin-top: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme.colors['brand-blue']};
  color: ${(props) => props.theme.colors['base-white']};
  font-size: ${(props) => props.theme.textSizes['title-title-l']};

  &:hover {
    background: ${(props) => props.theme.colors['base-white']};
    color: ${(props) => props.theme.colors['brand-blue']};
    cursor: pointer;
  }

`;

export const ResultAgeAverageWithButtonText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const AgeWithButtonTextResult = styled.div`
 display: flex; 
 margin-top: 10px;
 font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;