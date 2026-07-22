const isBrowser = typeof window !== 'undefined'

export function getStorageItem<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback

  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : fallback
  } catch {
    return fallback
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  if (!isBrowser) return

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Silently fail when storage is unavailable
  }
}

export function removeStorageItem(key: string): void {
  if (!isBrowser) return
  localStorage.removeItem(key)
}
