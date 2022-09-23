import { h } from "preact";
import {
  createFragmentContainer,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import TodoItem from "./TodoItem";
import type { TodoPageQuery as TodoQueryType } from "./__generated__/TodoPageQuery.graphql";

type Props = {
  todoQueryRef: PreloadedQuery<TodoQueryType>;
};

const TodoList = (props: any) => {
  const data: any = usePreloadedQuery(props.todoQuery, props.todoQueryRef);

  return (
    <table style={{ border: "2px solid black", width: "100%" }}>
      <tr>
        <th style={{ borderBottom: "2px solid grey" }}>Select</th>
        <th style={{ borderBottom: "2px solid grey" }}>Item Name</th>
        <th style={{ borderBottom: "2px solid grey" }}>Done?</th>
        <th style={{ borderBottom: "2px solid grey" }}>Toggle Item</th>
        <th></th>
      </tr>
      {data.todos.map((todo: any, index: number) => (
        <TodoItem
          key={index}
          id={index}
          item={todo}
          updateSelectedItems={props.updateSelectedItems}
          selectedItems={props.selectedItems}
        />
      ))}
    </table>
  );
};

export default TodoList;
