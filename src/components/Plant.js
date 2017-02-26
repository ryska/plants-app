import React from 'react';

const Plant = React.createClass({
  render() {
    const { plantID } = this.props;
    const { i } = this.props.plant.findIndex( (plant) => plant.id === plantID);

    const plant = this.props.plant[i];

    return (
      <div>
        Im a plant!
        console.log({plant});
      </div>
    )
  }
})

export default Plant;
