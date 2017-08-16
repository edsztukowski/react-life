var React = require('react');
var Cell = require('./Cell')

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      grid: [],
      generation: null
    }
    this.renderCells = this.renderCells.bind(this)
  }

  ComponentDidMount() {
    this.renderCells(this.state.size);
  }

  renderCells(size) {
    for (var i = 0; i < size; i++) {
      for (var k = 0; k < size; k++) {
        this.state.grid.push({Cell});
      }
    }
  }

  render() {
    this.renderCells(this.state.size);
    var grid = this.state.grid
    return(
      <div>
      <ul>
        {grid.map(function(curr, index) {
          return(
            <li key={index}>{<Cell />}</li>
          )
        })}
        </ul>
      </div>
    )
  }
}

module.exports = Board;
