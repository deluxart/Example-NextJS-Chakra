import { Box, Container, Grid, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="header" py="22px" h="91px" borderTop="1px solid" borderColor="lightGray">
      <Container>
        <Grid templateColumns={{ base: '1fr', lg: 'auto 1fr' }} alignItems="center" gap="65px">
          <Text>Footer</Text>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
