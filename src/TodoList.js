import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import * as actions from "./redux/actions";
import { connect } from "react-redux";



 
    let formattedTodos = todos.map((todo, index) => (
      <ListItem dense button key={index} onClick={() => toggleCompleted(index)}>
        <Checkbox checked={todo.completed} />
        <ListItemText primary={todo.value} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteTodo(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

    return <List>{formattedTodos}</List>;
  };

  const mapStateToProps = ({ todoReducer }) => {
      const { todos } = todoReducer;
      return todos;
  }

  export default connect(
      mapStateToProps,
      actions
  )(TodoList)

  
