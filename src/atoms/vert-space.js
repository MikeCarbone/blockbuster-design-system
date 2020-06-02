import React from 'react'
import styled from 'styled-components'

const VertSpace = styled.div`
    height: ${
        props =>
            parseInt(props.size) == 1 ? '50px' :
            parseInt(props.size) == 2 ? '75px' :
            parseInt(props.size) == 3 ? '125px' : '25px'
    }

`;

const _VertSpace = props => (
    <VertSpace {...props} />
)

export default _VertSpace;
