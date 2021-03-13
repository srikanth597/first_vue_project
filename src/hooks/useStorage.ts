import { Address } from './useAddress'
import addresses from '@/assets/mockaddress.json'
export function getStorage() {
  return JSON.parse(localStorage.getItem('addresses') || '[]')
}
export function setStorage(addressList: Address[]) {
  localStorage.setItem('addresses', JSON.stringify(addressList))
}
export function updateStorage(index: number, key: string, value: string) {
  const addressList = getStorage()
  addressList[index][key] = value
  setStorage(addressList)
}
export function deleteItemFromStorage(index: number) {
  const addressList: Address[] = getStorage()
  addressList.splice(index, 1)
  setStorage(addressList)
}
export function addItemToStorage() {
  const addressList: Address[] = getStorage()
  const randIndex = Math.floor(Math.random() * 10)
  console.log(addresses[randIndex])
  addressList.push(addresses[randIndex])
  setStorage(addressList)
}
