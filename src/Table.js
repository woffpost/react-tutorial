import React, {Component} from 'react';

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Имя</th>
            <th>Работа</th>
            <th></th>
          </tr>
        </thead>
      );
    }

    const TableBody = props => {
      const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td><button onClick={() => props.removeCharacter(index)}>Стереть</button></td>
          </tr>
        );
      });
      return <tbody>{rows}</tbody>;
    }

    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
