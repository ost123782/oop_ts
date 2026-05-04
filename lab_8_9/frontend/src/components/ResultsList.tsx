import { useEffect, useState } from 'react'
import { deleteResult, fetchResults } from '../api'
import type { ResultRow } from '../api'
import { socket } from '../socket'

export function ResultsList() {
  const [items, setItems] = useState<ResultRow[]>([])
  const [filter, setFilter] = useState<'all' | 'lab8' | 'lab9'>('all')
  const [connected, setConnected] = useState(socket.connected)

  useEffect(() => {
    let alive = true
    fetchResults().then((rows) => {
      if (alive) setItems(rows)
    })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    function onConnect() {
      setConnected(true)
    }
    function onDisconnect() {
      setConnected(false)
    }
    function onCreated(row: ResultRow) {
      setItems((prev) => [row, ...prev.filter((r) => r.id !== row.id)])
    }
    function onDeleted({ id }: { id: string }) {
      setItems((prev) => prev.filter((r) => r.id !== id))
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('result.created', onCreated)
    socket.on('result.deleted', onDeleted)
    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('result.created', onCreated)
      socket.off('result.deleted', onDeleted)
    }
  }, [])

  const visible =
    filter === 'all' ? items : items.filter((r) => r.lab === filter)

  async function handleDelete(lab: 'lab8' | 'lab9', id: string) {
    await deleteResult(lab, id)
  }

  return (
    <section className="card">
      <header className="results-header">
        <h2>Live results</h2>
        <span className={`badge ${connected ? 'ok' : 'bad'}`}>
          {connected ? 'WS connected' : 'WS offline'}
        </span>
      </header>
      <div className="row">
        <label>
          Filter:&nbsp;
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
          >
            <option value="all">all</option>
            <option value="lab8">lab8</option>
            <option value="lab9">lab9</option>
          </select>
        </label>
        <span className="muted">{visible.length} entries</span>
      </div>
      <ul className="results">
        {visible.map((r) => (
          <li key={r.id} className={`result result-${r.lab}`}>
            <div className="result-head">
              <strong>[{r.lab}]</strong> {r.title ?? r.operation}
              <span className="muted">
                {new Date(r.createdAt).toLocaleString()}
              </span>
              <button className="link" onClick={() => handleDelete(r.lab, r.id)}>
                delete
              </button>
            </div>
            <details>
              <summary>payload</summary>
              <pre>
                {JSON.stringify({ inputs: r.inputs, output: r.output }, null, 2)}
              </pre>
            </details>
          </li>
        ))}
        {visible.length === 0 && <li className="muted">No results yet.</li>}
      </ul>
    </section>
  )
}
