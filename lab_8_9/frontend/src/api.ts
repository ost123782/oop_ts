import axios from 'axios'

const baseURL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:3000'

export const api = axios.create({ baseURL })

export interface ResultRow {
  id: string
  lab: 'lab8' | 'lab9'
  operation: string
  title: string | null
  inputs: Record<string, unknown>
  output: Record<string, unknown>
  createdAt: string
}

export const fetchResults = (lab?: string) =>
  api.get<ResultRow[]>('/results', { params: lab ? { lab } : {} }).then((r) => r.data)

export const deleteResult = (lab: 'lab8' | 'lab9', id: string) =>
  api.delete(`/results/${lab}/${id}`).then((r) => r.data)

export interface GenerateNumbersInput {
  fileName: string
  min: number
  max: number
  count: number
}

export const generateNumbers = (input: GenerateNumbersInput) =>
  api.post('/lab8/numbers/generate', input).then((r) => r.data)

export const readNumbers = (fileName: string) =>
  api.post('/lab8/numbers/read', { fileName }).then((r) => r.data)

export type FormulaVariant =
  | 'ohm'
  | 'kinetic-energy'
  | 'projectile-height'
  | 'pressure-column'
  | 'work'

export const calculateFormula = (
  variant: FormulaVariant,
  inputs: Record<string, number>,
) =>
  api
    .post('/lab9/formula/calculate', { variant, inputs })
    .then((r) => r.data)
