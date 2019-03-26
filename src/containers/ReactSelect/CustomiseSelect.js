import React from 'react'
import CustomiseOption from '../../components/react_select/CustomiseOption';
import GitHubDemo from "../../components/react_select/GitHubDemo";

const DEMO_CONFIG = [
  <GitHubDemo/>,
  <CustomiseOption/>,
];

class CustomiseSelect extends React.Component {
  render() {
    const demoList = DEMO_CONFIG.map(demo => (
      <div style={{marginTop: '50px'}}>
        {demo}
      </div>
    ));
    return (
      <div>
        <h3><a href={'https://github.com/JedWatson/react-select'}>react-select v2</a></h3>
        <p>使用方式参照github repo readme</p>
        <hr/>
        {demoList}

      </div>
    );
  }
}

export default CustomiseSelect;
