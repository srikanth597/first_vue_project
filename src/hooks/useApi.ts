import { ref } from 'vue'
import { Address } from './useAddress'
export default function useApi(
  url: RequestInfo,
  options?: RequestInit | undefined
) {
  const response = ref<Address[]>([])
  const request = async () => {
    const res = await fetch(url, options)
    const data = await res.json()
    response.value = data
  }
  return { response, request }
}
