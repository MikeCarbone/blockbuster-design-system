import React from 'react'

import { Box, Copy, Link, Wrapper } from 'blockbuster-design-system'

const _Footer = props => (
    <Box padding="5rem" backgroundColor="var(--black)">
        <Wrapper>
            <Copy textAlign="center" margin="0 auto">&copy; {new Date().getFullYear()}</Copy>
            <Box justifyContent="center" backgroundColor="transparent">
                <Link color="var(--white)" href="https://blockbuster-one-pager.now.sh/">One-pager</Link>
                <Link color="var(--white)" href="https://blockbuster-media.now.sh/">Media</Link>
                <Link color="var(--white)" href="https://blockbuster-streaming.now.sh/">Streaming</Link>
                <Link color="var(--white)" href="https://github.com/carbonology?tab=repositories">Github</Link>
                <Link color="var(--white)" href="https://www.npmjs.com/package/blockbuster-design-system">NPM</Link>
                <Link color="var(--white)" href="https://blockbuster-ds-docs.now.sh/">Docs</Link>
                <Link color="var(--white)" href="https://blockbuster-case-study.now.sh/">Case Study</Link>
            </Box>
        </Wrapper>
    </Box>
)

export default _Footer;
