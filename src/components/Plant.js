import React from 'react';

const Plant = React.createClass({
  render() {
    const { plant } = this.props;
    return (
      <div>
        Im a plant!
      </div>
    )
  }
})

export default Plant;
