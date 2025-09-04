import Header from '@/components/Header'
import Mapping from '@/components/Mapping'
import Columns from '@/UI/Columns'
import Download from '@/components/Download'
import Instruction from '@/components/Instruction'
import OtherMods from '@/components/OtherMods'
import OtherModsBg from '@/components/OtherModsBg'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
	return (
		<>
			<DarkModeToggle />
			<Header />
			<Mapping />
			<main className='container overflow-x-hidden xl:overflow-visible'>
				<Columns>
					<Download />
					<Instruction />
				</Columns>
				<Columns>
					<OtherMods />
					<OtherModsBg />
				</Columns>
			</main>
			<Footer />
		</>
	)
}
