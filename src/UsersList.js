import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  return (
    <>
      {data && data.map((user) => {
        return(
          <div key={user.id}><strong>{user.name}</strong></div>
        )
      })}
    </>
  );
};

// Calling High Order Component
const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
