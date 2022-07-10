import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";

export default function TodoIndexPage({
  setUpdated,
  allTodos,
  setAllTodos,
  allCats,
  activeCat,
  updated,
}) {
  return (
    <>
      <div className="pt-6 flex">
        <div className="flex flex-col justify-start overflow-y-hidden">
          <div className="px-8 justify-start">
            <h1 className=" font-semibold px-2 text-3xl text-left text-2xl bg-[#f7f7f2] text-lg border-b-[1px] border-black pb-1">
              <i className="fa-solid fa-list-check mt-1.5 text-orange-400"></i>
              &nbsp; To-Do's
            </h1>
          </div>
          <div className="flex w-[80vw]">
            <div>
              <TodoList
                allTodos={allTodos}
                setAllTodos={setAllTodos}
                activeCat={activeCat}
                setUpdated={setUpdated}
                updated={updated}
              />
            </div>
            <div>
              <TodoListForm setUpdated={setUpdated} allCats={allCats} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
