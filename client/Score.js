import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/scores')
    const tenData = data.slice(0, 10)
    this.setState({scores: tenData})
  }

  render() {
    const scoreList = this.state.scores
    const userList = scoreList.length ? (
      scoreList.map(user => {
        scoreList.push(user.score)
        return (
          <div className="container" key={user.id}>
            <table className="scroll">
              <thead>
                <tr>
                  <th>Player {user.name}</th>
                  <th>Score {user.score}</th>
                </tr>
              </thead>
            </table>
          </div>
        )
      })
    ) : (
      <div> No scores yet </div>
    )
    return (
      <div className="container" id="scroll">
        <button
          className="btn waves-effect pink lighten-1"
          type="submit"
          onClick={() => this.props.history.push('/')}
        >
          Play Again
        </button>
        <h1>Top 10</h1>
        {userList}
      </div>
    )
  }
}
