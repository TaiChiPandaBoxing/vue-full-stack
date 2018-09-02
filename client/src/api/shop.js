import { httpGet } from '@/utils/http'
import { shopURL } from '@/config/index'
export function getShop () {
  return httpGet(shopURL + '/getShop')
}
