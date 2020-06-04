import React from 'react'

import {
  Box,
  Button,
  Copy,
  Figure,
  Footer,
  Global,
  Header,
  Heading,
  Hero,
  Link,
  VertSpace,
  Wrapper
} from 'blockbuster-design-system'

const App = () => (
  <>
    <Global />
    <Header
      buttonText="Log In"
      buttonLink="/page"
      linkWrapper={Copy}
      logo="./logo.png"
      alt="Blockbuster"
    >
      <Link color="var(--white)" href="#">Here</Link>
    </Header>
    <Box>
      <Button>Click me</Button>
      <Button secondary>Click me</Button>
    </Box>
    <Box maxHeight="400px" justifyContent="space-evenly" flexWrap="wrap" flexDirection="row">
      <Figure shade height="150px" width="auto" src="https://source.unsplash.com/random" alt="Random unsplash pic" />
      <Figure height="150px" width="auto" src="https://source.unsplash.com/random" alt="Random unsplash pic" />
      <Figure height="150px" width="auto" src="https://source.unsplash.com/random" alt="Random unsplash pic" />
    </Box>
    <Box display="block">
      <Wrapper padding="1rem 5rem">
        <Heading color="#000">Hello</Heading>
        <VertSpace />
        <Heading color="#000">Hello</Heading>
        <VertSpace size={1} />
        <Heading color="#000">Hello</Heading>
        <VertSpace size={2} />
        <Heading color="#000">Hello</Heading>
        <VertSpace size={3} />
        <Heading color="#000">Hello</Heading>
      </Wrapper>
    </Box>
    <Box>
      <Heading color="var(--black)">This is huge</Heading>
      <Copy color="var(--black)">This is copy. I am writing a paragraph text. This is how copy looks. Oh boy.</Copy>
    </Box>
    <Box padding="5rem" backgroundColor="var(--black)">
      <Wrapper>
        <Link color="var(--white)" href="#">Home</Link>
      </Wrapper>
    </Box>
    <Header
      butttonText="Log In"
      buttonLink="/page"
      linkWrapper={Copy}
      logo="./logo.png"
      alt="Blockbuster"
    />
    <Hero
      imgSrc="https://source.unsplash.com/random"
      alt="A random unsplash picture."
      title="This is a hero"
      subtitle="Can we have a subtitle? Sure."
      buttonText="Clieck"
      buttonLink="/page"
      linkWrapper={Copy}
      height="800px"
    />
    <Link href="asdas" parentEl={Copy}>Hahaha</Link>
    <Button href="./asds" parentEl={Copy}>Hmmm</Button>
    <Button secondary parentEl={Copy}>Hmmm</Button>
    <Hero
      video
      imgSrc="http://www.example.com/waterfall-video.mp4"
      alt="A random unsplash picture."
      title="This is a hero"
      subtitle="Can we have a subtitle? Sure."
      buttonText="Clieck"
      buttonLink="/page"
      linkWrapper={Copy}
      height="800px"
    />
    <Footer linkWrapper={Copy} />
    </>
)

export default App;
