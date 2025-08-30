import H1 from '@/UI/H1'
import H2 from '@/UI/H2'
import P from '@/UI/P'
import Section from '@/UI/Section'
import Path from '@/UI/Path'

const gap: string = 'flex flex-col gap-5'

export default function OtherMods() {
	return (
		<section
			id='otherMods'
			className='order-2 xl:order-1 flex-1 flex flex-col gap-5 px-2.5 py-5 bg-white'>
			<Section>
				<H1>Other Modifications</H1>
				<P>
					The following modifications were not created by me, but they are worth
					installing.
				</P>
				<div className={`${gap}`}>
					<H2>Crysis: Warhead Suitvoice in Crysis (Mod)</H2>
					<P>
						This mod replaces the original, low-quality nanosuit voice in Crysis
						with higher-quality audio files from Crysis: Warhead. It improves
						both the male and female voices. Top quality.
					</P>
					<P>
						<a
							href='https://www.moddb.com/games/crysis/downloads/crysis-warhead-suitvoice-in-original-crysis'
							target='_blank'
							rel='noopener noreferrer'
							className='font-bold underline'>
							Download link
						</a>
					</P>
					<P>Installation path:</P>
					<Path>F:\Program Files (x86)\GOG Galaxy\Games\Crysis\Mods\CrysisWarheadSuitvoice</Path>
					<P>After installation, it&apos;s recommended to change the desktop shortcut target to:</P>
					<Path>&quot;F:\Program Files (x86)\GOG Galaxy\Games\Crysis\Bin64\Crysis.exe&quot; -mod CrysisWarheadSuitvoice</Path>
					<P>This will launch the game directly with the mod enabled in 64-bit mode.</P>
				</div>
			</Section>
		</section>
	)
}
