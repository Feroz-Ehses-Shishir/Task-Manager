import React from 'react'
import { useDispatch} from 'react-redux';
import { deleteData } from "../store/slice/taskSlice";
import "./List.css"

const List = (props) => {

    const dispatch = useDispatch();

    // console.log("list.js");

    const removeTask = async () => {
        await dispatch(deleteData(props.id));
        props.setReload((prev) => !prev);
    }

    return (
        <div className="list">
            <li>{props.task}</li>
            <button type="submit" onClick={removeTask}>x</button>
        </div>
    )
}

export default List