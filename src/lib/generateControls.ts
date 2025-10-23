export function generateControls(
	version: number,
	mappings: Record<string, string> = {}
): string {
	// Helper function for retrieving button values
	const getButton = (
		actionmap: string,
		action: string,
		defaultButton: string
	): string => {
		const key = `${actionmap}.${action}`
		return mappings[key] || defaultButton
	}

	return `<ActionMaps>
 <actionmap name="debug" version="${version}">
  <action name="flymode" onPress="1" noModifiers="1">
   <key name="f3"/>
  </action>
  <action name="godmode" onPress="1" noModifiers="1">
   <key name="f4"/>
  </action>
  <action name="ulammo" onPress="1" noModifiers="1">
   <key name="np_2"/>
  </action>
  <action name="debug" onPress="1">
   <key name="7"/>
  </action>
  <action name="thirdperson" onPress="1" noModifiers="1">
   <key name="f1"/>
  </action>
  <action name="debug_ag_step" onPress="1">
   <key name="backslash"/>
  </action>
  <action name="tweak_enable" onPress="1">
   <key name="np_enter"/>
  </action>
  <action name="tweak_up" onPress="1">
   <key name="up"/>
   <key name="np_8"/>
  </action>
  <action name="tweak_down" onPress="1">
   <key name="down"/>
   <key name="np_2"/>
  </action>
  <action name="tweak_left" onPress="1">
   <key name="left"/>
   <key name="np_4"/>
  </action>
  <action name="tweak_right" onPress="1">
   <key name="right"/>
   <key name="np_6"/>
  </action>
  <action name="tweak_inc" onPress="1">
   <key name="np_add"/>
  </action>
  <action name="tweak_dec" onPress="1">
   <key name="np_subtract"/>
  </action>
 </actionmap>
 <actionmap name="default" version="${version}">
  <action name="cycle_spectator_mode" onPress="1">
   <key name="space"/>
  </action>
  <action name="prev_spectator_target" onPress="1">
   <key name="left"/>
  </action>
  <action name="next_spectator_target" onPress="1">
   <key name="right"/>
   <key name="mouse2"/>
  </action>
  <action name="xi_hud_mouseclick" onPress="1" onRelease="1">
   <key name="xi_a"/>
  </action>
  <action name="xi_voice_chat_talk" onPress="1" onRelease="1">
   <key name="9"/>
  </action>
  <action name="attack1" onPress="1" onRelease="1">
   <key name="mouse1"/>
   <key name="${getButton('default', 'attack1', 'xi_triggerr_btn')}"/>
  </action>
  <action name="attack2" onPress="1" onRelease="1">
   <key name="mouse2"/>
  </action>
  <action name="zoom" onPress="1" onRelease="1">
   <key name="mouse2"/>
  </action>
  <action name="firemode" onPress="1">
   <key name="x"/>
   <key name="${getButton('default', 'firemode', 'xi_dpad_up')}"/>
  </action>
  <action name="objectives" onPress="1" onRelease="1">
   <key name="o"/>
  </action>
  <action name="use" onPress="1" onRelease="1">
   <key name="f"/>
  </action>
  <action name="xi_use" onPress="1" onRelease="1">
   <key name="${getButton('default', 'xi_use', 'xi_x')}"/>
  </action>
  <action name="voice_chat_talk" onPress="1" onRelease="1">
   <key name="lalt"/>
  </action>
  <action name="xi_zoom" onPress="1" onRelease="1">
   <key name="${getButton('default', 'xi_zoom', 'xi_triggerl_btn')}"/>
  </action>
  <action name="xi_disconnect" onPress="1" onRelease="1">
   <key name="disconnect"/>
  </action>
  <action name="hud_mousex">
   <key name="maxis_x"/>
   <key name="xi_thumbrx"/>
  </action>
  <action name="hud_mousey">
   <key name="maxis_y"/>
   <key name="xi_thumbry"/>
  </action>
  <action name="hud_mouseclick" onPress="1" onRelease="1">
   <key name="mouse1"/>
  </action>
  <action name="hud_suit_menu" onPress="1" onRelease="1">
   <key name="mouse3"/>
  </action>
  <action name="hud_openchat" onPress="1">
   <key name="y"/>
  </action>
  <action name="hud_buy_weapons" onPress="1">
   <key name="p"/>
   <key name="xi_dpad_right"/>
  </action>
  <action name="hud_pda_scroll" onPress="1">
   <key name="backspace"/>
  </action>
  <action name="xi_hud_back" onPress="1" onRelease="1">
   <key name="${getButton('default', 'xi_hud_back', 'xi_start')}"/>
  </action>
  <action name="hud_suit_mod" onPress="1" onRelease="1">
   <key name="v"/>
   <key name="${getButton('default', 'hud_suit_mod', 'xi_shoulderr')}"/>
  </action>
  <action name="hud_select1" onPress="1">
   <key name="1"/>
   <key name="${getButton('default', 'hud_select1', 'xi_dpad_up')}"/>
  </action>
  <action name="hud_select2" onPress="1">
   <key name="2"/>
   <key name="${getButton('default', 'hud_select2', 'xi_dpad_left')}"/>
  </action>
  <action name="hud_select3" onPress="1">
   <key name="3"/>
   <key name="${getButton('default', 'hud_select3', 'xi_dpad_right')}"/>
  </action>
  <action name="hud_openteamchat" onPress="1">
   <key name="u"/>
  </action>
  <action name="hud_mousewheelup" onPress="1">
   <key name="mwheel_up"/>
  </action>
  <action name="hud_mousewheeldown" onPress="1">
   <key name="mwheel_down"/>
  </action>
  <action name="hud_mouserightbtndown" onPress="1">
   <key name="mouse2"/>
  </action>
  <action name="hud_mouserightbtnup" onRelease="1">
   <key name="mouse2"/>
  </action>
  <action name="hud_show_multiplayer_scoreboard" onPress="1">
   <key name="tab"/>
  </action>
  <action name="hud_hide_multiplayer_scoreboard" onRelease="1">
   <key name="tab"/>
  </action>
  <action name="hud_toggle_scoreboard_cursor" onPress="1" onRelease="1">
   <key name="space"/>
  </action>
  <action name="hud_show_pda_map" onPress="1">
   <key name="m"/>
  </action>
  <action name="xi_hud_show_pda_map" onPress="1" onRelease="1">
   <key name="i"/>
  </action>
  <action name="hud_night_vision" onPress="1">
   <key name="${getButton('default', 'hud_night_vision', 'xi_back')}"/>
  </action>
  <action name="hud_mptutorial_disable" onPress="1">
   <key name="end"/>
  </action>
  <action name="hud_select4" onPress="1">
   <key name="4"/>
   <key name="${getButton('default', 'hud_select4', 'xi_thumbl')}"/>
  </action>
  <action name="hud_select5" onPress="1">
   <key name="5"/>
   <key name="${getButton('default', 'hud_select5', 'xi_thumbr')}"/>
  </action>
  <action name="buyammo" onPress="1" consoleCmd="1">
   <key name="period"/>
  </action>
  <action name="skip_cutscene" onPress="1" noModifiers="1">
   <key name="space"/>
  </action>
  <action name="xi_attack1" onPress="1" onRelease="1">
   <key name="${getButton('default', 'xi_attack1', 'xi_triggerr_btn')}"/>
  </action>
  <action name="xi_attack2" onPress="1" onRelease="1">
   <key name="${getButton('default', 'xi_attack2', 'xi_triggerl_btn')}"/>
  </action>
 </actionmap>
 <actionmap name="helicopter" version="${version}">
  <action name="v_rotatepitch" always="1">
   <key name="maxis_y"/>
  </action>
  <action name="v_moveup" onPress="1" onRelease="1" retriggerable="1">
   <key name="w"/>
   <key name="${getButton('helicopter', 'v_moveup', 'xi_a')}"/>
  </action>
  <action name="v_movedown" onPress="1" onRelease="1" retriggerable="1">
   <key name="s"/>
   <key name="${getButton('helicopter', 'v_movedown', 'xi_b')}"/>
  </action>
  <action name="v_rotatedir" always="1">
   <key name="maxis_x"/>
  </action>
  <action name="v_rollleft" onPress="1" onRelease="1" onHold="1">
   <key name="a"/>
  </action>
  <action name="v_rollright" onPress="1" onRelease="1" onHold="1">
   <key name="d"/>
  </action>
  <action name="v_pitchup" onPress="1" onRelease="1">
   <key name="r"/>
  </action>
  <action name="v_pitchdown" onPress="1" onRelease="1">
   <key name="c"/>
  </action>
  <action name="v_brake" onPress="1" onRelease="1">
   <key name="key"/>
  </action>
  <action name="v_boost" onPress="1" onRelease="1" retriggerable="1">
   <key name="lshift"/>
   <key name="${getButton('helicopter', 'v_boost', 'xi_shoulderl')}"/>
  </action>
 </actionmap>
 <actionmap name="landvehicle" version="${version}">
  <action name="v_moveforward" onPress="1" onRelease="1" retriggerable="1">
   <key name="w"/>
  </action>
  <action name="v_moveback" onPress="1" onRelease="1" retriggerable="1">
   <key name="s"/>
  </action>
  <action name="v_turnleft" onPress="1" onRelease="1" retriggerable="1">
   <key name="a"/>
  </action>
  <action name="v_turnright" onPress="1" onRelease="1" retriggerable="1">
   <key name="d"/>
  </action>
  <action name="v_rollleft" onPress="1" onRelease="1">
   <key name="q"/>
  </action>
  <action name="v_rollright" onPress="1" onRelease="1">
   <key name="e"/>
  </action>
  <action name="v_brake" onPress="1" onRelease="1">
   <key name="space"/>
   <key name="${getButton('landvehicle', 'v_brake', 'xi_a')}"/>
  </action>
  <action name="v_boost" onPress="1" onRelease="1" retriggerable="1">
   <key name="lshift"/>
   <key name="${getButton('landvehicle', 'v_boost', 'xi_shoulderl')}"/>
  </action>
 </actionmap>
 <actionmap name="multiplayer" version="${version}">
  <action name="radio_group_0" onPress="1">
   <key name="f5"/>
  </action>
  <action name="radio_group_1" onPress="1">
   <key name="f6"/>
  </action>
  <action name="radio_group_2" onPress="1">
   <key name="f7"/>
  </action>
  <action name="radio_group_3" onPress="1">
   <key name="f8"/>
  </action>
 </actionmap>
 <actionmap name="player" version="${version}">
  <action name="moveleft" onPress="1" onRelease="1" retriggerable="1">
   <key name="a"/>
  </action>
  <action name="moveright" onPress="1" onRelease="1" retriggerable="1">
   <key name="d"/>
  </action>
  <action name="moveforward" onPress="1" onRelease="1" retriggerable="1">
   <key name="w"/>
  </action>
  <action name="moveback" onPress="1" onRelease="1" retriggerable="1">
   <key name="s"/>
  </action>
  <action name="jump" onPress="1" onRelease="1">
   <key name="space"/>
   <key name="${getButton('player', 'jump', 'xi_a')}"/>
  </action>
  <action name="crouch" onPress="1">
   <key name="lctrl"/>
   <key name="${getButton('player', 'crouch', 'xi_b')}"/>
  </action>
  <action name="prone" onPress="1">
   <key name="z"/>
   <key name="${getButton('player', 'prone', 'xi_dpad_down')}"/>
  </action>
  <action name="sprint" onPress="1" onRelease="1" retriggerable="1">
   <key name="lshift"/>
   <key name="${getButton('player', 'sprint', 'xi_thumbl')}"/>
  </action>
  <action name="special" onPress="1" onRelease="1">
   <key name="t"/>
   <key name="${getButton('player', 'special', 'xi_thumbr')}"/>
  </action>
  <action name="leanleft" onPress="1" onRelease="1" onHold="1">
   <key name="q"/>
  </action>
  <action name="leanright" onPress="1" onRelease="1" onHold="1">
   <key name="e"/>
  </action>
  <action name="rotateyaw">
   <key name="maxis_x"/>
  </action>
  <action name="rotatepitch">
   <key name="maxis_y"/>
  </action>
  <action name="reload" onPress="1">
   <key name="r"/>
   <key name="${getButton('player', 'reload', 'xi_x')}"/>
  </action>
  <action name="drop" onPress="1" onRelease="1">
   <key name="j"/>
  </action>
  <action name="nextitem" onPress="1">
   <key name="mwheel_up"/>
   <key name="${getButton('player', 'nextitem', 'xi_dpad_left')}"/>
  </action>
  <action name="previtem" onPress="1">
   <key name="mwheel_down"/>
  </action>
  <action name="small" onPress="1">
   <key name="1"/>
  </action>
  <action name="medium" onPress="1">
   <key name="2"/>
  </action>
  <action name="explosive" onPress="1">
   <key name="3"/>
  </action>
  <action name="handgrenade" onPress="1">
   <key name="h"/>
   <key name="${getButton('player', 'handgrenade', 'xi_dpad_right')}"/>
  </action>
  <action name="xi_handgrenade" onPress="1" onRelease="1">
   <key name="${getButton('player', 'xi_handgrenade', 'xi_y')}"/>
  </action>
  <action name="utility" onPress="1">
   <key name="5"/>
  </action>
  <action name="binoculars" onPress="1">
   <key name="b"/>
   <key name="${getButton('player', 'binoculars', 'xi_shoulderl')}"/>
  </action>
  <action name="grenade" onPress="1">
   <key name="g"/>
  </action>
  <action name="xi_grenade" onPress="1" onRelease="1">
   <key name="${getButton('player', 'xi_grenade', 'xi_y')}"/>
  </action>
  <action name="zoom_in" onPress="1">
   <key name="mwheel_up"/>
   <key name="${getButton('player', 'zoom_in', 'xi_dpad_right')}"/>
  </action>
  <action name="zoom_out" onPress="1">
   <key name="mwheel_down"/>
   <key name="${getButton('player', 'zoom_out', 'xi_dpad_left')}"/>
  </action>
  <action name="horn" onPress="1" onRelease="1">
   <key name="h"/>
  </action>
  <action name="gboots" onPress="1">
   <key name="n"/>
  </action>
  <action name="lights" onPress="1">
   <key name="l"/>
  </action>
  <action name="suitmode" onPress="1">
   <key name="4"/>
  </action>
  <action name="xi_movex">
   <key name="xi_thumblx"/>
  </action>
  <action name="xi_movey">
   <key name="xi_thumbly"/>
  </action>
  <action name="xi_rotateyaw">
   <key name="xi_thumbrx"/>
  </action>
  <action name="xi_rotatepitch">
   <key name="xi_thumbry"/>
  </action>
  <action name="hud_weapon_mod" onPress="1">
   <key name="c"/>
  </action>
 </actionmap>
 <actionmap name="seavehicle" version="${version}">
  <action name="v_moveforward" onPress="1" onRelease="1" retriggerable="1">
   <key name="w"/>
  </action>
  <action name="v_moveback" onPress="1" onRelease="1" retriggerable="1">
   <key name="s"/>
  </action>
  <action name="v_turnleft" onPress="1" onRelease="1" retriggerable="1">
   <key name="a"/>
  </action>
  <action name="v_turnright" onPress="1" onRelease="1" retriggerable="1">
   <key name="d"/>
  </action>
  <action name="v_brake" onPress="1" onRelease="1">
   <key name="space"/>
   <key name="${getButton('seavehicle', 'v_brake', 'xi_a')}"/>
  </action>
  <action name="v_boost" onPress="1" onRelease="1" onHold="1" retriggerable="1">
   <key name="lshift"/>
   <key name="${getButton('seavehicle', 'v_boost', 'xi_shoulderl')}"/>
  </action>
 </actionmap>
 <actionmap name="singleplayer" version="${version}">
  <action name="save" onPress="1" consoleCmd="1">
   <key name="f5"/>
  </action>
  <action name="load" onPress="1" consoleCmd="1">
   <key name="f8"/>
  </action>
  <action name="loadLastSave" onPress="1" consoleCmd="1">
   <key name="f9"/>
  </action>
 </actionmap>
 <actionmap name="vehicle" version="${version}">
  <action name="binoculars" onPress="1">
   <key name="9"/>
  </action>
  <action name="use" onPress="1" onRelease="1">
   <key name="${getButton('vehicle', 'use', 'xi_x')}"/>
  </action>
  <action name="xi_v_rotateyaw">
   <key name="xi_thumbrx"/>
  </action>
  <action name="xi_v_rotatepitch">
   <key name="xi_thumbry"/>
  </action>
  <action name="v_changeseat1" onPress="1">
   <key name="1"/>
  </action>
  <action name="v_changeseat2" onPress="1">
   <key name="2"/>
  </action>
  <action name="v_changeseat3" onPress="1">
   <key name="3"/>
  </action>
  <action name="v_changeseat4" onPress="1">
   <key name="4"/>
  </action>
  <action name="v_changeseat5" onPress="1">
   <key name="5"/>
  </action>
  <action name="v_changeview" onPress="1">
   <key name="f1"/>
   <key name="${getButton('vehicle', 'v_changeview', 'xi_thumbr')}"/>
  </action>
  <action name="v_zoom_in" onPress="1">
   <key name="mwheel_up"/>
  </action>
  <action name="v_zoom_out" onPress="1">
   <key name="mwheel_down"/>
  </action>
  <action name="v_lights" onPress="1" onRelease="1">
   <key name="l"/>
   <key name="${getButton('vehicle', 'v_lights', 'xi_thumbl')}"/>
  </action>
  <action name="v_horn" onPress="1" onRelease="1">
   <key name="h"/>
   <key name="${getButton('vehicle', 'v_horn', 'xi_b')}"/>
  </action>
  <action name="v_rotateyaw">
   <key name="maxis_x"/>
  </action>
  <action name="v_rotatepitch">
   <key name="maxis_y"/>
  </action>
  <action name="v_changeseat" onPress="1">
   <key name="${getButton('vehicle', 'v_changeseat', 'xi_y')}"/>
  </action>
  <action name="xi_v_movey">
   <key name="xi_thumbly"/>
  </action>
  <action name="xi_v_movex">
   <key name="xi_thumblx"/>
  </action>
 </actionmap>
 <actionmap name="vtol" version="${version}">
  <action name="v_rotatepitch" always="1">
   <key name="maxis_y"/>
  </action>
  <action name="v_moveforward" onPress="1" onRelease="1" retriggerable="1">
   <key name="w"/>
  </action>
  <action name="v_moveback" onPress="1" onRelease="1" retriggerable="1">
   <key name="s"/>
  </action>
  <action name="v_moveup" onPress="1" onRelease="1">
   <key name="space"/>
   <key name="${getButton('vtol', 'v_moveup', 'xi_a')}"/>
  </action>
  <action name="v_movedown" onPress="1" onRelease="1">
   <key name="lctrl"/>
   <key name="${getButton('vtol', 'v_movedown', 'xi_b')}"/>
  </action>
  <action name="v_rotatedir" always="1">
   <key name="maxis_x"/>
  </action>
  <action name="v_strafeleft" onPress="1" onRelease="1" onHold="1">
   <key name="a"/>
  </action>
  <action name="v_straferight" onPress="1" onRelease="1" onHold="1">
   <key name="d"/>
  </action>
  <action name="v_rollleft" onPress="1" onRelease="1" onHold="1">
   <key name="q"/>
  </action>
  <action name="v_rollright" onPress="1" onRelease="1" onHold="1">
   <key name="e"/>
  </action>
  <action name="v_boost" onPress="1" onRelease="1" retriggerable="1">
   <key name="lshift"/>
   <key name="${getButton('vtol', 'v_boost', 'xi_shoulderl')}"/>
  </action>
 </actionmap>
</ActionMaps>`
}
