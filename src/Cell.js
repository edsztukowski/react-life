var React = require('react');

//Cells either alive or dead
//Any live cell with less than 2 live neighbors dies
//Any cell with 2 or 3 live neighbors lives to next generation
//Any cell with 4 or more neighbors dies
//Any dead cell with exactly 3 live neighbors becomes alive
//Each cell has 8 neighbors at any time

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'dead'
    }
  }

  render() {
    return (
      <div className="cell">
      </div>
    )
  }



}

module.exports = Cell
