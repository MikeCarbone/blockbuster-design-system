import React from 'react';
import styled, { css } from 'styled-components';


const baseStyles = css`
    color: ${props => props.color ? props.color : 'var(--white)'};
    font-family: var(--fontDecorative);
    line-height: 1;
`;

const H1 = styled.h1`
    ${baseStyles}
    font-size: var(--fontHuge);
`;

const H2 = styled.h2`
    ${baseStyles}
    font-size: var(--fontBig);
`;

const H3 = styled.h3`
    ${baseStyles}
    font-size: var(--fontBig);
`;

const Heading = props => {
    switch (parseInt(props.size)){
        case 1:
            return <H1 {...props}>{props.children}</H1>;
        case 2:
            return <H2 {...props}>{props.children}</H2>;
        case 3:
            return <H3 {...props}>{props.children}</H3>;
        default:
            return <H1 {...props}>{props.children}</H1>;
    }
}

export default Heading;
