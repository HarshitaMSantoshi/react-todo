import React from "react";
import EmptyTodo from "../../assets/images/empty_todo.svg";
import styles from "./style.module.css";

const Body = ({ todoList }) => {
  return (
    <div
      className={`${styles.bodyContainer} ${
        todoList.length > 0 ? "" : styles.emptyBody
      }`}
    >
      {todoList.length === 0 && (
        <div className={styles.emptyContainer}>
          <img src={EmptyTodo} alt="empty-todo" />
          <p className={styles.emptyContainerMainText}>
            Hurray, no pending tasks!
          </p>
          <p className={styles.emptyContainerSubText}>Add a new task below</p>
        </div>
      )}
      {todoList.length > 0 &&
        todoList.map((el, index) => (
          <div key={index} className={`${styles.todoItem} ${styles.todoActive}`}>
            <input
              className={styles.toggle}
              type="checkbox"
            />
            {el.text}
          </div>
        ))}
    </div>
  );
};

export default Body;
