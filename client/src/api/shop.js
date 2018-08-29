import { httpGet } from '@/utils/http'

export function getShop () {
  return httpGet('/getShop')
}
