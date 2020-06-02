import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.a`
    align-self: ${props => props.alignSelf ? props.alignSelf : 'center'};
    background-color: var(--blue);
    border-radius: var(--borderRadius);
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: var(--fontDecorative);
    font-weight: 700;
    margin: ${props => props.margin ? props.margin : '0'};
    padding: 15px 25px;
    text-decoration: none;
    text-transform: uppercase;
`;

const ButtonSecondary = styled.a`
    align-self: ${props => props.alignSelf ? props.alignSelf : 'center'};
    background-color: var(--gold);
    border-radius: var(--borderRadius);
    color: var(--black);
    cursor: pointer;
    display: inline-block;
    font-family: var(--fontDecorative);
    font-weight: 700;
    margin: ${props => props.margin ? props.margin : '0'};
    padding: 15px 25px;
    text-decoration: none;
    text-transform: uppercase;
`;

const _Button = props => {

    const Button = props => {
        return props.secondary 
            ? <ButtonSecondary {...props}>{props.children}</ButtonSecondary>
            : <ButtonPrimary {...props}>{props.children}</ButtonPrimary>
    }

    // Handling Next.js links
    if (props.parentEl) {
        const El = props.parentEl;
        const propsNoHref = {...props};
        if (propsNoHref.href){
            delete propsNoHref.href;
        }
        return (
            <El href={props.href}>
                <Button {...propsNoHref}>{props.children}</Button>
            </El>
        )
    } else {
        return <Button {...props}>{props.children}</Button>
    }
    
}

export default _Button;
