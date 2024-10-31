import { SidebarButton, SidebarContainer, SideBarText } from './styles';


export function Sidebar() {
    return (
        <SidebarContainer>
            <SideBarText>Exercícios</SideBarText>
            <SidebarButton to="/">Exercício 1</SidebarButton>
            <SidebarButton to="/exercicio2">Exercício 2</SidebarButton>
            <SidebarButton to="/exercicio3">Exercício 3</SidebarButton>
            <SidebarButton to="/exercicio4">Exercício 4</SidebarButton>
            <SidebarButton to="/exercicio4botao">Exercício 4 Botão</SidebarButton>
        </SidebarContainer>
    );
}