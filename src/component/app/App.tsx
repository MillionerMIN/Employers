import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AppInfo } from '../appInfo/appInfo';
import { SearchPanel } from '../searchPanel/serchPanel';
import { AppFilter } from '../appFilter/appFilter';
import { EmployeesList } from '../employeesList/employeesList';
import { EmployeesAddForm } from '../employeesAddForm/employeesAddForm';

import './app.scss';
import '../searchPanel/searchPanel.scss';

export type UserType = {
  id: string;
  name: string;
  salary: string;
  increase?: boolean;
};

type AppStateType = {
  data: UserType[];
};

class App extends Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        { id: uuidv4(), name: 'John C.', salary: '1000', increase: false },
        { id: uuidv4(), name: 'Alex B.', salary: '1500', increase: false },
        { id: uuidv4(), name: 'Vladimir L.', salary: '10000', increase: true },
      ],
    };
  }

  addItem = (name: string, salary: string) => {
    const newItem = {
      id: uuidv4(),
      name,
      salary,
      increase: false,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  deleteItem = (id: string) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} deleteItem={this.deleteItem} />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
