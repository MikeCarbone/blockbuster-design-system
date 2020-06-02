import React from 'react';
import styled from 'styled-components'

import Box from '../atoms/box';
import Button from '../atoms/button';
import Heading from '../atoms/heading';
import Copy from '../atoms/copy';
import VertSpace from '../atoms/vert-space';
import Wrapper from '../atoms/wrapper';



const Hero = styled.div`
    height: ${props => props.height ? props.height : '400px'};
    position: relative;
`;

const Img = styled.img`
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: -10;
`;

const Shade = styled.div`
    background-color: #000;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    position: absolute;
    width: 100%;
    z-index: -9;
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
`;

const Video = styled.video`
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    width: 100%;
    z-index: -10;
`;
  

const Media = props => {
    if (props.video) {
        return (
            <Video autoPlay loop muted>
                <source src={props.imgSrc} type="video/mp4"></source>
            </Video>
        )

    } else {
        return <Img src={props.imgSrc} alt={props.imgAlt} />
    }
}

const _Hero = props => {
    return (
        <Hero {...props}>
            <Shade />
            <Media {...props} />
            <Container>
                <Wrapper height="initial">
                    <Heading>{props.title}</Heading>
                    <Copy margin="0" fontSize="var(--fontMed)">{props.subtitle}</Copy>
                    <VertSpace size={1} />
                    <Button href={props.buttonLink} parentEl={props.linkWrapper} secondary>{props.buttonText}</Button>
                </Wrapper>
            </Container>
        </Hero>
    );
}

export default _Hero;
