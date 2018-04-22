import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onCheck, onRemove }) => {
  const todoList = todos.map(todo => (
    <TodoItem
      id={todo.id}
      key={todo.id}
      checked={todo.checked}
      text={todo.text}
      onCheck={onCheck}
      onRemove={onRemove}
    />
  ));
  // 배열에 key 가 설정되어있다면
  // 배열을 그대로 렌더링 할 수도 있습니다 - 리액트 16 기준
  return todoList;
};

export default TodoList;
