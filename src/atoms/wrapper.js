import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: ${props => props.height ? props.height : "100%"};
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: ${props => props.padding ? props.padding : '0'};
    width: 100%;
`;

const _Wrapper = props => (
    <Wrapper {...props} />
)

export default _Wrapper;
