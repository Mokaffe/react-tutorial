import React from 'react'
import TodoItem from './TodoItem';

// class TodoList extends React.Component {
//     render() {
//         var taskList = this.props.allTask.map(listItem => {
//             return (
//                 <TodoItem
//                     taskId={listItem.id}
//                     key={listItem.id}
//                     task={listItem.task}
//                     complete={listItem.complete}
//                 />
//             )
//         })

//         return (
//             <ul>
//                 {taskList}
//             </ul>
//         );
//     }
// }

const TodoList = (props) => {
    return (
        <ul>
            {props.allTask.map((listItem, index) => (
                <TodoItem key={index}
                taskId={listItem.id}
                task={listItem.task}
                complete={listItem.complete}
                />
            ))}
        </ul>)
}

export default TodoList;