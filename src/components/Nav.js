import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import hamburger_menu from '../assests/images/hamburger_menu.svg';
import Logo from  "../assests/images/Logo.svg";
import { navLinks as nav } from '../constants/constant';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef()
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <>
            <Box position="relative" zIndex={100} ref={menuRef}>
                <button onClick={handleToggle} aria-label='Open Menu'>
                    <Image src={hamburger_menu}></Image>
                </button>
                {isOpen && (
                    <Flex
                        direction="column"
                        position="absolute"
                        top="100%"
                        right={0}
                        bg="white"
                        p={4}
                    >
                        {nav.map((item) => (
                            <Link
                                as={RouterLink}
                                to={item === 'Home' ? '/' : `/${item.replace(' ', '').toLowerCase()}`}
                                key={item}
                                py={2}
                                onClick={closeMenu}
                            >
                                {item}
                            </Link>
                        ))}
                    </Flex>
                )}
            </Box>
        </>
    );
};


const NavItems = () => {
    return (
        <>
            {nav.map((item) => (
                <Link fontWeight={"medium"} as={RouterLink} to={item === 'Home' ? '/' : `/${item.replace(' ', '').toLowerCase()}`} key={item} px={2}>
                    {item}
                </Link>
            ))}
        </>
    );
}

const Nav = () => {
    const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
    return (
        <nav>
            <Flex as="nav" justifyContent={{ base: "space-between", md: "center" }} p="4" flexDir={{ base: "row", md: "row" }} alignItems={"center"}>
                <Image src={Logo} alt='logo' mr={8} />
                {isLargerThanMd ? (
                    <NavItems></NavItems>) :
                    <BurgerMenu></BurgerMenu>}
            </Flex>
        </nav>
    );
}

export { Nav, NavItems };