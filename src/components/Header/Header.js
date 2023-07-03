import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <DesktopNavLink href="/sale">Sale</DesktopNavLink>
          <DesktopNavLink href="/new">New&nbsp;Releases</DesktopNavLink>
          <DesktopNavLink href="/men">Men</DesktopNavLink>
          <DesktopNavLink href="/women">Women</DesktopNavLink>
          <DesktopNavLink href="/kids">Kids</DesktopNavLink>
          <DesktopNavLink href="/collections">Collections</DesktopNavLink>
          <MobileUnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </MobileUnstyledButton>
          <MobileUnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </MobileUnstyledButton>
          <MobileUnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </MobileUnstyledButton>
        </Nav>
        <DesktopSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media(${QUERIES.tablet}) {
    margin: 0px;
    gap: 32px;
  }

  @media(${QUERIES.mobile}) {
    gap: 17px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const DesktopSide = styled(Side)`
  @media(${QUERIES.tablet}) {
    display: none;
  }
`;

const DesktopNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media(${QUERIES.tablet}) {
    display: none;
  }
`;

const MobileUnstyledButton = styled(UnstyledButton)`
  display: none;

  @media(${QUERIES.tablet}) {
    display: revert;
  }
`;

export default Header;
