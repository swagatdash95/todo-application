import { h } from "preact";
import style from "./style.css";
import Todo from "../../components/Todo";
import TodoPage from "../../components/TodoPage";

const Home = () => (
  <div class={style.home}>
    <h1 style={{ textAlign: "center" }}>Todo Items</h1>
    {/* <Todo /> */}
    <TodoPage />
  </div>
);

export default Home;
