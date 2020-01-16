class MoveSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move1: this.props.allPokemon.moves[0].move,
      move2: this.props.allPokemon.moves[1].move,
      move3: this.props.allPokemon.moves[2].move,
      move4: this.props.allPokemon.moves[3].move
    };
  }

  render() {
    return (
      <div>
        <form>
          <select>
            {this.props.allPokemon.moves.map((moveDetails, index) => {
              return (
                <option value={moveDetails.move} key={index}>
                  {moveDetails.move}
                </option>
              );
            })}
          </select>
        </form>
        <div>Dmg:</div>
        <div>PP:</div>
      </div>
    );
  }
}

export default MoveSelection;
