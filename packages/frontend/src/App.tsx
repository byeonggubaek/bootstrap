import { useEffect, useState } from 'react'
import { greet, type ApiResponse } from 'shared'
import 'bootstrap/dist/css/bootstrap.min.css';  // ← 여기에 추가
import { Button } from 'react-bootstrap';       // react-bootstrap만

function App() {
  const [data, setData] = useState<ApiResponse<string> | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Button variant="primary">Bootstrap 동작 확인!</Button>
      <h1 className="text-3xl font-bold mb-8">{greet('ESM Frontend')}</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default App
