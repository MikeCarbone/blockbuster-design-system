import React from 'react';
import styled from 'styled-components';


const ShadeEl = styled.div`
    background-color: black;
    height: 100%;
    left: 0;
    position: absolute;
    object-fit: cover;
    object-position: center;
    opacity: .35;
    pointer-events: none;
    top: 0;
    width: 100%;
    z-index: -1;
`;

const Img = styled.img`
    display: block;
    filter: ${props => props.filter ? props.filter : "none"};
    height: ${props => props.height ? props.height : "100%"};
    margin: ${props => props.margin ? props.margin : "0"};
    object-fit: ${props => props.objectFit ? props.objectFit : "cover"};
    object-position: ${props => props.objectPosition ? props.objectPosition : "center"};
    opacity: ${props => props.opacity ? props.opacity : "1"};
    position: ${props => props.position ? props.position : "static"};
    width: ${props => props.width ? props.width : "100%"};
    z-index: ${props => props.zIndex ? props.zIndex : 1};
`;

const Container = styled.div`
    height: 100%;
    pointer-events: none;
    position: ${props => props.contPosition ? props.contPosition : "relative"};
    width: ${props => props.contWidth ? props.contWidth : "initial"};
`;

const Fig = props => {
    const Shade = props.shade
    ? <ShadeEl></ShadeEl>
    : <div></div>;

    return (
        <div>
        {/* // <Container contPosition={props.contPosition} contWidth={props.contWidth}> */}
            {Shade}

            <Img {...props} />
        {/* // </Container> */}
        </div>
    )
}

export default Fig;
