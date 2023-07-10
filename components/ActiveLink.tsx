import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}
interface Props{
  name:string,
  href:string
}

const ActiveLink: FC<Props> = ({href,name}) => {
    const {asPath} =useRouter()
  return (
   <Link href={href} style={asPath=== href ? style : undefined}>
   {name}
    </Link>
  )
}

export default ActiveLink