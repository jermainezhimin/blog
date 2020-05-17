import React from 'react'
import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  Link,
  PseudoBox,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core'
import NextLink from 'next/link'

const Table = (props) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

const THead = (props) => {
  const { colorMode } = useColorMode()
  const bg = {
    light: 'gray.50',
    dark: 'whiteAlpha.100',
  }

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
}

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const CustomLink = (props) => {
  const { colorMode } = useColorMode()
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  }

  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    )
  }

  return <Link color={color[colorMode]} isExternal {...props} />
}

const Quote = (props) => {
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  }

  return (
    <Callout
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  )
}

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
)

const Hr = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}

const H1 = (props) => <Heading as="h1" size="xl" my={4} {...props} />
const H2 = (props) => (
  <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />
)
const H3 = (props) => (
  <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />
)
const InlineCode = (props) => (
  <Code variantColor="yellow" fontSize="0.84em" {...props} />
)
const Br = (props) => <Box height="24px" {...props} />
const P = (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />
const Ul = (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />
const Ol = (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />
const Li = (props) => <Box as="li" pb={1} {...props} />

export const BlogComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: InlineCode,
  kbd: Kbd,
  br: Br,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Quote,
}
