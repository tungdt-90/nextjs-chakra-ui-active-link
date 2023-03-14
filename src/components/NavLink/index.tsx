import {Link, LinkProps as ChakraLinkProps} from "@chakra-ui/next-js";
import {useColorModeValue} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {LinkProps as NextLinkProps} from "next/link";

export default function NavLink ({ href, children, ...rest }: ChakraLinkProps & NextLinkProps) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link
            className={isActive ? 'active-class' : ''}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            _activeLink={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            {...rest}
        >
            {children}
        </Link>
    )
};
