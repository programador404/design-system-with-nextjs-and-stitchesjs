import { styled } from '@/styles';

const Flex = styled(`div`, {
  display: `flex`,
  alignItems: `center`,
});

const Button = styled(`button`, {
  border: 0,
  appearance: `none`,
  cursor: `pointer`,

  transition: `background 0.2s`,
  fontWeight: `bold`,

  $$shadowColor: ``,

  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `#fff`,
      },
      shape: {
        backgroundColor: `$shape`,
        color: `#fff`,
      },
    },
    size: {
      small: {
        padding: `$16 $32`,
      },
      full: {
        padding: `$16 $32`,
        flex: 1,
      },
    },
    radius: {
      default: {
        borderRadius: `$default`,
      },
      full: {
        borderRadius: `$full`,
      },
    },
    shadow: {
      true: {
        boxShadow: `0px 0px 8px $$shadowColor`,
      },
    },
  },

  compoundVariants: [
    {
      color: `primary`,
      shadow: true,
      css: {
        $$shadowColor: `$colors$primary`,
      },
    },
    {
      color: `shape`,
      shadow: true,
      css: {
        $$shadowColor: `$colors$shape`,
      },
    },
  ],

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    shadow: true,
  },
});

export default function Home() {
  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <h1>Hello Experts Club</h1>
      <Button type="button" color="primary">
        Experts Club
      </Button>
      <Button type="button" color="shape" size="full" radius="full">
        Experts Club
      </Button>
    </Flex>
  );
}
