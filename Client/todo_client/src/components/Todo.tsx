import { h } from "preact";
import { Suspense } from "preact/compat";
import { useState, useEffect } from "preact/hooks";
import {
  createFragmentContainer,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import type { TodoQuery as TodoQueryType } from "./__generated__/TodoQuery.graphql";

const queryAllTodos = graphql`
  query TodoQuery {
    todos {
      isDone
      name
      todoId
    }
  }
`;

type Props = {
  todoQueryRef: PreloadedQuery<TodoQueryType>;
};
const TodoComponent = ({ todoQueryRef }: Props) => {
  const data: any = usePreloadedQuery(queryAllTodos, todoQueryRef);

  return (
    <div>
      {data.todos.map((todo: any, index: number) => {
        return <div key={index}>{todo.name}</div>;
      })}
    </div>
  );
};

const Todo = () => {
  const [todoQuery, load] = useQueryLoader<TodoQueryType>(queryAllTodos);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    load({});
  }, []);

  if (todoQuery == null) {
    return null;
  }

  // setTodos(data)

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <TodoComponent todoQueryRef={todoQuery} />
    </Suspense>
  );
};

export default Todo;
