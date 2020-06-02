import React from 'react';
import styled from 'styled-components';

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

const Fig = props => {
    return (
        <Img {...props} />
    )
}

export default Fig;
