const FloatingActions = () => {
  return (
    <div className="flex flex-col fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50" >
      <button className="bg-white border shadow-md p-3 rounded-full">🚑</button>
      <button className="bg-white border shadow-md p-3 rounded-full">📅</button>
      <button className="bg-white border shadow-md p-3 rounded-full">🛏️</button>
      <button className="bg-white border shadow-md p-3 rounded-full">🆔</button>
    </div>
  )
}

export default FloatingActions
