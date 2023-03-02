import React from 'react';
import { Flex, Button, Box, Menu, MenuButton, MenuItem, MenuList, IconButton, Text, ButtonGroup, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import Products from '../Components/Products';
import { FiFilter } from 'react-icons/fi';
import Pagination from '../Components/Pagination';

function LandingPage(props) {
const [showProducts, setShowProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [size, setSize] = React.useState(6);
    const [productName, setProductName] = React.useState("");
    const [totalData, setTotalData] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortby, setSortby] = React.useState("name");
    const [order, setOrder] = React.useState("ASC");

    const getAllProducts = async () => {
      try {
        let token = localStorage.getItem("petshop_login");
        let response = await axios.post(`http://localhost:5000/product/list?page=${page}&size=${size}&name=${productName}&sortby=${sortby}&order=${order}`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("ini response.data dari getAllProducts :", response.data);
        console.log("ini ambil total data dari getAllProducts :", response.data.datanum);
        setTotalData(response.data.datanum);
        setShowProducts(response.data.data);
      } catch (error) {
        console.log("dari getAllProducts :", error);
      }
    };

    // Jalani fungsi getAllProducts
    React.useEffect(() => {
      getAllProducts();
    }, [page, sortby, order]);

    // Print list of products
    const printAllProducts = () => {
      console.log("ini isi showproducts :", showProducts);
      let print = showProducts.map((val, idx) => {
        console.log("ini val :", val);
        return <Products name={val.name} productimage={val.image} price={val.price} />
      });
      return print;
    }

    // Change page
    const paginate = pageNumber => {
      setPage(pageNumber);
    }

  return (
    <>
          {/* INI PRODUCT */}
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'white'}
        >
            {/*  CONTENT LEFT */}
            <Box flex={{ base: 'none', lg: '1' }}>
            </Box>
            {/* MIDDLE  */}
            <Box paddingTop='4' pb='8'
                flex='4'
            >
                <Text fontSize='4xl' fontWeight='bold' color='white' p={{ base: '8', lg: '4' }}>
                    
                    <Text fontSize='4xl' fontWeight='bold' color='#c27c3a' pb={{ base: '-10', lg: '10' }} pt='-5'>Welcome to Tunes Up Festival</Text>
                </Text>
                <Flex p={{ base: '4', lg: '2' }} >
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FiFilter />}
                            variant='outline'
                            color='#c27c3a'
                            _expanded={{ bg: 'white', color:'#c27c3a' }}
                        />
                        <MenuList>
                            <MenuItem onClick={() => {
                                setSortby("name")
                                setOrder("ASC") 
                            }}>
                                Sort by product name A-Z
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("name")
                                setOrder("DESC")
                            }}>
                                Sort by product name Z-A
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("price")
                                setOrder("ASC")
                            }}>
                                Sort by product price low-high
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("price")
                                setOrder("DESC")
                            }}>
                                Sort by product name high-low
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex pb='5' pl={{ base: '3', lg: '2' }}>
                    <ButtonGroup>
                        <Button bgColor={"#c27c3a"} color='white' 
                         _hover={{ bg: '#c27c3a' }}
                         _active={{
                           bg: 'white',
                           transform: 'scale(0.98)',
                         }}
                     >
                            All
                        </Button>
                        <Button bgColor={"#c27c3a"} color='white'
                        _hover={{ bg: '#c27c3a' }}
                        _active={{
                          bg: 'white',
                          transform: 'scale(0.98)',
                        }}
                        >
                            Tickets
                        </Button>
                        <Button bgColor={"#c27c3a"} color='white'
                        _hover={{ bg: '#c27c3a' }}
                        _active={{
                          bg: 'white',
                          transform: 'scale(0.98)',
                        }}
                        >
                           Merchandise
                        </Button>
                    </ButtonGroup>
                </Flex>
                <Flex minHeight="100vh" maxW='8xs' flexWrap='wrap' justifyContent='space-evenly' alignItem='start'>
                  <SimpleGrid columns={[1, 2, 3]} spacing={8} padding>
                    {printAllProducts()}
                  </SimpleGrid>
                    <Flex my='10' w='full' justify={'center'}>
                        <Pagination size={size} page={page} totalData={totalData} paginate={paginate} />
                    </Flex>
                </Flex>

            </Box>
            {/*  CONTENTRIGHT */}
            <Box flex={{ base: 'none', lg: '1' }}>
            </Box>
        </Flex> 
  </>
  )
};

export default LandingPage;