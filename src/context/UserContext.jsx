import axios from "axios";
import { Root } from "postcss";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const url = "https://6628965454afcabd07363977.mockapi.io/test";

  const deleteItem = (id) => {
    axios.delete(`${url}/${id}`);
  };

  useEffect(() => {
    axios.get(url).then((result) => setData(result.data));
  }, []);

  let test = "salom";
  return <UserContext.Provider value={{data,deleteItem,setData}}>{children}</UserContext.Provider>;
};

export default UserProvider;