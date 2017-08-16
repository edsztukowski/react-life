var React = require('react');

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
