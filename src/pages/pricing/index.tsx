import {ReactNode} from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button, Divider, Container,
} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import Head from "next/head";

function PriceWrapper({children}: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{base: 'center', lg: 'flex-start'}}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}


const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
];
interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
}
const PackageTier = ({
                         title,
                         options,
                         typePlan,
                         checked = false,
                     }: PackageTierProps) => {
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';

    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading size={'md'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc) => (
                    <ListItem key={desc.id}>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{typePlan}</Heading>
            <Stack>
                <Button
                    size="md"
                    color={useColorModeValue(colorTextLight, colorTextDark)}
                    bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
                    Get Started
                </Button>
            </Stack>
        </Stack>
    );
};

export default function ThreeTierPricing() {
    return (
        <Container maxW={'7xl'} p="12">
            <Head>
                <title>
                    Pricing page
                </title>
            </Head>
            <Box py={12}>
                <VStack spacing={2} textAlign="center">
                    <Heading as="h1" fontSize="4xl">
                        Plans that fit your need
                    </Heading>
                    <Text fontSize="lg" color={'gray.500'}>
                        Start with 14-day free trial. No credit card needed. Cancel at
                        anytime.
                    </Text>
                </VStack>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    textAlign="center"
                    justify="center"
                    spacing={{base: 4, lg: 10}}
                    py={10}>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Hobby
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    79
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" variant="outline">
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </PriceWrapper>

                    <PriceWrapper>
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{transform: 'translate(-50%)'}}>
                                <Text
                                    textTransform="uppercase"
                                    bg={useColorModeValue('red.300', 'red.700')}
                                    px={3}
                                    py={1}
                                    color={useColorModeValue('gray.900', 'gray.300')}
                                    fontSize="sm"
                                    fontWeight="600"
                                    rounded="xl">
                                    Most Popular
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Growth
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600">
                                        $
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        149
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /month
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={useColorModeValue('gray.50', 'gray.700')}
                                py={4}
                                borderBottomRadius={'xl'}>
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="green.500"/>
                                        unlimited build minutes
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="green.500"/>
                                        Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="green.500"/>
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="green.500"/>
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="green.500"/>
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red">
                                        Start trial
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Scale
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    349
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500"/>
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" variant="outline">
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </PriceWrapper>
                </Stack>
            </Box>
            <Box py={6} px={5} minH={'100vh'}>
                <Stack spacing={4} width={'100%'} direction={'column'}>
                    <Stack
                        p={5}
                        alignItems={'center'}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-around',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}>
                        <Stack
                            width={{
                                base: '100%',
                                md: '40%',
                            }}
                            textAlign={'center'}>
                            <Heading size={'lg'}>
                                The Right Plan for <Text color="purple.400">Your Business</Text>
                            </Heading>
                        </Stack>
                        <Stack
                            width={{
                                base: '100%',
                                md: '60%',
                            }}>
                            <Text textAlign={'center'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                quod in iure vero. Facilis magnam, sed officiis commodi labore
                                odit.
                            </Text>
                        </Stack>
                    </Stack>
                    <Divider/>
                    <PackageTier title={'Starter'} typePlan="Free" options={options}/>
                    <Divider/>
                    <PackageTier
                        title={'Lorem Plus'}
                        checked={true}
                        typePlan="$32.00"
                        options={options}
                    />
                    <Divider/>
                    <PackageTier title={'Lorem Pro'} typePlan="$50.00" options={options}/>
                </Stack>
            </Box>
        </Container>
    )
}
