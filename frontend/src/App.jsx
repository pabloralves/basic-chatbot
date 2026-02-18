import { useState } from 'react'
import StarsBackground from './StarsBackground.jsx'

const API_BASE = 'http://localhost:8000'

export default function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    const question = input.trim()
    if (!question) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Please ask a question!' },
      ])
      return
    }

    setLoading(true)
    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')

    try {
      const res = await fetch(`${API_BASE}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const data = await res.json()
      const responseText = data.response ?? 'No response received.'
      setMessages((prev) => [...prev, { role: 'assistant', text: responseText }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `Error: ${err.message}` },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setMessages([])
    setInput('')
  }

  return (
    <div className="app-bg">
      <StarsBackground />
      <div className="app-panel">
        <div className="app">
          <h1>Minimal Chatbot</h1>
          <div className="messages" role="log">
            {messages.length === 0 && !loading && (
              <p className="placeholder">Type a question and click Send.</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`message message-${msg.role}`}>
                <span className="role">{msg.role === 'user' ? 'You' : 'DEMO CHATBOT'}</span>
                <p>{msg.text}</p>
              </div>
            ))}
            {loading && (
              <div className="message message-assistant loading">
                <span className="role">DEMO CHATBOT</span>
                <p>Thinking...</p>
              </div>
            )}
          </div>
          <div className="input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              disabled={loading}
              aria-label="Question"
            />
            <button type="button" onClick={handleSend} disabled={loading}>
              Send
            </button>
            <button type="button" onClick={handleClear} disabled={loading}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
