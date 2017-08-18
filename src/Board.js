var React = require('react');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 3,
      cols: 40,
      grid: [],
      generation: null
    }
    this.buildGrid = this.buildGrid.bind(this);
    this.countEm = this.countEm.bind(this);
  }

  buildGrid(rows, cols) {
    var newGrid = []
    for (var i = 0; i < rows; i++) {
      newGrid[i] = []
    }
    //randomize grid array with 1s and 0s
    for (var j = 0; j < rows; j++) {
	        for (var k = 0; k < cols; k++) {
	            newGrid[j][k] = Math.round(Math.random());
	        }
	    }
    this.setState(function() {
      return {
        grid: newGrid
      }
    })
  }

  countEm(grid) {
    var count = 0;
    for (var i = 1; i < grid.length; i++) {
      for (var j = 1; i < grid[i].length; j++) {
        count += grid[i-1][j-1];
        count += grid[i-1][j];
        count += grid[i-1][j+1];
        count += grid[i][j-1];
        count += grid[i][j+1];
        count += grid[i+1][j-1];
        count += grid[i+1][j];
        count += grid[i][j+1];
        console.log(count);
      }

    }

  }

  componentDidMount() {
    this.buildGrid(this.state.rows, this.state.cols);
  }

  render() {
    return(
      <div className="board-container">
        {this.countEm(this.state.grid)}
      </div>
    )
  }
}

module.exports = Board;
