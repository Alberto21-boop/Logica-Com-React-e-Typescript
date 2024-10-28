import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background: ${(props) => props.theme.colors['brand-blue']};
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
`;

export const SidebarButton = styled(Link)`
  color: white;
  margin: 10px 0;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors['base-sideBar']};
    color: ${(props) => props.theme.colors['brand-blue']};
  }  
`;

export const SideBarText = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizes['text-regular-l']};
`;


