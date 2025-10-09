export function generateSystem({
	xinput,
	vibration,
	crouchToggle,
	aimZoomMode,
	aimAssist,
	cutsceneBars,
	profile,
}: {
	xinput: number
	vibration: number
	crouchToggle: number
	aimZoomMode: number
	aimAssist: number
	cutsceneBars: number
	profile: string
}): string {
	return `con_restricted=0
i_use_xinput=${xinput}
i_forcefeedback=${vibration}
g_useAimAssistance=${aimAssist}
g_enableAimAssist=${aimAssist}
cl_crouchToggle=${crouchToggle}
hud_ctrlzoommode=${aimZoomMode}
hud_panoramicHeight=${cutsceneBars}
sys_profile=${profile}`
}
