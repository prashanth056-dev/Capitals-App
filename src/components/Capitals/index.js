import './index.css'
import {Component} from 'react'

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

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  displayCapital = event => {
    const elem = countryAndCapitalsList.find(
      each => each.id === event.target.value,
    )
    this.setState({country: elem.country})
    console.log(elem)
  }

  render() {
    const {country} = this.state

    return (
      <div className="mainBg">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="row">
            <select onChange={this.displayCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
