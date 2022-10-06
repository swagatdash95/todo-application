import { h } from "preact";
import { Suspense } from "preact/compat";
import {
  QueryRenderer,
  graphql,
  PreloadedQuery,
  useQueryLoader,
  useMutation,
  usePreloadedQuery,
  Environment as env,
  Disposable,
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
  query TodoPageQuery($id: UUID!) {
    todos(id: $id) {
      ...TodoList_todos
    }
  }
`;

const addItem = graphql`
  mutation TodoPageMutation($input: AddTodoInput!) {
    addTodo(values: $input) {
      count
      id
      items {
        description
        isDone
        name
        id
      }
    }
  }
`;

// const addItem = graphql`
//   mutation TodoPageMutation($name: String!, $description: String) {
//     addTodo(name: $name, isDone: false, description: $description) {
//       items {
//         description
//         isDone
//         name
//         id
//       }
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
//         id
//       }
//     }
//   }
// `;

// const addItem = graphql`
//   mutation TodoPageMutation($name: String!, $description: String) {
//     addTodo(name: $name, isDone: false, description: $description) {
//       ...TodoList_todos
//     }
//   }
// `;

const addSelectedItem = graphql`
  mutation TodoPageAddSelectedMutation($todoIds: [UUID!]!) {
    checkSelectedTodos(todoIds: $todoIds) {
      description
      isDone
      name
      id
    }
  }
`;

const deleteSelectedItems = graphql`
  mutation TodoPageDeleteSelectedMutation($todoIds: [UUID!]!) {
    deleteSelectedTodos(todoIds: $todoIds) {
      description
      isDone
      name
      id
    }
  }
`;
type Props = {
  initialQueryRef: PreloadedQuery<TodoQueryType>;
};

const TodoPage = (props: any) => {
  const [todoQuery, loadTodoQuery] = useQueryLoader<TodoQueryType>(
    queryAll,
    props.initialQueryRef
  );
  const [newItemName, setNewItemName] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [selectedItems, setSelectedItems] = useState([] as any);

  const [refetchVal, setRefetchVal] = useState(false);
  // function callBackMutation(
  //   environment: env,
  //   config: type.MutationConfig<TodoPageAddSelectedMutation>
  // ): Disposable {
  //   console.log("Hello!");
  // }

  const [commitAddMutation, isAddMutationInFlight] =
    useMutation<TodoPageMutation>(addItem);
  const [commitSelectedAddMutation, isSelectedAddMutationInFlight] =
    useMutation<TodoPageAddSelectedMutation>(addSelectedItem);
  const [commitDeletSelectedMutation, isDeleteSelectedMutationInFlight] =
    useMutation<TodoPageDeleteSelectedMutation>(deleteSelectedItems);

  useEffect(() => {
    loadTodoQuery(
      { id: "cfb2eb2c-d5cd-4aba-b03f-537f6f95440c" },
      { fetchPolicy: "store-or-network" }
    );
    console.log("loadQuery Executed!");
  }, []);

  const callAddMutation = () => {
    console.log("Before:", Environment.getStore());
    commitAddMutation({
      variables: {
        input: {
          id: "cfb2eb2c-d5cd-4aba-b03f-537f6f95440c",
          name: newItemName,
          description: newItemDesc ? newItemDesc : "",
        },
      },
      onCompleted: (response, error) => {
        console.log("Response Caught!!");
        if (error) {
          console.log("Error:", error);
        } else {
          // console.log("Response:", response);
          console.log("After:", Environment.getStore());
          // refreshTodoQuery();
          setRefetchVal(true);
        }
      },
      updater: (store) => {
        var newVal = store.getRootField("addTodo");
        var oldVal = store.get("client:root:todos");
        console.log(" Updated items:", newVal.getLinkedRecords("items"));
        // console.log("Previous Items:", oldVal.getLinkedRecords("items"));
        console.log(store.get("client:root:todos"));
        // console.log("Updater:", store);
        // store.invalidateStore();
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
    return <div>TodoQuery is null</div>;
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
  // const renderComponent = ({ error, props, retry }: any) => {
  //   if (error) {
  //     return <div>{error.message}</div>;
  //   } else if (props) {
  //     return (
  //       <div>
  //         {
  //           <TodoList
  //             todos={props.todos}
  //             updateSelectedItems={updateSelectedItems}
  //             selectedItems={selectedItems}
  //           />
  //         }
  //       </div>
  //     );
  //   }
  // };
  const data = usePreloadedQuery(queryAll, todoQuery);
  console.log("Data here!!", data);

  return (
    <div className="todo-page">
      {/* <QueryRenderer
        environment={Environment}
        query={queryAll}
        variables={{}}
        // variables={{ refetch: refetchVal }}
        render={renderComponent}
      /> */}

      <TodoList
        todos={data.todos}
        // todoQueryRef={todoQuery}
        // todoQuery={queryAll}
        updateSelectedItems={updateSelectedItems}
        selectedItems={selectedItems}
        // todos={props.todos}
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
            console.log("Inside Callback:", Environment.getStore());
            if (newItemName) {
              callAddMutation();
            }
          }}
          style={{ width: "20%" }}
        >
          Add Item
        </button>
      </p>
    </div>
  );
};

export default TodoPage;
