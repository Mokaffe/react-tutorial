import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RoadLearn from '../RoadLearn'
import NotFoundPage from '../../components/common/404'
import JsNormalQuestionCollection from "../JsNormalQuestionCollection";
import Home from "../HomePage/Home";
import Header from "../HomePage/Header";
import RcForm from "../Form/RcForm";
import ReactSelect from "../ReactSelect/ReactSelect";
import ReactJsonSchemaForm from "../ReactJsonSchemaForm/ReactJsonSchemaForm";
import AnotherJsonSchemaValidator from "../AnotherJsonSchemaValidator";
import JoiValidation from "../JoiValidation";

const style = {
  mainPage: {
    width: '960px',
    margin: '0px auto'
  }
};

class App extends React.Component {
  render() {
    return (
      <div style={style.mainPage}>
        <Router>
          <div>
            <Header/>
            <div>
              <div>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/joi' component={JoiValidation}/>
                  <Route exact path='/ajv_another_json_schema_validator' component={AnotherJsonSchemaValidator}/>
                  <Route exact path='/react_jsonschema_form' component={ReactJsonSchemaForm}/>
                  <Route exact path='/react-select' component={ReactSelect}/>
                  <Route exact path='/rc_form' component={RcForm}/>
                  <Route exact path='/js-normal-q' component={JsNormalQuestionCollection}/>
                  <Route exact path='/road_to_learn_react/:chapterNumber' component={RoadLearn}/>
                  <Route exact path='/404' component={NotFoundPage}/>
                  <Route component={NotFoundPage}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
