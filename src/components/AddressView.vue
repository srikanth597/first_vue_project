<template>
  <div class="container">
    <div class="header">
      <h1>Addresses</h1>
      <button @click="addNewAddress()">Add address</button>
    </div>
    <div class="list">
      <address-item
        v-for="(item, index) in items"
        :key="index"
        :address="item"
        :index="index"
        @refreshList="refreshAddress"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, ref, inject, Ref } from 'vue'
import { useRouter } from 'vue-router'
import useAddress, { Address } from '../hooks/useAddress'
import { addItemToStorage } from '../hooks/useStorage'

import AddressItem from './AddressItem.vue'

export default defineComponent({
  components: { AddressItem },

  setup() {
    const items = ref<Address[]>([])
    const isLoggedIn = inject<Ref>('isLoggedIn')
    const router = useRouter()
    async function refreshAddress() {
      const { address } = await useAddress()
      items.value = address.value
    }
    function addNewAddress() {
      addItemToStorage()
      refreshAddress()
    }
    onMounted(async () => {
      if (isLoggedIn?.value) {
        refreshAddress()
      } else {
        console.log('Not Logged In')
        router.replace('/')
      }
    })
    return { items, refreshAddress, addNewAddress }
  }
})
</script>

<style lang="scss">
.container {
  height: 100%;
  width: 100%;
  .header {
    height: 5%;
    display: flex;
    justify-content: space-between;

    h1 {
      margin: 0;
    }
    button {
      border-radius: 0.25em;
      background: #08b1d5;
      color: white;
      border: 2px solid #08b1d5;
      outline-color: #08b1d5;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .list {
    display: flex;
    height: 95%;
    max-width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: space-evenly;
  }
}
</style>
