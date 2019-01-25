import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header'
import TodoList from '../content/TodoList'
import RoadLearn from '../content/RoadLearn'
import FormValidation from '../content/FormValidation'
import NotFoundPage from '../../components/common/404'
import CustomiseOption from '../ReactSelect/CustomiseOption'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Header}/>
                            <Route exact path='/react-select' component={CustomiseOption}/>
                            <Route exact path='/form_validation' component={FormValidation}/>
                            <Route exact path='/todo_list_react' component={TodoList} />
                            <Route exact path='/todo_list_react_redux' component={TodoList} />
                            <Route exact path='/road_to_learn_react/:chapterNumber' component={RoadLearn} />
                            <Route exact path='/404' component={NotFoundPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;