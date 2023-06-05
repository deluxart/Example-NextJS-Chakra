import { Box, Container } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

const Home = () => {
  return (
    <Box>
      <HtmlMeta />
      <Box as="section" py="90px">
        <Container>Home page layout</Container>
      </Box>
    </Box>
  );
};

export default Home;
