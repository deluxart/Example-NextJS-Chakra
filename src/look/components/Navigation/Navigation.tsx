import Link from 'next/link';
import { Box, Container, Grid, Text, HStack } from '@chakra-ui/react';

export const Navigation = () => (
  <HStack as={'nav'} spacing={4}>
    <Link href={'/about'}>About</Link>
    <Link href={'/how-it-works'}>How it works?</Link>
    <Link href={'/contacts'}>Contacts</Link>
  </HStack>
);
