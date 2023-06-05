import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'poppins',
        color: mode('black', 'white')(props),
        bg: mode('white', 'neutral.100')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      'html, input, textarea, button': {
        fontFamily: 'poppins',
        fontDisplay: 'fallback',
      },
    }),
  },
};

export default styles;
