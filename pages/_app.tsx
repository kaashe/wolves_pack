import React, { useEffect, useState } from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'

function WolvesPackSite({ Component, pageProps }: AppProps): JSX.Element {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
       <div
      className="circle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
    </div>
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
      </>
  )
}
export default WolvesPackSite
