import React, {useState,useEffect} from "react";
import List from "./components/List";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, postData } from "./store/slice/taskSlice";
import "./App.css";

 function App() {

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.task.list);
   
  const [input,setInput] = useState("");
  const [reload,setReload] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch,reload]);

  const addTask = async () => {
    await dispatch(postData({task:input}));
    setInput("");
    // setReload((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Add Task</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="btn" type="submit" onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks?.map((x) => (
          <List key={x._id} id={x._id} task={x.task} setReload={setReload}></List>
        ))}
      </ul>
    </div>
  );
}

export default App;
