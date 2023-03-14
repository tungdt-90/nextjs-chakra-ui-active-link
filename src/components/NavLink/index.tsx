import {Link, LinkProps as ChakraLinkProps} from "@chakra-ui/next-js";
import {useColorModeValue} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {LinkProps} from "next/link";

export default function NavLink ({ href, children, ...rest }: ChakraLinkProps & LinkProps) {
    const router = useRouter();

    return (
        <Link
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
            aria-current={router.asPath === href ? 'page' : undefined}
            {...rest}
        >
            {children}
        </Link>
    )
};
