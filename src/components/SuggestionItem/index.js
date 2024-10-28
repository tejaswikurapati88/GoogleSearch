// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {itemDetails, suggestItem} = this.props
    const {suggestion} = itemDetails
    const showSuggestion = () => {
      suggestItem(suggestion)
    }
    return (
      <li>
        <div className="Item-cont">
          <p>{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            onClick={showSuggestion}
            alt="arrow"
          />
        </div>
      </li>
    )
  }
}
export default SuggestionItem
