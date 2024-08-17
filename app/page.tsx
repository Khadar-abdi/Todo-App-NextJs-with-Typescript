import TodoForm from "./components/todoForm";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 p-24">
       <TodoForm/>
       <Todos/>
    </main>
  );
}
