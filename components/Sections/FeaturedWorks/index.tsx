import { memo } from "react"
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import FeaturedCard from "./FeaturedCard"
import { fadeInUpSlower, galleryStagger } from "config/animations"
import { mobileBreakpointsMap } from "config/theme"
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: "99%", lg: "60%", xl: "75%" }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: "small-caps",
        }}
      >
        Some of our works.
      </Heading>
      <Text variant="description">
        Check out some of the works, company projects and even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Almemar Group"
            src="/worked_at_logos/almemarGroup/almemar.jpg"
            description="Al Memar Trading and Contracting Co, excels in the realm of excavators and deep excavations, showcasing unparalleled expertise and innovation."
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://almemargroup.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="JJ Fashion"
            description="A cutting-edge platform for fashion and clothing brands based in Kuwait, offering seamless brand registration and comprehensive administrative management solutions."
            src="/worked_at_logos/jjFashion/jfLogo.jpg"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://d2ft5m8tvw50gy.cloudfront.net/login"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="DevTalks"
            description="Beautiful and user engaging website for devTalks, developers community website"
            src="/worked_at_logos/devtalks/devtalks.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://dev-talks-one.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Medical Billing Application"
            description="A robust medical billing application designed to streamline healthcare revenue cycles, ensuring accurate claims processing, payment tracking, and efficient practice management."
            src="/worked_at_logos/obsidianPm/logo.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="http://dev.obsidianrcm.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
