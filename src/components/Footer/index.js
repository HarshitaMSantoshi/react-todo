import React, { Component } from "react";
import styles from "./style.module.css";

class Footer extends Component {
  state = {
    currentTodo: ""
  }
  id = 0;

  setCurrentTodo = e => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  onTodoSave = () => {
    const { currentTodo } = this.state;
    const { onSave } = this.props;
    if(currentTodo.trim().length === 0)
    {
      return;
    }
    const obj = {
      id: this.id,
      text: currentTodo,
      isCompleted: false
    };
    this.id++;
    onSave(obj);
    this.setState({
      currentTodo: ""
    })
  }

  onKeyDown = e => {
    if (e.keyCode !== 13) {
      return;
    }
    e.preventDefault();
    this.onTodoSave();
  }

  render() {
    const { currentTodo } = this.state;
    return (
      <div className={styles.footerContainer}>
        <input
          type="text"
          value={currentTodo}
          className={styles.todoInput}
          placeholder="Add new task..."
          onChange={this.setCurrentTodo}
          onKeyDown={this.onKeyDown}
        />
        <button
          className={styles.todoSubmitButton}
          onClick={this.onTodoSave}
          disabled={currentTodo.trim().length <= 0}
        >
          +
        </button>
      </div>
    );
  }
}

export default Footer;