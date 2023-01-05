import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const addedInputItems = []

class CharacterCounter extends Component {
  state = {input: '', isTrue: false}

  getGivenInput = event => {
    this.setState({input: event.target.value})
  }

  submitForm = event => {
    const {input} = this.state
    event.preventDefault()
    const inputs = {
      id: uuidv4(),
      typedInput: input,
    }
    this.setState({isTrue: true, input: ''})

    addedInputItems.push(inputs)
  }

  render() {
    const {input, isTrue} = this.state

    return (
      <div className="app-container">
        <div className="left-container">
          <div className="heading-container">
            <h1 className="left-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {isTrue ? (
            <ul className="unordered-list-container">
              {addedInputItems.map(eachItem => (
                <li key={eachItem.id} className="list-items">
                  <p>{`${eachItem.typedInput} : ${eachItem.typedInput.length}`}</p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              className="image"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.submitForm}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.getGivenInput}
              value={input}
            />

            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
