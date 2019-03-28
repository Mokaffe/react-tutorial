import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class GitHubDemo extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti
        // defaultMenuIsOpen={true}
        classNamePrefix={"mokaffe"}
      />
    );
  }
}

export default GitHubDemo;
