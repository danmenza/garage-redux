import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { removeCar } from '../actions/';

class CarsShow extends Component {
  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    const car = this.props.car;
    if (!car) {
      return (
        <Sidebar key="sidebar" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Sidebar>
      );
    }
    return (
      <Sidebar key="sidebar" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Sidebar>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="/assets/images/logo_square.svg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong>{car.owner}</li>
            </ul>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { removeCar },
    dispatch
  );
}

export default withRouter(connect(mapReduxStateToProps, mapDispatchToProps)(CarsShow));
