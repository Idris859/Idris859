import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../src/App'

describe('App', () => {
  it('introduces the Horizon Atlas workspace', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Horizon Atlas' })).toBeInTheDocument()
  })
})
