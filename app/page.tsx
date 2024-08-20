import TodoForm from "./components/todoForm";
import Todos from "./components/Todos";


interface Props{
  searchParams: {sortOrder: string}
}

export default function Home({searchParams:{sortOrder}}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 p-24">
       <TodoForm/>
       <Todos sortOrder={sortOrder}/>
    </main>
  );
}
