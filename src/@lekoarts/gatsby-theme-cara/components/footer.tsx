/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
    // const [colorMode, setColorMode] = useColorMode()
    // const isDark = colorMode === `dark`
    // const toggleColorMode = (e: any) => {
    //     setColorMode(isDark ? `light` : `dark`)
    // }

    return (
        <Box as="footer" variant="footer">
            {/* <button
                sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
                onClick={toggleColorMode}
                type="button"
                aria-label="Toggle dark mode"
            >
                {isDark ? `Light` : `Dark`}
            </button> */}
      Copyright Rakshan Sharma &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
            <Flex
                sx={{
                    justifyContent: `center`,
                    alignItems: `center`,
                    mt: 3,
                    color: `text`,
                    fontWeight: `semibold`,
                    a: { color: `text` },
                }}
            >
                <Link
                    aria-label="Github"
                    rel="noreferrer noopener"
                    sx={{ ml: 2 }}
                    href="https://github.com/freakingrocky"
                >
                    Github
        </Link>
        { ` ` }
                <div sx={{ mx: 1 }}> | </div>
            <Link
                aria-label="HackTheBox"
                rel="noreferrer noopener"
                sx={{ ml: 0 }}
                href="https://www.hackthebox.eu/home/users/profile/383278"
            >
                HackTheBox
    </Link>
    { ` ` }
                <div sx={{ mx: 1}}> | </div>
                <Link
                    aria-label="Instagram"
                    rel="noreferrer noopener"
                    sx={{ ml: 0 }}
                    href="https://www.instagram.com/freakingrocky"
                >
                    Instagram
                </Link>
                { ` ` }
                < div sx={{ mx: 1 }}> | </div>
                <Link
                    aria-label="Mail"
                    rel="noreferrer noopener"
                    sx={{ ml: 0 }}
                    href="mailto:rakshan793@gmail.com"
                >
                    Mail
                </Link>
                { ` ` }
                <div sx={{ mx: 1 }}> | </div>
                <Link
                    aria-label="Youtube"
                    rel="noreferrer noopener"
                    sx={{ ml: 0 }}
                    href="https://www.youtube.com/channel/UCl8awGRUC1OI561xK3G1Wow"
                >
                    Youtube
                </Link>
                { ` ` }
                <div sx={{ mx: 1 }}> | </div>
                <Link
                    aria-label="LinkedIn"
                    rel="noreferrer noopener"
                    sx={{ ml: 0 }}
                    href="www.linkedin.com/in/rakshan-sharma/"
                >
                    LinkedIn
                </Link>
            </Flex>
        </Box>
    )
}

export default Footer