import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { createCar } from '../actions/';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    return [
      <Sidebar key="sidebar" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Sidebar>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay" />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="plate" type="text" placeholder="007" component="input" className="form-control" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
}

function mapReduxStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapReduxStateToProps, { createCar })(CarsNew)
);
