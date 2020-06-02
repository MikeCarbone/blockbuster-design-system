import React from 'react'

import { Box, Copy, Link, Wrapper } from 'blockbuster-design-system'

const _Footer = props => (
    <Box padding="5rem" backgroundColor="var(--black)">
        <Wrapper>
            <Copy textAlign="center" margin="0 auto">&copy; {new Date().getFullYear()}</Copy>
            <Box justifyContent="center" backgroundColor="transparent">
                <Link parentEl={props.linkWrapper} color="var(--white)" href="#">Blockbuster Reviews</Link>
                <Link parentEl={props.linkWrapper} color="var(--white)" href="#">Stream New Content</Link>
                <Link parentEl={props.linkWrapper} color="var(--white)" href="#">Privacy Policy</Link>
            </Box>
        </Wrapper>
    </Box>
)

export default _Footer;
