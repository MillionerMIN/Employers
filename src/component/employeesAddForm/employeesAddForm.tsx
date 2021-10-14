import React, { Component } from 'react';
import './employeesAddForm.scss';

type StatePropsType = {
  name: string;
  salary: string;
};

export class EmployeesAddForm extends Component<any, StatePropsType> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="What is your name?"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="salary"
            value={salary}
            placeholder="What's your under the $?"
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}
