import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from "@/components/NavLink";
import {Link} from "@chakra-ui/next-js";

type Route = {
    label: string;
    path: string;
}

const Links: Route[] = [
    {
        label: 'Dashboard',
        path: '/'
    },
    {
        label: 'Blogs',
        path: '/blogs'
    },
    {
        label: 'Pricing',
        path: '/pricing'
    }
];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Link href="/">
                        <Box>Logo</Box>
                    </Link>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {Links.map((link) => (
                            <NavLink key={link.label} href={link.path}>{link.label}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Link 1</MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuDivider />
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link.label} href={link.path}>{link.label}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
