import { h } from "preact";
import { Suspense } from "preact/compat";
import {
  QueryRenderer,
  graphql,
  PreloadedQuery,
  useQueryLoader,
  useMutation,
} from "react-relay";
import { useState, useEffect } from "preact/hooks";
import type { TodoPageQuery as TodoQueryType } from "./__generated__/TodoPageQuery.graphql";
import type { TodoPageMutation } from "./__generated__/TodoPageMutation.graphql";
import type { TodoPageAddSelectedMutation } from "./__generated__/TodoPageAddSelectedMutation.graphql";
import type { TodoPageDeleteSelectedMutation } from "./__generated__/TodoPageDeleteSelectedMutation.graphql";

import TodoList from "./TodoList";

// const RootQuery = graphql`
// query RootQuery {
//     viewer {
//         ...TodoList_viewer
//     }
// }
// `

const queryAll = graphql`
  query TodoPageQuery {
    todos {
      isDone
      name
      todoId
      description
    }
  }
`;

const addItem = graphql`
  mutation TodoPageMutation($name: String!, $description: String) {
    addTodo(name: $name, isDone: false, description: $description) {
      description
      isDone
      name
      todoId
    }
  }
`;

const addSelectedItem = graphql`
  mutation TodoPageAddSelectedMutation($todoIds: [UUID!]!) {
    checkSelectedTodos(todoIds: $todoIds) {
      description
      isDone
      name
    }
  }
`;

const deleteSelectedItems = graphql`
  mutation TodoPageDeleteSelectedMutation($todoIds: [UUID!]!) {
    deleteSelectedTodos(todoIds: $todoIds) {
      description
      isDone
      name
      todoId
    }
  }
`;

type Props = {
  todoQueryRef: PreloadedQuery<TodoQueryType>;
};

const TodoPage = () => {
  const [todoQuery, loadTodoQuery] = useQueryLoader<TodoQueryType>(queryAll);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [selectedItems, setSelectedItems] = useState([] as any);
  const [commitAddMutation, isAddMutationInFlight] =
    useMutation<TodoPageMutation>(addItem);
  const [commitSelectedAddMutation, isSelectedAddMutationInFlight] =
    useMutation<TodoPageAddSelectedMutation>(addSelectedItem);
  const [commitDeletSelectedMutation, isDeleteSelectedMutationInFlight] =
    useMutation<TodoPageDeleteSelectedMutation>(deleteSelectedItems);

  useEffect(() => {
    loadTodoQuery({});
  }, []);

  const callAddMutation = () => {
    commitAddMutation({
      variables: {
        name: newItemName,
        description: newItemDesc ? newItemDesc : "",
      },
    });
    setNewItemDesc("");
    setNewItemName("");
  };

  const callAddItemsMutation = () => {
    console.log("Calling Mutation : 'Toggle Multiple Items'");
    commitSelectedAddMutation({
      variables: {
        todoIds: selectedItems,
      },
    });
    setSelectedItems([]);
  };

  const updateSelectedItems = (itemID: string) => {
    setSelectedItems((prevState: any) => {
      if (prevState.includes(itemID)) return [...prevState];
      return [...prevState, itemID];
    });
  };

  if (todoQuery == null) {
    return null;
  }

  const callDeleteSelectionMutaion = () => {
    console.log("Calling Mutation: 'Delete Selcted Items'");
    if (selectedItems) {
      commitDeletSelectedMutation({
        variables: {
          todoIds: selectedItems,
        },
      });
      setSelectedItems([]);
    }
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <TodoList
        todoQueryRef={todoQuery}
        todoQuery={queryAll}
        updateSelectedItems={updateSelectedItems}
        selectedItems={selectedItems}
      />
      <button
        onClick={callAddItemsMutation}
        style={{
          backgroundColor: "#4CAF50",
          color: "black",
          border: "2px solid #195718",
          width: "60%",
          marginTop: "20px",
          position: "relative",
          left: "20%",
          fontWeight: "bold",
        }}
      >
        Update Selection
      </button>

      <button
        onClick={callDeleteSelectionMutaion}
        style={{
          backgroundColor: "#e10707",
          color: "white",
          border: "2px solid #a80505",
          width: "60%",
          marginTop: "20px",
          position: "relative",
          left: "20%",
          fontWeight: "bold",
        }}
      >
        Delete Selection
      </button>

      <p className="mutation-box" style={{ position: "relative", left: "20%" }}>
        <input
          type="textbox"
          value={newItemName}
          placeholder={"Enter new Item"}
          onChange={(event) => {
            setNewItemName((event.target as HTMLInputElement).value);
          }}
          style={{ width: "20%" }}
        />
        <input
          type="textbox"
          value={newItemDesc}
          placeholder={"Enter Description"}
          onChange={(event) => {
            setNewItemDesc((event.target as HTMLInputElement).value);
          }}
          style={{ width: "20%" }}
        />
        <button
          onClick={(event) => {
            if (newItemName) {
              callAddMutation();
            }
          }}
          style={{ width: "20%" }}
        >
          Add Item
        </button>
      </p>
    </Suspense>
  );
};

export default TodoPage;
