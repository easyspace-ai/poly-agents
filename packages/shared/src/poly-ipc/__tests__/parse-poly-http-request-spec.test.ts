import { describe, expect, it } from 'bun:test'
import { parsePolyHttpRequestSpec } from '../index'

describe('parsePolyHttpRequestSpec', () => {
  it('accepts minimal GET /api/...', () => {
    const r = parsePolyHttpRequestSpec({ path: '/api/health' })
    expect(r.ok).toBe(true)
    if (r.ok) {
      expect(r.value.method).toBe('GET')
      expect(r.value.path).toBe('/api/health')
    }
  })

  it('rejects non-api paths', () => {
    const r = parsePolyHttpRequestSpec({ path: '/internal/x' })
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.reason).toBe('invalid_poly_path')
  })

  it('normalizes method', () => {
    const r = parsePolyHttpRequestSpec({ path: '/api/x', method: 'post' })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.value.method).toBe('POST')
  })
})
