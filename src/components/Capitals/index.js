import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {currentValue: CustomElementRegistry.id}

  selectButtonClicked = () => {
    console.log('hello')
  }

  render() {
    const {currentValue} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>

          <select
            onChange={this.selectButtonClicked}
            className="my-select"
            id="mySelect"
          >
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id}>{eachItem.capitalDisplayText}</option>
            ))}
          </select>
          <label htmlFor="mySelect">is capital of which country</label>
          <p className="country-name">India</p>
        </div>
      </div>
    )
  }
}

export default Capitals
