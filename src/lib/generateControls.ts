export function generateControls(version: number): string {
	return `<ActionMaps>
  <actionmap name="debug" version="${version}" />
  <actionmap name="default" version="${version}" />
  <actionmap name="helicopter" version="${version}" />
  <actionmap name="landvehicle" version="${version}" />
  <actionmap name="multiplayer" version="${version}" />
  <actionmap name="seavehicle" version="${version}" />
  <actionmap name="singleplayer" version="${version}" />
  <actionmap name="vehicle" version="${version}" />
  <actionmap name="vtol" version="${version}" />
</ActionMaps>`
}
