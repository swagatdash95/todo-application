import { h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  createFragmentContainer,
  graphql,
  useFragment,
  useMutation,
} from "react-relay";
import type { TodoItemDeleteMutation } from "./__generated__/TodoItemDeleteMutation.graphql";
import type { TodoItemToggleMutation } from "./__generated__/TodoItemToggleMutation.graphql";
import type { TodoItem_item$key } from "./__generated__/TodoItem_item.graphql";

const deleteItemQuery = graphql`
  mutation TodoItemDeleteMutation($id: UUID!) {
    deleteTodo(id: $id) {
      isDone
      name
      id
      description
    }
  }
`;

const toggleItemQuery = graphql`
  mutation TodoItemToggleMutation($id: UUID!) {
    checkTodo(id: $id) {
      isDone
      name
      id
      description
    }
  }
`;

const TodoItem = (props: {
  todo: TodoItem_item$key;
  selectedItems: any;
  updateSelectedItems: any;
}) => {
  const [commitMutation, isMutationInFlight] =
    useMutation<TodoItemDeleteMutation>(deleteItemQuery);

  const [commitToggleMutation, isToggleMuationInFlight] =
    useMutation<TodoItemToggleMutation>(toggleItemQuery);

  const removeItem = () => {
    commitMutation({
      variables: {
        id: data.id,
      },
    });
    alert("Item '" + data.name + "' deleted!");
  };

  const toggleItem = () => {
    commitToggleMutation({
      variables: {
        id: data.id,
      },
    });
    alert("Item '" + data.name + "' status changed!");
  };

  const selectItem = () => {
    console.log("Selected item");
    props.updateSelectedItems(data.id);
  };

  const data = useFragment(
    graphql`
      fragment TodoItem_item on Todo {
        id
        name
        isDone
        description
      }
    `,
    props.todo
  );
  // console.log("data in todo item:", data);
  return (
    <tr className="item">
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={props.selectedItems.includes(data.id) ? true : false}
          // id={"select-" + data.id}
          onChange={selectItem}
        ></input>
      </td>
      <td style={{ textAlign: "center" }}>{data.name}</td>
      <td style={{ textAlign: "center" }}>{data.isDone ? "Yes" : "No"}</td>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={data.isDone}
          // id={"check" + data.id}
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
// export default createFragmentContainer(TodoItem, {
//   item: graphql`
//     fragment TodoItem_item on Todo {
//       id
//       name
//       isDone
//     }
//   `,
// });
