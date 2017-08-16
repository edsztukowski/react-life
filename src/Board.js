var React = require('react');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 50,
      grid: [],
      generation: null
    }
    this.buildGrid = this.buildGrid.bind(this)
  }

  buildGrid(rows) {
    var newGrid = []
    for (var i = 0; i < rows; i++) {
      newGrid[i] = []
    }
    this.setState(function() {
      return {
        grid: newGrid
      }
    })
  }

  ComponentDidMount() {
    this.buildGrid(50);
  }

  render() {
    return(
      <div>
        {this.state.grid}
      </div>
    )
  }
}

module.exports = Board;
