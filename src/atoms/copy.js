import React from 'react';
import styled from 'styled-components';

const Copy = styled.p`
    color: ${props => props.color ? props.color : 'var(--white)'};
    font-family: var(--fontMain);
    font-size: ${props => props.fontSize ? props.fontSize : 'var(fontCopy)'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '300'};
    line-height: ${props => props.lineHeight ? props.lineHeight : '1.7'};
    margin: ${props => props.margin ? props.margin : '35px 0'};
    max-width: 750px;
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

const _Copy = props => (
    <Copy {...props}>{props.children}</Copy>
);

export default _Copy;