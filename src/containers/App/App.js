import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header'
import ContentList from '../content/ContentList'
import TodoList from '../content/TodoList'
import RoadLearn from '../content/RoadLearn'
import FormValidation from '../content/FormValidation'
import NotFoundPage from '../../components/common/404'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path='/' component={ContentList} />
                            <Route path='/form_validation' component={FormValidation}/>
                            <Route path='/todo_list' component={TodoList} />
                            <Route path='/road_to_learn_react/:chapterNumber' component={RoadLearn} />
                            <Route path='/404' component={NotFoundPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;