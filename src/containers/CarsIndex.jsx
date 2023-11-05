import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { fetchCars } from '../actions/';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    if (this.props.car.length === 0) {
      return [
        <Sidebar key="sidebar" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </Sidebar>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Sidebar key="sidebar" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Sidebar>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src="assets/images/logo_square.svg" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsIndex);
