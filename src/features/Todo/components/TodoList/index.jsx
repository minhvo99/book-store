import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: [],
}
function TodoList({ todoList }) {
    return (
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.id}: {todo.title}</li>
                ))}
            </ul>
    );
}

export default TodoList;