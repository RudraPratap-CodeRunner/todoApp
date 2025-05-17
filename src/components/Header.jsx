const Header = ({ input, setInput, addTask }) => {
  return (
    <div>
      <h1 className="text-center font-bold mt-8 mb-5 text-xl md:text-2xl text-blue-500">TODO APP</h1>  
      <div className="flex items-center space-x-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Header;
