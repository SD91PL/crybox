import Header from '@/components/Header'
import Mapping from '@/components/Mapping'
import Columns from '@/UI/Columns'
import Download from '@/components/Download'
import Instruction from '@/components/Instruction'
import OtherMods from '@/components/OtherMods'
import OtherModsBg from '@/components/OtherModsBg'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<>
			<Header />
			<Mapping />
			<main className='container overflow-x-hidden xl:overflow-visible bg-[#ff9191]'>
				<Columns>
					<Download />
					<Instruction />
				</Columns>
				<Columns>
					<OtherMods />
					<OtherModsBg />
				</Columns>
			</main>
			<Footer/>
		</>
	)
}
