import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </ChakraProvider>
    )
}
