import React from 'react';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md';
import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
} from './styles';
import logo from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <>
            <Container>
                <Header>
                    <LogoImg src={logo} alt="Logo My Dashboard" />
                    <Title>Minha Carteira</Title>
                </Header>

                <MenuContainer>
                    <MenuItemLink href="#">
                        <MdDashboard />
                        Dashboard
                    </MenuItemLink>

                    <MenuItemLink href="#">
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>

                    <MenuItemLink href="#">
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>

                    <MenuItemLink href="#">
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>
                </MenuContainer>
            </Container>
        </>
    );
};

export default Aside;
