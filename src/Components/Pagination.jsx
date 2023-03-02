import React from 'react';
import { Flex, Button} from "@chakra-ui/react";

const Pagination = (props) => {
    const pageNumbs = [];
    console.log("props totalData", props.totalData);
    console.log("props size", props.size);
    for (let i = 1; i <= Math.ceil(props.totalData / props.size); i++) {
        pageNumbs.push(i);
    }
    return (

        <Flex>
            {pageNumbs.map(number => (
                <Button onClick={() => props.paginate(number - 1)} color='white'
                    size='md'
                    fontSize="xs"
                    width="4"
                    variant={props.page + 1 == number ? 'solid' : 'outline'}
                    bg='#db8b40'
                    _hover={{
                        bg: "#c27c3a",
                    }}
                    className='page-link' type="button"
                    mr='4'
                    _active={{
                        bg: '#c27c3a',
                        transform: 'scale(0.98)',
                    }}
                >
                    {number}
                </Button>
            ))}
        </Flex>

    )

}
export default Pagination;