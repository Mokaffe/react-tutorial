import React from 'react'
import CustomiseOption from '../../components/react_select/CustomiseOption';
import GitHubDemo from "../../components/react_select/GitHubDemo";
import OnChangeDemo from "../../components/react_select/OnChangeDemo";
import RedocContainer from "../../components/react_select/RedocTry";
import Test from "../../components/react_select/Test";

const DEMO_CONFIG = [
  {id: 1, title: 'GitHub Page Demo' ,component: <GitHubDemo/>},
  {id: 2, title: 'Customise Options' ,component: <CustomiseOption/>},
  {id: 3, title: 'OnChange Demo' ,component:<OnChangeDemo/>},
  {id: 4, title: 'Single Select & Adjust Style' ,component:<RedocContainer/>},
  {id: 5, title: 'test tmp' ,component:<Test/>},
];

class ReactSelect extends React.Component {
  render() {
    const demoList = DEMO_CONFIG.map(demo => (
      <div key={demo.id} style={{marginTop: '50px'}}>
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

export default ReactSelect;
