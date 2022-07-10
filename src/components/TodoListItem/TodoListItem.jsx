import { useParams } from "react-router-dom"; //you can import more than one thing at a time
import * as todoAPI from "../../utilities/todos-api";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import * as katyTodo from "../../components/TodoList/TodoList";
import TodoList from "../TodoList/TodoList";
import { Link } from "react-router-dom";

export default function TodoListItem({
  allTodos,
  setAllTodos,
  setUpdated,
  activeCat,
  setActiveCat,
  allCats,
}) {
  // todo here is the state that we - this is the state
  const [todo, setTodo] = useState([]);

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    // time: "",
    // category: "",
    description: "",
    urgency: "",
  });

  const magic = setUpdated();
  // const [activeTodo, setActiveTodo] = useState([]);
  // const [formData, setFormData] = useState({
  //   // add in all the other fields
  //   title: "",
  //   date: "",
  //   time: "",
  //   description: "",
  //   urgency: "",
  // });

  // let { todoName } = useParams();
  // // construct data
  //  const data = katyTodo.getTodos()
  //  console.log(data)

  let { id } = useParams();

  useEffect(
    function () {
      async function getSingleTodos() {
        // let foundTodo = allTodos.filter((todo) => todo._id === id)
        // console.log(foundTodo)
        const foundTodo = await todoAPI.getById(id);
        setTodo(foundTodo);
      }
      getSingleTodos(id);
      setActiveCat(activeCat);
      // important to have the brackets below, otherwise infinate loop
    },
    [id]
  );

  ////////////////
  // CHANGE DATE
  ////////////////

  let date = new Date(todo.date);
  const dateRecord = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  // function clickedTodo(todo) {
  //   let selectedTodo = 0;
  //   // movies goes back to the movie seed data from movie homeowrk. What would we need to call here? that is the param that gets passed down
  //   for (let i = 0; i < props.allTodos.length; i++) {
  //     //need to confirm that the movie we are passing through matches with the correct movie data. like matching id's
  //     if (props.allTodos[i].title === todo) {
  //       selectedTodo = i;
  //     }
  //   }
  //   console.log(selectedTodo);
  //   return selectedTodo;
  // }

  // const chosenTodo = clickedTodo(todoName);

  // //*** function = creating new category ***//
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   //sending new data to backend
  //   const addTodos = await todoAPI.newTodo(formData);
  //   // get data again from the backend
  //   const todos = await todoAPI.getAll();
  //   return setAllTodos(todos);
  // }

  // //*** function = form data ***//
  // function handleChange(evt) {
  //   const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
  //   setFormData(updatedTodo);
  //   console.log(formData);
  //   // setNewTodo(evt.target.value);
  // }
  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData)
    const id = todo._id;
    // console.log(id)
    todoAPI.editTodo(id, formData);
    setUpdated(!magic);

    setFormData({});
  }

  // async function deleteTodo(evt) {
  //   console.log(evt.target.value);
  //   const todos = allTodos.filter((todo) => todo._id !== evt.target.value);
  //   // console.log(todos);
  //   setAllTodos(todos);
  //   await todoAPI.deleteTodo(evt.target.value);
  // }

  function handleChange(evt) {
    const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
  }

  function catFinder(a) {
    // if(activeCat=== undefined || activeCat=== null || activeCat=== ""){
    // let r = allCats.filter((cat) => cat._id === a)
    // console.log(r)
    // return r[0].title
    // }
  }

  //*** function = Edit data ***//
  function handleEditing(evt) {
    setEdit(!edit);
  }

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

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
            <div className="">
              <TodoList
                allTodos={allTodos}
                setAllTodos={setAllTodos}
                setUpdated={setUpdated}
                activeCat={activeCat}
              />
            </div>
            <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] w-96">
              <div
                className="border-black border-[1px] rounded-md mt-4 py-4 px-4 font-light"
                id="hardshadow"
              >
                {/* <form action="" onChange={handleChange}> */}
                {/* title */}
                <h5
                  style={viewMode}
                  className="font-light text-xl border-black border-b-[1px]"
                >
                  {todo.title}{" "}
                </h5>
                <label className="font-extralight text-xl text-2l text-left pt-5">
                  Title
                </label>
                &nbsp;&nbsp;
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  style={editMode}
                  placeholder={todo.title}
                  default
                  onChange={handleChange}
                  className="bg-[#f7f7f2]"
                />
                <p>&nbsp;</p>
                {/* Date */}
                <a className="font-extralight text-lg text-left">Date</a>
                <p style={viewMode} className="font-light text-">
                  {dateRecord}
                </p>
                <input
                  type="date"
                  name="date"
                  style={editMode}
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-[#f7f7f2]"
                />
                <p>&nbsp;</p>
                {/* Category */}
                <label
                  style={viewMode}
                  className="font-extralight text-xl text-2l text-left h-1/2  py-4"
                >
                  {{ activeCat } ? " Category" : ""}
                </label>
                <p style={viewMode}>{activeCat}</p>
                {/* <p style={viewMode}>{catFinder(todo.category)}</p> */}
                {/* <select name="category" value={formData.category} className="font-extralight text-2l text-left h-1/2 px-2 py-4" style={editMode} onChange={handleChange}>

            {allCats.map((cat) => <option value={cat._id} key={cat._id} >{cat.title}</option>)}

          </select>


          <p>&nbsp;</p> */}
                {/* Description */}
                <label className="font-extralight text-xl text-2l text-left pt-5">
                  Description
                </label>
                <p style={viewMode}>{todo.description}</p>
                <input
                  type="text"
                  name="description"
                  className="textInput bg-[#f7f7f2]"
                  style={editMode}
                  placeholder={todo.description}
                  value={formData.description}
                  onChange={handleChange}
                />
                <p>&nbsp;</p>
                {/* Urgency */}
                <label className="font-extralight text-xl text-2l text-left">
                  Urgency
                </label>
                <p style={viewMode}>{todo.urgency}</p>
                <select
                  name="urgency"
                  value={formData.urgency}
                  className="font-extralight text-2l text-left h-1/2 px-2 py-2"
                  style={editMode}
                  onChange={handleChange}
                >
                  <option value="low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <p>&nbsp;</p>
                <button
                  className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2"
                  onClick={handleEditing}
                  style={viewMode}
                >
                  Edit
                </button>
                <button
                  className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400"
                  onClick={handleEditing}
                  style={editMode}
                >
                  Close Edit
                </button>
                <button
                  className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400"
                  type="submit"
                  value={todo._id}
                  style={editMode}
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <link rel="stylesheet" href="http://localhost:3000/todos/new" />
                {/* </form> */}
              </div>

              {/* /* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]"> */}
            </div>
            &nbsp;&nbsp;
            <div className="mt-10">
              <Link to="/todos">
                <button className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400">
                  Go To List Page
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/todos/new">
                <button
                  className="
                bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400
        
        "
                >
                  Create New List
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
