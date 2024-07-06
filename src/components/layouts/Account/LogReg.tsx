'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { fetcher } from '@/utils/fetcher'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const LogReg = () => {
	const router = useRouter()
	// ВЫБОР РЕЖИМА ВХОДА
	const [isVariableActive, setIsVariableActive] = useState(0)

	// ФОРМА ДЛЯ РЕГИСТРАЦИИ / ЛОГИНА
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')

	const [remember, setRemember] = useState(false)

	const [isResetPassword, setIsResetPassword] = useState(false)
	// const [logRegForm, setLogRegForm] = useState('')
	// const [resetPasswordForm, setResetPasswordForm] = useState('')

	const [validationEmailError, setValidationEmailError] = useState('')
	const [validationPasswordError, setValidationPasswordError] = useState('')
	const [validationUserError, setValidationUserError] = useState('')
	// const [userData, setUserData] = useState<userData>()
	const [userErrors, setUserErrors] = useState('')

	const [logRegNotification, setLogRegNotification] = useState('')

	const validateErrors = [
		validationEmailError,
		validationPasswordError,
		validationUserError,
		userErrors,
		logRegNotification,
	]

	// ПРОВЕРКА ЛОГИНА
	const { data, error, isLoading } = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth`,
			post:
				typeof window !== 'undefined' &&
				typeof localStorage.getItem('token') !== 'undefined'
					? { token: localStorage.getItem('token') }
					: undefined,
		}),
		fetcher
	)

	useEffect(() => {
		if (data) {
			router.push(`account/${data.username}`)
		}
	}, [data, router])

	const login = async () => {
		try {
			if (authButtonTitle === 'Loading...') {
				setLogRegNotification(
					'Происходит вход в аккаунт, пожалуйста, подождите!'
				)
			}
			if (username === '') {
				setButtonActive(false)
				return setValidationUserError('Имя пользователя не может быть пустым')
			} else {
				setValidationUserError('')
			}

			if (password === '') {
				setButtonActive(false)
				return setValidationPasswordError('Пароль не может быть пустым')
			} else {
				setValidationPasswordError('')
			}
			setButtonActive(true)
			setLogRegNotification('Происходит вход в аккаунт, пожалуйста, подождите!')
			const data = await axios.post(`${process.env.BACK_PORT}auth/login`, {
				username,
				password,
			})
			localStorage.setItem('token', data.data.token)
			setButtonActive(false)
			setLogRegNotification('')
		} catch (error: any) {
			setButtonActive(false)
			setLogRegNotification('')
			setUserErrors(`${error.response.data.message}!`)
		}
	}

	const register = async () => {
		try {
			const re = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
			if (authButtonTitle === 'Loading...') {
				setLogRegNotification(
					'Происходит регистрация и вход в аккаунт, пожалуйста, подождите!'
				)
			}
			if (!re.test(email)) {
				setButtonActive(false)
				return setValidationEmailError('Неверный email!')
			} else {
				setValidationEmailError('')
			}
			if (username === '') {
				setButtonActive(false)
				return setValidationUserError('Имя пользователя не может быть пустым')
			} else {
				setValidationUserError('')
			}

			if (password === '') {
				setButtonActive(false)
				return setValidationPasswordError('Пароль не может быть пустым')
			} else {
				setValidationPasswordError('')
			}
			setButtonActive(true)

			const data = await axios.post(`${process.env.BACK_PORT}auth/create`, {
				username,
				email,
				password,
			})

			console.log('data', data)
			localStorage.setItem('token', data.data.token)
		} catch (error: any) {
			setButtonActive(false)
			console.log(error.response.data.message)
		}
	}

	const handleAuth = () => {
		if (isVariableActive === 0) {
			if (authButtonTitle !== 'Loading...') login()
		} else {
			if (authButtonTitle !== 'Loading...') register()
		}
	}

	const [authButtonTitle, setAuthButtonTitle] = useState('SIGN IN')
	const [buttonActive, setButtonActive] = useState(false)

	useEffect(() => {
		if (isVariableActive === 0) {
			if (buttonActive) {
				return setAuthButtonTitle('Loading...')
			}
			setAuthButtonTitle('SIGN IN')
		} else {
			if (buttonActive) {
				return setAuthButtonTitle('Loading...')
			}
			setAuthButtonTitle('REGISTER')
		}
	}, [isVariableActive, buttonActive])

	useEffect(() => {
		setValidationEmailError('')
		setValidationPasswordError('')
		setValidationUserError('')
		setUserErrors('')

		if (isVariableActive === 0) {
			setAuthButtonTitle('SIGN IN')
		} else {
			setAuthButtonTitle('REGISTER')
		}
	}, [isVariableActive])

	return (
		<div className='pageLoadMove'>
			<Section>
				<div
					className={`flex flex-col items-center duration-300 ${
						isResetPassword ? 'opacity-0 left-[-100%] fixed' : 'opacity-100'
					}`}
				>
					<p className='text-[20px] lg:text-[33px] text-center mb-[24px] lg:mb-[64px]'>
						My account
					</p>
					<div className='flex items-center justify-center w-full h-[48px] sm:w-[500px] lg:h-[60px] bg-[#EFEFEF] rounded-[5px] lg:rounded-[8px] mb-[87px] lg:mb-[131px]'>
						{variables.map((variable, i) => (
							<div
								onClick={() => setIsVariableActive(i)}
								key={i}
								className={`relative flex justify-center items-center w-[calc(100%/2.07)] lg:w-[236px] h-[38px] lg:h-[50px] before:rounded-[5px] lg:before:rounded-[8px] cursor-pointer before:absolute before:size-full before:duration-300 before:origin-right ${
									isVariableActive === i
										? 'before:bg-[#fff]'
										: `before:bg-transparent ${
												isVariableActive === 1
													? 'before:ml-[200px] lg:before:ml-[400px]'
													: 'before:mr-[200px] lg:before:mr-[400px]'
										  }`
								}`}
							>
								<p className='text-[14px] lg:text-[20px] z-[2]'>{variable}</p>
							</div>
						))}
					</div>
					{/* ВЫВОД ОШИБОК ВАЛИДАЦИИ */}
					<div className='absolute top-[130px] sm:top-[120px] lg:top-[250px] flex justify-center items-center gap-[10px] text-[14px] sm:text-[16px] text-red-500 font-bold'>
						{validateErrors.map((error, i) => (
							<p
								key={i}
								className={`duration-300 ${
									error ? '' : 'mr-[40px] opacity-0 scale-[0.8] absolute'
								}`}
							>
								{error}
							</p>
						))}
					</div>
					{/* ВОЙТИ В АККАУНТ */}
					<div className='w-full sm:w-[500px] duration-300'>
						<div
							className={`flex flex-col gap-[46px] duration-300 ${
								isVariableActive === 1 ? 'h-[180px] lg:h-[200px]' : 'h-[120px]'
							}`}
						>
							<Input
								state={username}
								setState={setUsername}
								placeholder='UserName'
							/>
							<div
								className={`duration-300 ${
									isVariableActive === 1 ? 'mr-0' : 'mr-[100%] absolute'
								}`}
							>
								<Input state={email} setState={setEmail} placeholder='Email' />
							</div>
							<Input
								state={password}
								setState={setPassword}
								placeholder='Password'
							/>
						</div>
						<div className='flex items-center gap-[8px] mt-[15px] w-full mb-[12px] lg:mb-[85px]'>
							<div
								onClick={() => setRemember(!remember)}
								className={`size-[18px] duration-300 ease-in-out border-[1px] border-[#707070] ${
									remember && 'bg-[#000000]'
								} rounded-[2px]`}
							></div>
							<p>Remember me</p>
						</div>
						<Button onClick={handleAuth} title={authButtonTitle} />
						<p
							onClick={() => setIsResetPassword(!isResetPassword)}
							className={`relative text-center mt-[13px] mb-[40px] lg:mb-[247px] cursor-pointer duration-300 ${
								isVariableActive === 0 ? '' : 'mt-[100%] absolute opacity-0'
							}`}
						>
							Have you forgotten your password?
						</p>
					</div>
				</div>
				{/* ВОССТАНОВЛЕНИЕ ПАРОЛЯ */}
				<div
					className={`flex flex-col items-center duration-300 my-[24px] ${
						isResetPassword ? 'ml-0' : 'ml-[100%] opacity-0 fixed'
					}`}
				>
					<p className='hidden lg:block text-[33px] mb-[39px] text-center'>
						Have you Forgotten Your Password ?
					</p>
					<p className='block lg:hidden text-[20px] mb-[16px]'>Lost password</p>

					<p className='text-[12px] lg:text-[20px] text-left lg:text-center'>
						If you&rsquo;ve forgotten your password, enter your e-mail <br />
						address and we&rsquo;ll send you an e-mail
					</p>
					<div className='flex flex-col gap-[64px] w-full lg:w-[500px] mt-[76px]'>
						<Input state={email} setState={setEmail} placeholder='Email' />
						<Button title='RESET PASSWORD' />
					</div>
					<p
						onClick={() => setIsResetPassword(!isResetPassword)}
						className={`relative text-center mt-[13px] lg:mb-[247px] cursor-pointer mb-[250px]`}
					>
						You remembered the password?
					</p>
				</div>
			</Section>
		</div>
	)
}

const variables = ['Sign in', 'Register']
