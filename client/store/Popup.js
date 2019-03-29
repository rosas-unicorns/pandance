// import React from 'react';
// import axios from 'axios';
//
// export default class Popup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       scores: []
//     }
//   }
//
//   async componentDidMount() {
//     const {data} = await axios.get('/api/scores')
//     const tenData = data.slice(0, 10)
//     this.setState({scores: tenData})
//   }
//
//   render() {
//     const scoreList = this.state.scores
//     const userList
//     return (
//       <div id="myModal" class="modal">
//         <span id="close">close</span>
//         const userList = scoreList.length ? (
//           scoreList.map(user => {
//             return (
//               <div className="container" key={user.id}>
//               <table>
//               <thead>
//               <tr>
//               <th className="left">Player: {user.name}</th>
//               <th className="right">Score: {user.score}</th>
//               </tr>
//               </thead>
//               </table>
//               </div>
//             )
//           })
//         ) : (
//           <div> No scores yet </div>
//         )
//       </div>
//     )
//   }
// }
