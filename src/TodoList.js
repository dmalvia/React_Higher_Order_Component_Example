import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  return (
    <>
      {data && data.map((todo) => {
        return(
          <div key={todo.userId}><strong>{todo.title}</strong></div>
        )
      })}
    </>
  );
};

// Calling High Order Component
const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
