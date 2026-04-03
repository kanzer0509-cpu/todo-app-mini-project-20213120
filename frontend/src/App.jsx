import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/todos"; // 백엔드 주소를 변수로 저장함

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (error) {
      console.error("목록 불러오기 실패:", error);
    }
  };

  const addTodo = async () => {
  if (!title.trim()) 
    return;

  try {
    await axios.post(API_URL, { title });
    setTitle("");
    fetchTodos();
  } 
  catch (error) {
    console.error("추가 실패:", error);
  }
};
  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        completed: !completed,
      });
      fetchTodos();
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  } catch (error) {
    console.error("삭제 실패:", error);
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border p-2 rounded"
            type="text"
            placeholder="할 일을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 rounded"
            onClick={addTodo}
          >
           추가 
          </button>
        </div>

        <ul>
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">없음</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo._id}
                className="flex items-center gap-2 border-b py-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo._id, todo.completed)}
                  />
                  <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
              </div>
              
              <button
                className="text-red-500"
                onClick={() => deleteTodo(todo._id)}
              >
                삭제
              </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;