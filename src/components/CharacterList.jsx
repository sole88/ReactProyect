import { get } from "../utils/conexionAPI"
import { useEffect, useState } from "react"
import { Character } from "./Character"

export const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true) //por si la velocidad de internet es lenta muestro loading

    useEffect(() => {
        get("/characters").then((data) => {
            console.log(data.items)
            setCharacters(data.items);
            setLoading(false);
        });
    }, [])
    return (
        <div className="container-center">
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) : (
                <div className="row">
                    <div className="=col-md-4">
                        {characters.map((character) => (
                            <Character key={character.id} characterMap={character} />
                        ))}</div>
                </div>
            )}

        </div>
    );
}

