interface Tab {
	key: string
	label: string
}

interface TabNavigationProps {
	tabs: Tab[]
	activeTab: string
	onTabChange: (tab: string) => void
}

export function TabNavigation({
	tabs,
	activeTab,
	onTabChange,
}: TabNavigationProps) {
	return (
		<div className='flex justify-between border-b border-gray-300'>
			{tabs.map(tab => (
				<button
					key={tab.key}
					type='button'
					onClick={() => onTabChange(tab.key)}
					className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
						activeTab === tab.key
							? 'border-b-2 border-gray-500 text-gray-600'
							: 'text-gray-600 hover:text-gray-800'
					}`}>
					{tab.label}
				</button>
			))}
		</div>
	)
}
