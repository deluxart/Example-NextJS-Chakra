const BaseButton = () => ({
  padding: '16px',
  margin: 0,
  width: '100%',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '2px',
  outline: 'none',
  border: '1px',
  borderColor: 'transparent',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  _active: {
    color: 'rgb(255,154,0)',
  },
  _hover: {
    color: 'rgb(255,154,0)',
  },
  _focus: {
    color: 'rgb(255,154,0)',
  },
});

const ButtonPrimary = () => ({
  margin: 0,
  width: '100%',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '2px',
  outline: 'none',
  border: '1px',
  borderColor: 'transparent',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  bg: 'rgb(255,154,0)',
  padding: '13px 24px',
  fontSize: '17px',
  lineHeight: '27px',
  color: 'black',
  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  _focus: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
  _hover: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
  _active: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
});

const ButtonSecondary = () => ({
  margin: 0,
  width: '100%',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '2px',
  outline: 'none',
  border: '1px',
  borderColor: 'transparent',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  bg: 'rgb(26, 26, 26)',
  padding: '16px',
  color: 'white',
  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(4px)',
  _focus: {
    bg: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  },
  _hover: {
    bg: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  },
  _active: {
    bg: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  },
});

const ButtonOutlined = () => ({
  margin: 0,
  width: '100%',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '2px',
  outline: 'none',
  border: '1px',
  borderColor: 'rgb(255,154,0)',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  bg: 'transparent',
  padding: '7px 17px',
  fontSize: '14px',
  color: 'rgb(255,154,0)',
  boxSizing: 'border-box',
  _focus: {
    bg: 'rgba(255,154,0,0.1)',
    boxShadow: '0 0 0 1px rgba(255,154,0,0.1)',
  },
  _hover: {
    bg: 'rgba(255,154,0,0.1)',
    boxShadow: '0 0 0 1px rgba(255,154,0,0.1)',
    textDecoration: 'none',
  },
  _active: {
    bg: 'rgba(255,154,0,0.1)',
    boxShadow: '0 0 0 1px rgba(255,154,0,0.1)',
  },
});

const variants = {
  base: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  outlined: ButtonOutlined,
};

const defaultProps = {
  variant: 'base',
};

const button = {
  baseStyle: {},
  variants,
  sizes: {},
  defaultProps,
};

export default button;
