import styled from 'styled-components';

export const ExpressaoContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 210px;
`;

export const ExpressaoTitle = styled.div`
display: flex;
margin-left: 10px;
margin-top: 10px;
font-size: ${(props) => props.theme.textSizes['text-bold-l']};

`;

export const ExpressaoParagraph = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
`;