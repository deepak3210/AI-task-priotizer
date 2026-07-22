/**
 * Mock API utilities — simulates network latency.
 * Replace service implementations with fetch/RTK Query in later phases.
 */
import { API_DELAY_MS } from '@/constants'

export class MockApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number = 500) {
    super(message)
    this.name = 'MockApiError'
    this.statusCode = statusCode
  }
}

export async function mockDelay(ms: number = API_DELAY_MS.MEDIUM): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export async function mockFetch<T>(data: T, delayMs?: number): Promise<T> {
  await mockDelay(delayMs)
  return data
}
