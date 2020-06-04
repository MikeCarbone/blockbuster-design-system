import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    align-self: ${props => props.alignSelf ? props.alignSelf : 'none'};
    align-items: ${props => props.alignItems ? props.alignItems : 'initial'};
    background: ${props => props.background ? props.background : 'none'};
    background-size: ${props => props.backgroundSize ? props.backgroundSize : 'cover'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
    background-position: ${props => props.backgroundPosition ? props.backgroundPosition : 'left top'};
    background-repeat: ${props => props.backgroundRepeat ? props.backgroundRepeat : 'no-repeat'};
    border: ${props => props.border ? props.border : 'none'};
    border-radius: var(--border-radius);
    box-sizing: border-box;
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    height: ${props => props.height ? props.height : '100%'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'left'};
    margin: ${props => props.margin ? props.margin : '0'};
    max-height: ${props => props.maxHeight ? props.maxHeight : 'initial'};
    max-width: ${props => props.maxWidth ? props.maxWidth : 'initial'};
    min-height: ${props => props.minHeight ? props.minHeight : 'initial'};
    overflow: hidden;
    overflow-x: ${props => props.overflowX ? props.overflowX : 'hidden'};
    padding: ${props => props.padding ? props.padding : '0'};
    width: ${props => props.width ? props.width : '100%'};
`;

const _Box = props => {
    return (
        <Box {...props}>
            {props.children}
        </Box>
    );
}

export default _Box;
