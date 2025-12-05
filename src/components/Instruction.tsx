import H1 from '@/UI/H1'
import H2 from '@/UI/H2'
import P from '@/UI/P'
import UL from '@/UI/UL'
import Section from '@/UI/Section'
import Path from '@/UI/Path'

const gap: string = 'flex flex-col gap-5'

export default function Instruction() {
	return (
		<section
			id='insctruction'
			className='flex-1 flex flex-col gap-5 px-2.5 py-5'>
			<Section>
				<H1>
					Modification Improving Xbox Controller Support for Crysis and Crysis
					Warhead (GOG.com)
				</H1>
				<H2>Why was this modification created?</H2>
				<div>
					<P>
						Crysis is a legendary FPS series, but even in the GOG.com version,
						it lacks the ability to remap controller buttons via the in-game
						menu. The default Xbox controller support is limited, and many
						buttons behave illogically—or not at all.
						<br />
						I created this modification to solve that issue. It provides:
						<br />
					</P>
					<UL>
						<li>Comfortable Xbox controller support</li>
						<li>
							Logical button assignments (e.g., nanosuit modes, vehicles,
							sprinting, interaction)
						</li>
						<li>
							Full game readiness without manually editing XML or CFG files
						</li>
					</UL>
				</div>
				<H2>What does the modification include?</H2>
				<UL>
					<li>
						<strong>actionmaps.xml</strong> files with improved controller
						button mappings
					</li>
					<li>
						<strong>system.cfg</strong> file with additional settings to enhance
						controller handling and gameplay
					</li>
					<li>
						<strong>diff_easy.cfg</strong> file that slows down cloak mode
						energy consumption
					</li>
					<li>Layouts and settings ready for printing</li>
					<li>
						Full compatibility with <strong>Crysis (2007)</strong> and{' '}
						<strong>Crysis Warhead (2008)</strong> from GOG.com
					</li>
				</UL>
			</Section>
			<Section>
				<H1>Installation Instructions</H1>
				<div className={`${gap}`}>
					<H2>1. Make Backups</H2>
					<P>Before installation, back up the following files:</P>
					<ul className={`${gap}`}>
						<li className={`${gap}`}>
							<P>
								<strong>actionmaps.xml</strong>
							</P>
							<Path>
								C:\Users\[USERNAME]\Documents\My
								Games\Crysis\Profiles\default\actionmaps.xml
							</Path>
							<Path>
								C:\Users\[USERNAME]\Documents\My
								Games\Crysis_WARHEAD\Profiles\default\actionmaps.xml
							</Path>
						</li>
						<li className={`${gap}`}>
							<P>
								<strong>system.cfg</strong>
							</P>
							<Path>
								F:\Program Files (x86)\GOG Galaxy\Games\Crysis\system.cfg
							</Path>
							<Path>
								F:\Program Files (x86)\GOG Galaxy\Games\Crysis
								Warhead\system.cfg
							</Path>
						</li>
						<li className={`${gap}`}>
							<P>
								<strong>diff_easy.cfg</strong>
							</P>
							<Path>
								F:\Program Files (x86)\GOG
								Galaxy\Games\Crysis\Game\Config\diff_easy.cfg
							</Path>
							<Path>
								F:\Program Files (x86)\GOG Galaxy\Games\Crysis
								Warhead\Game\config\diff_easy.cfg
							</Path>
						</li>
					</ul>
					<P>
						Note: These paths are for the GOG.com versions and Windows 10. Your
						paths may differ depending on your Documents folder and game
						installation location.
						<br />
						The system.cfg file may not exist by default—simply paste it in the
						next step if it&apos;s missing.
					</P>
				</div>
				<div className={`${gap}`}>
					<H2>2. Extract the Files</H2>
					<div>
						<P>Download the modification package and extract:</P>
						<UL>
							<li>
								<strong>actionmaps.xml</strong> into the appropriate
								Profiles\default\ folder of each game
							</li>
							<li>
								<strong>system.cfg</strong> into the main directory of each game
							</li>
							<li>
								<strong>diff_easy.cfg</strong> into the Game\Config subfolder of
								each game
							</li>
						</UL>
						<P>Agree to replace existing files if prompted.</P>
					</div>
					<P>
						Note: <br />
						To use the alternative Xbox control layout (e.g. crouch on B, sprint
						on L-stick), copy the files from the &quot;ALT Files&quot; folder.
					</P>
				</div>
				<div className={`${gap}`}>
					<H2>3. Launch the Game</H2>
					<P>
						After launching, the Xbox controller should work immediately—with
						full button support and improved controls. No additional software is
						required.
					</P>
				</div>
				<div className={`${gap}`}>
					<H2>4. Final Notes</H2>
					<P>
						This modification is intended only for the original 2007 and 2008
						versions of the games. <br className='hidden 2xl:inline' /> It has
						not been tested with the Remastered Edition, which likely does not
						require these changes.
					</P>
					<P>
						The mod does not alter any executable game files—it is completely
						safe and reversible. <br className='hidden 2xl:inline' /> To return
						to the original control scheme, just restore the backup files.
					</P>
				</div>
			</Section>
			<Section>
				<H1>Possible Issues and Solutions</H1>
				<div className={`${gap}`}>
					<H2>The modification doesn&apos;t work</H2>
					<P>
						Sometimes Crysis or Crysis Warhead may ignore or overwrite your
						custom <strong>actionmaps.xml</strong>. This usually happens due to
						a mismatch in the <strong>version</strong> attribute inside the{' '}
						<strong>&lt;actionmap&gt;</strong> tags. To fix it, open the newly
						generated file, check the version number (e.g.{' '}
						<strong>version=&quot;20&quot;</strong>), and update your modded
						file to match.
					</P>
					<P>
						In my case, the correct version was{' '}
						<strong>version=&quot;20&quot;</strong> for Crysis and{' '}
						<strong>version=&quot;19&quot;</strong> for Crysis Warhead. If your
						modded file uses a different version, the game may reject it
						silently.
					</P>
					<P>
						Use an editor like <strong>VSCode</strong> with{' '}
						<strong>Find & Replace (Ctrl + H)</strong> to quickly update all
						version values. Once done, save and reapply your custom{' '}
						<strong>actionmaps.xml</strong>.
					</P>
				</div>
				<div className={`${gap}`}>
					<H2>Binoculars</H2>
					<P>
						Many players assume the binoculars in Crysis and Crysis Warhead are
						hardcoded to <strong>xi_b</strong>, supposedly due to engine
						limitations. I believed that too — until I found the real cause in
						the <strong>actionmaps.xml</strong> file. The issue was that{' '}
						<strong>xi_b</strong> was assigned to{' '}
						<strong>xi_voice_chat_talk</strong>, not <strong>binoculars</strong>
						. Reassigning <strong>xi_voice_chat_talk</strong> to another key
						(e.g. &quot;9&quot;) and binding <strong>binoculars</strong> to{' '}
						<strong>xi_b</strong> fixed the problem — no engine modding needed.
						I also tested mapping <strong>crouch</strong> to{' '}
						<strong>xi_b</strong> with no issues.
					</P>
				</div>
				<div className={`${gap}`}>
					<H2>32-bit vs 64-bit</H2>
					<P>
						Crysis 1 defaults to 32-bit mode. <br />
						To use the 64-bit version, change the desktop shortcut target to:
					</P>
					<Path>
						&quot;F:\Program Files (x86)\GOG
						Galaxy\Games\Crysis\Bin64\Crysis.exe&quot;
					</Path>
				</div>
				<div className={`${gap}`}>
					<H2>Button Remapping</H2>
					<P>
						Xbox Controller Fix for Crysis - Crybox now delivers a powerful
						solution thanks to newly added customization features. The latest
						update introduces two dedicated panels that let players fully adjust
						controls and gameplay behavior, making Crybox one of the most
						flexible ways to enjoy Crysis and Crysis Warhead - like experiences
						with modern controller support.
					</P>
					<P>
						If you trust my optimized settings, click <strong>Download</strong>{' '}
						to get the ready-to-use configuration. If&nbsp;you&nbsp;prefer your
						own layout or want to fine-tune Crysis controller behavior, press{' '}
						<strong>Customize</strong> to&nbsp;access{' '}
						<strong>/customize/controls</strong> and{' '}
						<strong>/customize/gameplay</strong> and generate your personalized
						files.
					</P>
				</div>
			</Section>
			<Section>
				<H1>Contact & Development</H1>
				<P>
					Have questions? Want to report an issue or suggest a different button
					layout?
					<br />
					<a
						href='https://discord.com/users/1063454745639010394'
						target='_blank'
						rel='noopener noreferrer'
						className='font-bold underline underline-offset-4'>
						Contact me on Discord
					</a>{' '}
					- I&apos;m happy to expand the project if there&apos;s interest.
				</P>
			</Section>
		</section>
	)
}
