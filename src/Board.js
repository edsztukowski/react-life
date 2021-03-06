var React = require('react');
var Cells = require('./Cells');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      cols: 10,
      grid: [],
      generation: 0
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
    var generation= this.state.generation;
    setInterval(function(){
      var count = 0;
      for (var i = 1; i < grid.length-1; i++) {
        for (var j = 1; j < grid[i].length-1; j++) {
          count += grid[i-1][j-1];
          count += grid[i-1][j];
          count += grid[i-1][j+1];
          count += grid[i][j-1];
          count += grid[i][j+1];
          count += grid[i+1][j-1];
          count += grid[i+1][j];
          count += grid[i][j+1];
          if (grid[i][j] === 1) {
            if (count < 2 || count > 3 ) {
              grid[i][j] = 0;
            }
          } else {
            if (count === 3) {
              grid[i][j] = 1;
            }
          }
          count=0;
        }
      }
      generation++;
      this.setState(function() {
        return {
          grid: grid,
          generation: generation
        }
      })
    }.bind(this), 1000);
  }

  componentDidMount() {
    this.buildGrid(this.state.rows, this.state.cols);
  }

  render() {
    return(
      <div className="board-container">
        {this.countEm(this.state.grid)}
        <div className="gen-count">
        {this.state.generation}
        </div>
        <div className="grid">
          {this.state.grid}
        </div>
      </div>
    )
  }
}

module.exports = Board;
