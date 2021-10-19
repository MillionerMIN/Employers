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
  rise?: boolean;
};

type AppStateType = {
  data: UserType[];
};

class App extends Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          name: 'John C.',
          salary: '1000',
          increase: false,
          rise: false,
        },
        {
          id: uuidv4(),
          name: 'Alex B.',
          salary: '1500',
          increase: false,
          rise: true,
        },
        {
          id: uuidv4(),
          name: 'Vladimir L.',
          salary: '10000',
          increase: true,
          rise: false,
        },
      ],
    };
  }

  addItem = (name: string, salary: string) => {
    const newItem = {
      id: uuidv4(),
      name,
      salary,
      increase: false,
      rise: false,
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

  onToggleIncrease = (id: string) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) =>
          item.id === id ? { ...item, increase: !item.increase } : item
        ),
      };
    });
  };

  onToggleRise = (id: string) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) =>
          item.id === id ? { ...item, rise: !item.rise } : item
        ),
      };
    });
  };

  render() {
    const { data } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={data}
          deleteItem={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
