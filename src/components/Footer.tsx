import Columns from '@/UI/Columns'

const iconStyle = 'hover:scale-105 transition-transform'

export default function Footer() {
	return (
		<footer className='container overflow-x-hidden'>
			<Columns className='py-12 pb-14 xl:py-8 justify-center items-center'>
				<div className='flex-1 flex justify-center items-center min-h-14'>
					<p className='mt-1 font-bold text-2xl'>
						Designed and Coded by SD91PL
					</p>
				</div>
				<div className='flex-1 flex justify-end items-center gap-7.5 p-2.5 min-w-90 min-h-14'>
					<a
						href='https://github.com/SD91PL'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src='/img/footer/github.svg'
							alt='github profile'
							className={`${iconStyle} min-w-9 min-h-9`}
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/sd91pl/'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src='/img/footer/linkedin.svg'
							alt='linkedin profile'
							className={`${iconStyle} min-w-7.5 min-h-7.5`}
						/>
					</a>
					<a
						href='https://discord.com/users/1063454745639010394'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src='/img/footer/discord.svg'
							alt='discord profile'
							className={`${iconStyle} min-w-9 min-h-9`}
						/>
					</a>
				</div>
			</Columns>
		</footer>
	)
}
