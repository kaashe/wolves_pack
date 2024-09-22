import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://www.linkedin.com/in/kashif-ullah-46b605206/',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.linkedin.com/in/kashif-ullah-46b605206/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kashif-ullah-46b605206/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/23839479/kashif-ullah',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.linkedin.com/in/kashif-ullah-46b605206/',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/kaashe',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://github.com/kaashe',
    icon: FaDev,
  },
]
