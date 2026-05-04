import { useState } from 'react'
import { generateNumbers, readNumbers } from '../api'

export function Lab8Form() {
  const [fileName, setFileName] = useState('numbers.txt')
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(10)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [last, setLast] = useState<unknown>(null)

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const res = await generateNumbers({ fileName, min, max, count })
      setLast(res)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  async function handleRead() {
    setBusy(true)
    setError(null)
    try {
      const res = await readNumbers(fileName)
      setLast(res)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="card">
      <h2>Lab 8 — Random numbers → file</h2>
      <p className="hint">
        Generates <code>count</code> random integers in <code>[min, max]</code>,
        writes them to a file, then can read them back.
      </p>
      <form onSubmit={handleGenerate} className="grid">
        <label>
          File name
          <input value={fileName} onChange={(e) => setFileName(e.target.value)} required />
        </label>
        <label>
          Min
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </label>
        <label>
          Max
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
        <label>
          Count
          <input
            type="number"
            min={1}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
        <div className="row">
          <button type="submit" disabled={busy}>Generate &amp; save</button>
          <button type="button" onClick={handleRead} disabled={busy}>
            Read file
          </button>
        </div>
      </form>
      {error && <pre className="error">{error}</pre>}
      {last !== null && (
        <pre className="output">{JSON.stringify(last, null, 2)}</pre>
      )}
    </section>
  )
}
