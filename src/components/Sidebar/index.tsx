import { SidebarButton, SidebarContainer, SideBarText } from './styles';


export function Sidebar() {
    return (
        <SidebarContainer>
            <SideBarText>Exercícios</SideBarText>
            <SidebarButton to="/exercicio1">Exercício 1</SidebarButton>
            <SidebarButton to="/exercicio2">Exercício 2</SidebarButton>
        </SidebarContainer>
    );
}