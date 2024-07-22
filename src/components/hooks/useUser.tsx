'use client'
import { fetcher } from '@/utils/fetcher'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useUser = () => {
	// ПРОВЕРКА НАЛИЧИЯ ТОКЕНА НА КЛИЕНТЕ
	const [token, setToken] = useState<string | null>()

	// ПРОВЕРКА ЛОГИНА
	const { data: userData, mutate: mutateUser } = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth/${token}`,
		}),
		fetcher
	)

	useEffect(() => {
		if (window !== undefined && localStorage.getItem('token') !== undefined) {
			const storedToken = localStorage.getItem('token')
			setToken(storedToken)
		}
	}, [])

	return {
		user: userData,
		mutateUser,
	}
}
