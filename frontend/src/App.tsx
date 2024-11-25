import AddTaskUI from "./components/AddTaskUI";
import TaskCard from "./components/TaskCard";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <h1 className="text-9xl"> Baloyi fanelo</h1>
      <AddTaskUI />
      <SignUpPage />
      <TaskCard
        title={"Attend Yoga"}
        date={"23 November 2023"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores excepturi eligendi tenetur ad debitis quae? Nulla perspiciatis assumenda perferendis molestiae beatae itaque quidem recusandae optio, quam expedita iste eius?"
        }
        tag={"Gym"}
      />
    </>
  );
}

export default App;
