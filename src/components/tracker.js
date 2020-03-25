import React, { Component } from 'react';
import Select from './select';
import Display from './display';

class Tracker extends Component {
    constructor(props) {
        super();
        this.state = {
            countries: [],
            country: 'India',
            deaths: '',
            confirmed: '',
            recovered: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const url1 = `https://covid19.mathdro.id/api/countries`;
        const res = await fetch(url1);
        const dataCountries = await res.json();
        const keys = dataCountries.countries;
        this.setState({
            countries: keys
        });
        this.changeCountry(this.state.country);
        console.log(this.state.countries)
    }
    async changeCountry(value) {
        let url = `https://covid19.mathdro.id/api/countries/${value}`;
        const response = await fetch(url);
        if(response.status === 404) {
            this.setState({
                deaths: 'no data', 
                confirmed: 'no data', 
                recovered: 'no data'
        })
        } else {
            const data = await response.json();
            this.setState({
                deaths: data.deaths.value,
                confirmed: data.confirmed.value,
                recovered: data.recovered.value
            });
        }
    }

    async handleChange(e) {
        e.preventDefault();
        this.setState({country: e.target.value});
        this.changeCountry(e.target.value);
    }

    render() {
        const options = this.state.countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)
        return (
            <div className='container'>
                <Select data={options} handleChange={this.handleChange}/>
                <Display {...this.state}/>
            </div>
        );
    }
}

export default Tracker;