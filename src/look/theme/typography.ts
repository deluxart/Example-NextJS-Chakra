import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const typography = {
  fonts: {
    poppins: poppins.style.fontFamily,
  },
};

export default typography;
