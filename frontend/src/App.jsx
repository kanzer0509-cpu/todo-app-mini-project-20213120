import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos"; // 백엔드 주소를 변수로 저장함

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (error) {
      console.error("목록 불러오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <ul>
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">없음</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo._id}
                className="flex items-center gap-2 border-b py-2"
              >
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.title}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;