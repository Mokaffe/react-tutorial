import React from 'react'
import CustomiseOption from '../../components/react_select/CustomiseOption';
import GitHubDemo from "../../components/react_select/GitHubDemo";
import OnChangeDemo from "../../components/react_select/OnChangeDemo";
import SingleSelect from "../../components/react_select/SingleSelect";

const DEMO_CONFIG = [
  {title: 'GitHub Page Demo' ,component: <GitHubDemo/>},
  {title: 'Customise Options' ,component: <CustomiseOption/>},
  {title: 'OnChange Demo' ,component:<OnChangeDemo/>},
  {title: 'Single Select & Adjust Style' ,component:<SingleSelect/>},
];

class CustomiseSelect extends React.Component {
  render() {
    const demoList = DEMO_CONFIG.map(demo => (
      <div style={{marginTop: '50px'}}>
        <div style={{margin: '10px'}} >{demo.title}</div>
        {demo.component}
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
