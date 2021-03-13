import useApi from './useApi'
import { ref } from 'vue'
import { getStorage, setStorage } from './useStorage'
export interface Address {
  address1: string
  city: string
  postalCode: number
  state: string
  edited?: boolean
}
export default async function useAddress() {
  const addressList: Address[] = getStorage()
  if (addressList.length > 0) {
    console.log('From cache')
    const address = { value: [] as Address[] }
    address.value = addressList
    return { address }
  } else {
    console.log('Fresh List')
    const { response: address, request } = useApi(
      'http://localhost:8000/addresses'
    )
    const loaded = ref(false)
    if (loaded.value === false) {
      await request()
      setStorage(address.value)
      loaded.value = true
    }

    return { address }
  }
}
