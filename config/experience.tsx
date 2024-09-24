import { Link } from "@chakra-ui/react"

export type Company ="JJFasjion" | "ObsidianPm"

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  JJFasjion: {
    name: "JJ Fashion",
    longName: "JJ Fashion Limited AU",
    subDetail: "e-commerce platerforms",
    url: "https://d2ft5m8tvw50gy.cloudfront.net/login",
    position: "Software engineers",
    duration: "March 2024 - Aug 2024",
    logo: {
      light: "/worked_at_logos/jjFashion/jfLogo.jpg",
      dark: "/worked_at_logos/jjFashion/jfLogo.jpg",
    },
    roles: [
      <>
        Revamping the JJ Fashion Portal old UI into a new{" "}
        <Link
          aria-label="JJ Fashion Portal"
          href="https://d2ft5m8tvw50gy.cloudfront.net/login"
          target="_blank"
          rel="noreferrer"
        >
          JJ Fashion Portal
        </Link>{" "}
        using React Js and Daisy UI. Restructuring the old app into a
        newer architectural design approach.
      </>,
      <>
        Created responsive UI, re-usable logics, re-usable components
      </>,
      <>
        Worked on optimizing{" "}
        <Link
          aria-label="JJ Fashion Portal"
          href="https://d2ft5m8tvw50gy.cloudfront.net/login"
          target="_blank"
          rel="noreferrer"
        >
          JJ Fashion Portal
        </Link>{" "}
        main site API request structure by converting it to RTK Query
      </>,
    ],
  },
  ObsidianPm: {
    name: "ObsidianPm",
    longName: "ObsidianPM Revenue Cycle Management System",
    subDetail: "Medical Billing Company",
    url: "http://dev.obsidianrcm.com/",
    position: "Software engineers",
    duration: "Oct 2022 - Present",
    logo: {
      light: "/worked_at_logos/ObsidianPm/obspm.jpeg",
      dark: "/worked_at_logos/ObsidianPm/obspm.jpeg",
    },
    roles: [
      <>
        As a frontend team, we utilized Material UI to create responsive,
        user-friendly interfaces and integrated APIs using RTK Query. We worked
        together to enhance the user experience, optimize performance, and
        resolve issues, ensuring smooth functionality and stability across the
        application.
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.JJFasjion,
  Experiences.ObsidianPm,
]
