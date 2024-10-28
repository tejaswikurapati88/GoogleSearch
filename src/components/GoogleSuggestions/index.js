// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  showoptions = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestItem = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(
      each =>
        each.suggestion.toLowerCase().includes(searchInput) ||
        each.suggestion.toUpperCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          className="googleLogo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="input-container">
          <div className="inp-cont">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.showoptions}
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul className="ul-cont">
            {searchResult.map(eachItem => (
              <SuggestionItem
                itemDetails={eachItem}
                suggestItem={this.suggestItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
