import { h } from "preact";
import { Suspense } from "preact/compat";
import {
  createFragmentContainer,
  graphql,
  GraphQLTaggedNode,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from "react-relay";
import TodoItem from "./TodoItem";
import type { TodoPageQuery as TodoQueryType } from "./__generated__/TodoPageQuery.graphql";
import type { TodoList_todos$key } from "./__generated__/TodoList_todos.graphql";

// type Props = {
//   todoQueryRef: PreloadedQuery<TodoQueryType>;
//   todoQuery: GraphQLTaggedNode;
// };

const TodoList = (props: {
  todos: TodoList_todos$key;
  updateSelectedItems: any;
  selectedItems: any;
}) => {
  // const data: any = usePreloadedQuery(props.todoQuery, props.todoQueryRef);

  const data = useFragment(
    graphql`
      fragment TodoList_todos on Todos {
        id
        count
        items {
          id
          __id
          ...TodoItem_item
        }
      }
    `,
    props.todos
  );
  console.log("Data in list:", data);

  return (
    <div>
      <p>Total items:{data.count}</p>
      <table style={{ border: "2px solid black", width: "100%" }}>
        <tr>
          <th style={{ borderBottom: "2px solid grey" }}>Select</th>
          <th style={{ borderBottom: "2px solid grey" }}>Item Name</th>
          <th style={{ borderBottom: "2px solid grey" }}>Done?</th>
          <th style={{ borderBottom: "2px solid grey" }}>Toggle Item</th>
          <th></th>
        </tr>
        {/* {props.todos.items.map((todo: any, index: number) => ( */}
        {data.items.map((todo: any, index: number) => (
          <TodoItem
            key={index}
            // id={index}
            todo={todo}
            updateSelectedItems={props.updateSelectedItems}
            selectedItems={props.selectedItems}
          />
        ))}
      </table>
    </div>
  );
};

export default TodoList;
// export default createFragmentContainer(TodoList, {
//   todos: graphql`
//     fragment TodoList_todos on Todos {
//       items {
//         ...TodoItem_item
//       }
//     }
//   `,
// });
