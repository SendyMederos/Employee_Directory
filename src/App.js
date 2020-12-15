import React from "react";
import Wrapper from "./components/Wrapper";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";
import Table from "./components/Table";
import API from "./utils/API";
import { Jumbotron, Container } from 'reactstrap';



class App extends React.Component {
/// there is two arrays in the state one that will always hold the whole arry of objects of our api call 
///and a second one that will be modified to hold a filter array 
  constructor() {
    super();
    this.state = {
      employees: [],
      active: false,
      value:'all',
      allEmployees: [],

    };

    this.handleOptionFilter = this.handleOptionFilter.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }
 /// setting the employee state to the value of our API call
  componentDidMount() {
    API.search()
      .then(res => res.data.results.map(result => (
        {
          lastName: `${result.name.last}`,
          firstName: `${result.name.first}`,
          state: result.location.state,
          city: result.location.city,
          cell: result.cell,
          email: result.email,
          id: res.data.results.indexOf(result) + 1
        })))
      .then(newData => { 
        this.setState({ allEmployees: newData, employees: newData });
        console.log(newData)
        console.log(this.state.allEmployees)
      })
      .catch(error => alert(error))
  }
  
  handleFilter(event) {
    console.log(this.state.value)
      switch (this.state.value){
      case "city": return this.setState({ employees: this.state.allEmployees.filter(e => e.city.includes(event.target.value))});
      case "state": return this.setState({ employees: this.state.allEmployees.filter(e => e.state.includes(event.target.value))});
      case "all" : return this.setState({ employees: this.state.allEmployees});
      default: return -1
      }
    }
  
  /// eventhougth it says that an async wont have efect here the rest of the code is execution before setting the state 
  async handleOptionFilter (event) {
    await this.setState({ value: event.target.value , employees: this.state.allEmployees})
    /// setting active to false and then true was the simples way I found to update the variables of the the element FilterList
    await this.setState({ active: false })
    await this.setState({ active: true })
    if (this.state.value === "all") {
      this.setState({ active: false })
    }
    // console.log(this.state.active)
    // console.log(this.state.value)
    // console.log(this.state.allEmployees)
    // console.log(this.state.employees)
  }

  render() {
    return <Wrapper>
      <Jumbotron   >
        <h1 className="text-center"> Employee Directory </h1>
      </Jumbotron>
      <Container>
      <Filter handleOptionFilter={this.handleOptionFilter} value= {this.state.value}/>
      {(this.state.active) ?  
      <FilterList employees={this.state.employees} value = {this.state.value} handleFilter={this.handleFilter}/>: ""}
        <Table
          employees={this.state.employees}
        />
      </Container>
    </Wrapper>


  };
}

export default App;
