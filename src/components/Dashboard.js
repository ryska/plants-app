import React from 'react';
import { Link } from 'react-router';
import Plant from './Plant';

const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Plants Dashboard</Link>
          { this.props.}
        </h1>
      </div>
    )
  }
})

export default Dashboard;
