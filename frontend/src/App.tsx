import AddTask from "./components/AddTask";
import AddTaskUI from "./components/AddTaskUI";
import EditTask from "./components/EditTask";
import UserInfo from "./components/UserInfo";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <h1 className="text-9xl"> Baloyi fanelo</h1>
      <AddTask/>
      <EditTask/>
      <UserInfo/>
      <AddTaskUI />
      <SignUpPage />
    </>
  );
}

export default App;
