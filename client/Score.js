import React from 'react'
import axios from 'axios'

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
            <table className="sparkle">
              <thead>
                <tr>
                  <th className="left">Player: {user.name}</th>
                  <th className="right">Score: {user.score}</th>
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
        <img width="150" height="150" src="assets/top.png" id="container" />
        {userList}
      </div>
    )
  }
}
