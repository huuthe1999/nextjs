import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const About: NextPage = (props: Props) => {
  return (
    <>
      <p>About</p>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
        layout="responsive"
        objectFit="cover"
      />
      <Link href="/">Home</Link>
    </>
  )
}

export default About
