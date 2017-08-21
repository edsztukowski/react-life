var React = require('react');

class Cells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridCells: this.props.grid
    }
  }

  render() {
    return (
      <div>Test!</div>
    )
  }
}

module.exports = Cells;
