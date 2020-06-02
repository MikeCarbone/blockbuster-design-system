import React from 'react'

import { Box, Button, Figure, Wrapper } from 'blockbuster-design-system'

const _Header = props => (
    <Box backgroundColor="var(--blue)" alignItems="flex-start" justifyContent="space-between">
        <Wrapper padding="1rem 0">
            <Box backgroundColor="var(--blue)" alignItems="center" justifyContent="space-between">
                <Figure width="200px" objectFit="contain" src={props.logo} alt={props.alt} />
                <Button href={props.buttonLink} parentEl={props.linkWrapper} secondary>{props.buttonText}</Button>
            </Box>
        </Wrapper>
    </Box>
);

export default _Header;
