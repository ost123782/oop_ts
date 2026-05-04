import { useMemo, useState } from 'react'
import { calculateFormula } from '../api'
import type { FormulaVariant } from '../api'

interface VariantSpec {
  value: FormulaVariant
  title: string
  formula: string
  fields: { key: string; label: string; placeholder?: string }[]
}

const VARIANTS: VariantSpec[] = [
  {
    value: 'ohm',
    title: 'Закон Ома',
    formula: 'I = U / R',
    fields: [
      { key: 'u', label: 'Напруга U, В' },
      { key: 'r', label: 'Опір R, Ом' },
    ],
  },
  {
    value: 'kinetic-energy',
    title: 'Кінетична енергія',
    formula: 'Wₖ = m·v² / 2',
    fields: [
      { key: 'm', label: 'Маса m, кг' },
      { key: 'v', label: 'Швидкість v, м/с' },
    ],
  },
  {
    value: 'projectile-height',
    title: 'Максимальна висота польоту',
    formula: 'hmax = (v₀·sin α)² / (2g)',
    fields: [
      { key: 'v0', label: 'Початкова швидкість v₀, м/с' },
      { key: 'alpha', label: 'Кут α, °' },
    ],
  },
  {
    value: 'pressure-column',
    title: 'Тиск стовпа рідини',
    formula: 'p = ρ·g·h',
    fields: [
      { key: 'rho', label: 'Густина ρ, кг/м³' },
      { key: 'h', label: 'Висота h, м' },
    ],
  },
  {
    value: 'work',
    title: 'Робота сили',
    formula: 'A = F·S',
    fields: [
      { key: 'f', label: 'Сила F, Н' },
      { key: 's', label: 'Шлях S, м' },
    ],
  },
]

export function Lab9Form() {
  const [variant, setVariant] = useState<FormulaVariant>('ohm')
  const [values, setValues] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [last, setLast] = useState<unknown>(null)

  const spec = useMemo(
    () => VARIANTS.find((v) => v.value === variant)!,
    [variant],
  )

  function setField(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const inputs: Record<string, number> = {}
      for (const f of spec.fields) {
        inputs[f.key] = Number(values[f.key] ?? 0)
      }
      const res = await calculateFormula(variant, inputs)
      setLast(res)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="card">
      <h2>Lab 9 — Physics formulas</h2>
      <p className="hint">
        Вибери варіант обчислення, введи дані — мікросервіс рахує, результат
        зберігається в БД і миттєво з'являється у всіх відкритих вкладках.
      </p>
      <form onSubmit={handleSubmit} className="grid">
        <label>
          Варіант
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as FormulaVariant)
              setValues({})
            }}
          >
            {VARIANTS.map((v) => (
              <option key={v.value} value={v.value}>
                {v.title} — {v.formula}
              </option>
            ))}
          </select>
        </label>
        {spec.fields.map((f) => (
          <label key={f.key}>
            {f.label}
            <input
              type="number"
              step="any"
              value={values[f.key] ?? ''}
              onChange={(e) => setField(f.key, e.target.value)}
              required
            />
          </label>
        ))}
        <div className="row">
          <button type="submit" disabled={busy}>
            Обчислити &amp; зберегти
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
