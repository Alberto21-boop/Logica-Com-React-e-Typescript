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
width: 80px;
height: 30px;
`

export const InputLandText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const ResultLand = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
margin-top: 10px;

`;

export const ResultLandText = styled.div`
display: flex;
margin-top: 8px;
font-size: ${(props) => props.theme.textSizes['text-regular-m']};
`;

export const ButtonConfirm = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 8px;
 width: 250px;
 height: 50px;

 background: ${(props) => props.theme.colors['brand-blue']};
 color: ${(props) => props.theme.colors['base-white']};

 &:hover {
    background-color: ${(props) => props.theme.colors['base-sideBar']};
    color: ${(props) => props.theme.colors['brand-blue']};
  }  
`;