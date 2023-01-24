import React from 'react';
import { FlexContainer, PaddingContainer } from './styled-components/Global.styled'
import { Logo, MenuIcon } from './styled-components/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  return (
    <PaddingContainer top="1.2rem" bottom="1.2rem" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer justify="space-between" responsiveFlex>
            <Logo>
                JustA<span>Dev</span>
            </Logo>

            <MenuIcon>
                <GiHamburgerMenu />
            </MenuIcon>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Navbar