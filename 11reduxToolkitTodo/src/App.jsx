import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Todo List with Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
