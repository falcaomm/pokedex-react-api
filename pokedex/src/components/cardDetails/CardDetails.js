
function CardDetails(props) {

    const { pokeDetail } = props

    return (
        <div>
            <img src={pokeDetail.sprites?.front_default} alt={pokeDetail.name} />
        </div>
    );
}

export default CardDetails;
