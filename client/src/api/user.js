import { httpPost } from '@/utils/http'
import { baseURL } from '@/config/index'
export function register (data) {
  return httpPost(baseURL + '/apis/user/register', data)
}
