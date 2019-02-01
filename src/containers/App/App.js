import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TodoList from '../content/TodoList'
import RoadLearn from '../content/RoadLearn'
import FormValidation from '../content/FormValidation'
import NotFoundPage from '../../components/common/404'
import CustomiseSelect from '../ReactSelect/CustomiseSelect'
import Header from "../Header";
import Home from "../Home";
import JsNormalQuestionCollection from "../JsNormalQuestionCollection";

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
        <Header/>
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/react-select' component={CustomiseSelect}/>
                <Route exact path='/form_validation' component={FormValidation}/>
                <Route exact path='/todo_list_react' component={TodoList}/>
                <Route exact path='/js-normal-q' component={JsNormalQuestionCollection}/>
                <Route exact path='/todo_list_react_redux' component={TodoList}/>
                <Route exact path='/road_to_learn_react/:chapterNumber' component={RoadLearn}/>
                <Route exact path='/404' component={NotFoundPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
