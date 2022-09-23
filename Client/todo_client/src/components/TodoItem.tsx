import { h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  QueryRenderer,
  graphql,
  PreloadedQuery,
  useQueryLoader,
  useMutation,
} from "react-relay";
import type { TodoItemDeleteMutation } from "./__generated__/TodoItemDeleteMutation.graphql";
import type { TodoItemToggleMutation } from "./__generated__/TodoItemToggleMutation.graphql";

const deleteItemQuery = graphql`
  mutation TodoItemDeleteMutation($todoId: UUID!) {
    deleteTodo(todoId: $todoId) {
      isDone
      name
      todoId
      description
    }
  }
`;

const toggleItemQuery = graphql`
  mutation TodoItemToggleMutation($todoId: UUID!) {
    checkTodo(todoId: $todoId) {
      isDone
      name
      todoId
      description
    }
  }
`;

const TodoItem = (props: any) => {
  const [commitMutation, isMutationInFlight] =
    useMutation<TodoItemDeleteMutation>(deleteItemQuery);

  const [commitToggleMutation, isToggleMuationInFlight] =
    useMutation<TodoItemToggleMutation>(toggleItemQuery);

  const removeItem = () => {
    commitMutation({
      variables: {
        todoId: props.item.todoId,
      },
    });
    alert("Item '" + props.item.name + "' deleted!");
  };

  const toggleItem = () => {
    commitToggleMutation({
      variables: {
        todoId: props.item.todoId,
      },
    });
    alert("Item '" + props.item.name + "' status changed!");
  };

  const selectItem = () => {
    props.updateSelectedItems(props.item.todoId);
  };

  return (
    <tr className="item">
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={
            props.selectedItems.includes(props.item.todoId) ? true : false
          }
          id={"select-" + props.id}
          onChange={selectItem}
        ></input>
      </td>
      <td style={{ textAlign: "center" }}>{props.item.name}</td>
      <td style={{ textAlign: "center" }}>
        {props.item.isDone ? "Yes" : "No"}
      </td>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={props.item.isDone}
          id={"check" + props.id}
          onChange={toggleItem}
        ></input>
      </td>
      <td
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={removeItem}
      >
        <FontAwesomeIcon icon={faTrash} color="#a80505" />
      </td>
    </tr>
  );
};

export default TodoItem;
