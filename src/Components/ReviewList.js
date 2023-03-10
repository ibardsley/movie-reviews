import React, {Component} from 'react';

const TableHeader = () => {
  return (
     <thead>
          <tr>
            <th>Name</th>
            <th>Review</th>
          </tr>
        </thead>
  )
}
const TableBody = props => {
  const rows = props.characterData.map((row, i) => {
    return (
      <tr key={i}>
        <td>{row.name}</td>
        <td>{row.review}</td>
        <td>
          <button onClick={() => props.removeCharacter(i)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {

  render(){
const {characterData, removeCharacter} = this.props;

    return (
      <table>
       <TableHeader />
       <TableBody characterData={characterData} removeCharacter = {removeCharacter} />
      </table>
    )
  }
}

export default Table;