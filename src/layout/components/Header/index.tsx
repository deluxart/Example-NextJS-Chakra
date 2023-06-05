import Link from 'next/link';
import { Box, Container, Grid, Text, useMediaQuery } from '@chakra-ui/react';
import { Navigation } from '@look/components';

const Header = () => {
  const [isLapTop] = useMediaQuery('(min-width: 992px)');

  return (
    <Box as="header" py="22px" borderBottom="1px solid" borderColor="lightGray">
      <Container>
        <Grid templateColumns={{ base: '1fr', lg: '1fr auto' }} alignItems="center" gap="65px">
          <Link href={'/'} passHref>
            <Text fontWeight="700">App Logo</Text>
          </Link>
          {isLapTop && <Navigation />}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
