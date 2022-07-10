import * as usersService from "../../utilities/users-service";
import NoteList from "../.././components/NoteList/NoteList";
import TodoList from "../.././components/TodoList/TodoList";
import * as todoAPI from "../../utilities/todos-api";
import * as catAPI from "../../utilities/categories-api";
import * as noteAPI from "../../utilities/notes-api";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import NoteHorizontal from "../../components/NoteHorizontal/NoteHorizontal";
import TodoHorizontal from "../../components/TodoHorizontal/TodoHorizontal";
import { Link } from "react-router-dom";

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
              <a className="text-2xl font-extralight">Notes</a>
              &nbsp;&nbsp;&nbsp;
              <a>
                <Link to={`/notes`}>
                  <button className="text-orange-400 bg-[#1f1f1f] items-end font-medium py-1 px-2 rounded-lg hover:ring hover:ring-orange-400 float-right">
                    <i className="fa-solid fa-plus mb-1"></i>&nbsp; Note
                  </button>
                </Link>
              </a>
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
          <div className="font-light text-left h-1/2 px-2 pt-2 border-[#1f1f1f] overflow-hidden">
            <div>
              <a className="text-2xl font-extralight">To-Do's</a>
              &nbsp;&nbsp;&nbsp;
              <a>
                <Link to={`/todos/new`}>
                  <button className="text-orange-400 bg-[#1f1f1f] items-end font-medium py-1 px-2 rounded-lg hover:ring hover:ring-orange-400 float-right">
                    <i class="fa-solid fa-plus mb-1"></i>&nbsp; To-Do
                  </button>
                </Link>
              </a>
            </div>
            <div className="overflow-auto">
              <TodoHorizontal
                allTodos={allTodos}
                setAllTodos={setAllTodos}
                setUpdated={setUpdated}
                activeCat={activeCat}
              />
            </div>
          </div>
        </div>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      </div>
    </>
  );
}
