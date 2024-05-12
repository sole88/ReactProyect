export const Character = ({characterMap}) => {
    return(
        <div className="text-center p-5">
            <h3>{characterMap.name}</h3>
            <img src={characterMap.image} alt={characterMap.name} style={{height: '500px'}} />
        </div>
    );
}

