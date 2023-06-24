import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box display={{base:"none",md:"block", lg:"block",xl:"block","2xl":"block"}}>FLURN</Box>
          <Box
            display="flex"
            justifyContent='space-evenly'
            width='100%'
            mt={4}
            marginBottom="13px"
          >
            <Button onClick={() => navigate('/')} bg='#d7dfe6' marginLeft="-10px">
              Search
            </Button>
            <Button onClick={() => navigate('/list')} bg='#d7dfe6' marginLeft="5px" marginRight="5px">
              List
            </Button>
            <Button onClick={() => navigate('/bookmarks')} bg='#d7dfe6'>
              Bookmarks
            </Button>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}