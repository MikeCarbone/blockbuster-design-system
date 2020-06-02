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
      imgSrc="https://stream.mux.com/TEerln00m5BX5hsDYavm12mzBSO3YPlKR/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE1OTA1MzkwNzEsImF1ZCI6InYiLCJzdWIiOiJURWVybG4wMG01Qlg1aHNEWWF2bTEybXpCU08zWVBsS1IifQ.MgR9ktCQPuOjjUEydfg5Al--my9hprpJwcNDrCUb9-ugvwMocNCC7WHf3ZAWuqCXpDKN4ML6afd7NChpvqDjlxTcR3out3DNmnwYg73yuJ-4XvRHq5ddCVoBe2hgP0DF9meSjy0W8r0ED9nSB7YSdGcEl0vV6F18yIqb72qyPsPS3T8tHp_OsWbxlR_oo2z2YAm7glLEz_UGHcaVhegXgcZ-vI9c0B1cEFw-DDdZ_7QFjoDR3MMCNF31alRkjbswrVP1LQvKHW4hd7UDn_ov5-v5t9oRCcZxlPehrhi2xWBBDRQNF52REEgrvn7T6Cn-TfZvWiiXCJmwhacBHfH-Tw"
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
