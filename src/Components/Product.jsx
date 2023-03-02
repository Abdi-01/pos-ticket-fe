import React from 'react';
import { Flex, Text, Button, Image, Stack, Heading, SimpleGrid, Box, Center } from '@chakra-ui/react'

function Products(props) {

    return (

    <Flex >
        <SimpleGrid>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Center>
          <Image boxSize='250px' objectFit='cover'  src={props.productimage} alt="picture" />
          </Center>

          <Box p="6">
            <Stack spacing="1">
                {/* PRODUCT NAME */}
              <Heading fontSize="2xl" fontWeight="bold">
                {props.nama_Product}
              </Heading>
              <Stack direction={'row'} justify={'left'} spacing='28'>
            <Stack spacing={0} align={'center'} marginTop='2' marginBottom='2'>
                <Flex fontSize='2xl'>
                    <Text fontWeight='bold' fontSize='2xl'>$</Text>
                    {props.Harga_Product}
                </Flex>
                <Flex fontSize='2xl'>
                    <Text fontWeight='bold' fontSize='2xl'>{props.Stock_Product}</Text>
                    {props.Stock_Product}
                </Flex>
            </Stack>
          </Stack>

            <Button mt={10} w={'full'} bg={'#c27c3a'} color={'Black'} rounded={'xl'}  _hover={{bg: '#c27c3a'}} _focus={{bg: '#c27c3a'}}>
                Add To Chart
            </Button>
            </Stack>
          </Box>
        </Box>
        </SimpleGrid>
    </Flex>

    ) 
};

export default Products;