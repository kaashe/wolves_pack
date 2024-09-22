import { memo, useState } from 'react';
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import { ThemeMode } from 'config/theme';
import { simpleOpacity } from 'config/animations';

const Logo = () => {
  const { colorMode } = useColorMode();
  const [isLogoLoaded, setLogoLoaded] = useState(false);
  const MotionImage = motion(Image);

  // Use Chakra's `useBreakpointValue` to manage responsive sizes
  const boxSize = useBreakpointValue({ base: '120px', md: '200px', lg: '200px' });
  const logoSrc = colorMode === ThemeMode.Dark ? './222.png' : './333.png'; // Dynamic logo based on color mode
  const fallbackSrc = colorMode === ThemeMode.Dark ? './222.png' : './333.png'; // Fallback for loading issues

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        <MotionImage
          className={styles.logo} // Keeping the CSS class if needed
          boxSize={boxSize} // Responsive size based on breakpoints
          objectFit="cover"
          src={logoSrc}
          alt="Wolve's Pack Logo"
          fallbackSrc={fallbackSrc}
          variants={simpleOpacity}
          initial="initial"
          animate={isLogoLoaded ? 'animate' : 'initial'}
          onLoad={() => setLogoLoaded(true)}
          zIndex={2}
        />
      </Link>
    </AnimatePresence>
  );
};

export default memo(Logo);
