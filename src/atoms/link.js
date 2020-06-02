import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    color: ${props => props.color ? props.color : 'var(--black)'};
    cursor: pointer;
    display: inline-block;
    font-family: var(--fontDecorative);
    font-size: var(--fontCopy);
    font-weight: 300;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    transition: var(--transition);

    &:hover {
        color: var(--gold);
        text-decoration: underline;
        transition: var(--transition);
    }
`;

const _Link = props => {
    if (props.parentEl) {
        const El = props.parentEl;
        const propsNoHref = {...props};
        if (propsNoHref.href){
            delete propsNoHref.href;
        }
        return (
            // For handling next links
            <El href={props.href}>
                <Link {...propsNoHref}>{props.children}</Link>
            </El>
        )
    } else {
       return <Link {...props}>{props.children}</Link>
    }
}

export default _Link;
