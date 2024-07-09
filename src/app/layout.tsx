import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header/Header'
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
				<div>
					<div className='min-h-[90vh]'>
						<Header />
						<div>{children}</div>
					</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
