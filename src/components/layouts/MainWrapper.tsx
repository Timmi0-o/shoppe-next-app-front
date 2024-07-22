'use client'
import { store } from '@/lib/store'
import { Provider } from 'react-redux'
import { Footer } from './Footer'
import { Header } from './Header/Header'

export const MainWrapper = ({ children }: any) => {
	return (
		<Provider store={store}>
			<div>
				<div className='min-h-[90vh]'>
					<Header />
					<div>{children}</div>
				</div>
				<Footer />
			</div>
		</Provider>
	)
}
