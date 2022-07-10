import * as usersService from "../../utilities/users-service";
import NoteList from "../.././components/NoteList/NoteList";
import TodoList from "../.././components/TodoList/TodoList";
import * as todoAPI from "../../utilities/todos-api";
import * as catAPI from "../../utilities/categories-api";
import * as noteAPI from "../../utilities/notes-api";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import NoteHorizontal from "../../components/NoteHorizontal/NoteHorizontal";

export default function HomePage({
  user,
  setUpdated,
  allTodos,
  setAllTodos,
  allCats,
  activeCat,
  allNotes,
  setAllNotes,
}) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className="w-screen h-screen px-8 overflow-hidden">
        <h1 className="font-medium text-3xl text-left px-2 pt-6 pb-2 border-[#1f1f1f] border-b-[1px]">
          <i className="fa-solid fa-house text-orange-400"></i>
          &nbsp; Hello, {user.name}!
        </h1>
        <div className="h-[85%]">
          <div className="font-light text-left h-1/2 px-2 pt-2 border-[#1f1f1f] border-b-[1px] overflow-hidden">
            <div>
              <h1 className="text-2xl font-extralight">Notes</h1>
            </div>
            <div className="overflow-auto">
              <NoteHorizontal
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                setUpdated={setUpdated}
                allCats={allCats}
                activeCat={activeCat}
              />
            </div>
          </div>
          <div className="font-extralight text-2xl text-left h-1/2 px-2 pt-2">
            <h1>To-Do's</h1>
            {/* <TodoList
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              setUpdated={setUpdated}
              activeCat={activeCat}
            /> */}
          </div>
        </div>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      </div>
    </>
  );
}
