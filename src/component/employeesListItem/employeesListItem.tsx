import React, { Component } from 'react';
import './employeeListItem.scss';

type EmployeesListItemType = {
  id: string;
  name: string;
  salary: string;
  increase?: boolean;
  deleteItem: (id: string) => void;
};

type StateType = {
  increase: boolean;
  like: boolean;
};

export class EmployeesListItem extends Component<
  EmployeesListItemType,
  StateType
> {
  constructor(props: EmployeesListItemType) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onIncrease = () => {
    console.log('click');

    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  onLikeHandler = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { id, name, salary, deleteItem } = this.props;
    const { increase, like } = this.state;
    return (
      <li
        className={
          'list-group-item d-flex justify-content-between ' +
          `${increase && ' increase '}` +
          `${like && ' like '}`
        }
      >
        <span className="list-group-item-list" onClick={this.onLikeHandler}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={() => deleteItem(id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
