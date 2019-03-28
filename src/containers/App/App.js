import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RoadLearn from '../RoadLearn'
import FormValidation from '../Form/FormValidation'
import NotFoundPage from '../../components/common/404'
import CustomiseSelect from '../ReactSelect/CustomiseSelect'
import JsNormalQuestionCollection from "../JsNormalQuestionCollection";
import Home from "../HomePage/Home";
import Header from "../HomePage/Header";

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
                  <Route exact path='/react-select' component={CustomiseSelect}/>
                  <Route exact path='/form_validation' component={FormValidation}/>
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
