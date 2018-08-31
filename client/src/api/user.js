import { httpPost } from '@/utils/http'

export function register (data) {
  return httpPost('/api/register', data)
}
