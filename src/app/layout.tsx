import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { dmSans } from '@/utils/fonts'
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: 'SHOPPE',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning className={`h-full ` + dmSans.className}>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
