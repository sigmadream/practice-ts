import type {Metadata} from 'next'
import './globals.scss'
import Gnb from './gnb'

export const metadata: Metadata = {
    title: 'Practice UI Components',
    description: 'Practice UI Components',
}

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="ko">
        <body>
        <Gnb/>
        <main>{children}</main>
        </body>
        </html>
    )
}

export default Layout
