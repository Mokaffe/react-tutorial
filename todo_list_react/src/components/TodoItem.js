import React from 'react'

// class TodoItem extends React.Component {
//     render() {
//         var task = this.props.task;
//         return (
//             <li>
//                 <input type="checkbox" />{task}
//             </li>
//         );
//     }
// }

const TodoItem = props => {
    return (
        <li>
            <input type="checkbox" />{props.task}
        </li>
    );
}

export default TodoItem;