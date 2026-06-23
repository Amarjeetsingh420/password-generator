const Slider = ({ length, setLength }) => {
  return (
    <div className="mt-4 mb-4">

         <h2 className="font-bold">Length: {length}</h2>

      <input
        type="range"
        min="4"
        max="32"
        className="w-full accent-blue-500 mt-2"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
        <div className="flex justify-between">
          <span className="text-slate-400">4</span>
          <span className="text-slate-400">32</span>
        </div>
    </div>
  )
}

export default Slider