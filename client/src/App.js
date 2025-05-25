import { useEffect, useState } from 'react'

function App() {
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/hello`)
      .then(res => res.json())
      .then(data => setMensagem(data.message + ' (Hora do banco: ' + data.dbTime + ')'))
      .catch(() => setMensagem('Erro ao conectar ao servidor'))
  }, [])

  return (
    <div>
      <h1>Front-end React</h1>
      <p>{mensagem}</p>
    </div>
  )
}

export default App
