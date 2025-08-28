import Header from '@/components/Header'
import Mapping from '@/components/Mapping'
import Columns from '@/UI/Columns'
import Download from '@/components/Download'
import Instruction from '@/components/Instruction'

export default function Home() {
	return (
		<>
			<Header />
			<Mapping />
			<main className='container bg-[#ff9191]'>
				<Columns>
					<Download />
					<Instruction />
				</Columns>
				<Columns>OtherMods + Background</Columns>
			</main>
		</>
	)
}
