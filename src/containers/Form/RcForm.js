import React, {Component} from 'react';
import RcFormValidate from "../../components/rc_form/RcFormValidate";

const DEMO_CONFIG = [
    {id: 1, title: 'GitHub Page Demo' ,component: <RcFormValidate/>},
];

class RcForm extends Component {

    render() {
        const demoList = DEMO_CONFIG.map(demo => (
          <div key={demo.id} style={{marginTop: '50px'}}>
              <div style={{margin: '10px'}} >{demo.title}</div>
              {demo.component}
          </div>
        ));

        return (
          <div>
              <h3><a href={'https://github.com/react-component/form'}>rc-form</a></h3>
              <p>使用方式参照github repo readme</p>
              <hr/>
              {demoList}
          </div>
        );
    }
};

export default RcForm;
