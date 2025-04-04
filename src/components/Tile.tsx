import { Icon } from "../models/icon.model"

type TileProps = {
    icon: Icon,
    onSelectTile: (data: string) => void
}

function Tile({ icon, onSelectTile }: TileProps) {

    function selectTile(selectedItem: string) {
        onSelectTile(selectedItem);
    }

    return (
        <>
            <img className="tile-item" src={icon.src} alt={icon.alt} onClick={() => selectTile(icon.alt)} />
        </>
    )
}

export default Tile