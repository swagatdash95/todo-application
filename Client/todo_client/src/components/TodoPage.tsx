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
import Environment from "../Environment";

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
      ...TodoList_todos
    }
  }
`;

// const addItem = graphql`
//   mutation TodoPageMutation($name: String!, $description: String) {
//     addTodo(name: $name, isDone: false, description: $description) {
//       description
//       isDone
//       name
//       todoId
//     }
//   }
// `;

// const addItem = graphql`
//   mutation TodoPageMutation($name: String!, $description: String) {
//     addTodo(name: $name, isDone: false, description: $description) {
//       items {
//         description
//         isDone
//         name
//         todoId
//       }
//     }
//   }
// `;

const addItem = graphql`
  mutation TodoPageMutation($name: String!, $description: String) {
    addTodo(name: $name, isDone: false, description: $description) {
      ...TodoList_todos
    }
  }
`;

const addSelectedItem = graphql`
  mutation TodoPageAddSelectedMutation($todoIds: [UUID!]!) {
    checkSelectedTodos(todoIds: $todoIds) {
      description
      isDone
      name
      todoId
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

const TodoPage = () => {
  const [todoQuery, loadTodoQuery] = useQueryLoader<TodoQueryType>(queryAll);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [selectedItems, setSelectedItems] = useState([] as any);

  const [refetchVal, setRefetchVal] = useState(false);

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
      onCompleted: (response, error) => {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Response:", response);
          console.log(Environment);
          // refreshTodoQuery();
          setRefetchVal(true);
        }
      },
      updater: (store) => {
        console.log("Updater:", store);
        console.log("Root:", store.getRootField);
        console.log("getRoot():", store.getRoot());
        store.invalidateStore();
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
  const renderComponent = ({ error, props, retry }: any) => {
    if (error) {
      return <div>{error.message}</div>;
    } else if (props) {
      const refreshTodoQuery = retry;
      // console.log("Before:", allTodos);
      // setAllTodos(props.todos);
      // console.log("After:", allTodos, typeof allTodos);
      // Object.keys(allTodos).length > 0 ? console.log("Yes") : console.log("No");
      return (
        <div>
          {
            <TodoList
              // todoQueryRef={todoQuery}
              // todoQuery={queryAll}
              todos={props.todos}
              updateSelectedItems={updateSelectedItems}
              selectedItems={selectedItems}
              // refreshTodoQuery={retry}
            />
          }
        </div>
      );
    }
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <QueryRenderer
        environment={Environment}
        query={queryAll}
        variables={{}}
        // variables={{ refetch: refetchVal }}
        render={renderComponent}
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
