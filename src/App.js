import React, { Component } from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";
import covid191 from "./images/covid191.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
