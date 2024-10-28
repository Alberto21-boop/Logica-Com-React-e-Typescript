import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
height: 90px;
background: ${(props) => props.theme.colors['brand-blue']};
align-items: center;

`;

export const HeaderText = styled.div`
display: flex;
margin-left: 10px;
color: ${(props) => props.theme.colors['base-white']};
font-size: ${(props) => props.theme.textSizes['title-title-l']};
`;