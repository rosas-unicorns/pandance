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
          <h5 key={user.id}>
            <p>{user.name}</p>
            <p>{user.score}</p>
          </h5>
        )
      })
    ) : (
      <div> No scores yet </div>
    )
    return <div>{userList}</div>
  }
}
