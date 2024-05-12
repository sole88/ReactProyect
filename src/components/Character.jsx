export const Character = ({character}) => {
    return (
        <div className="text-center p-5">
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} style={{height: '500px'}} />
        </div>
    );
}

