<template>
  <div class="item">
    <div class="header">
      <h1>{{ address.address1 }}</h1>
    </div>
    <div class="description">
      <div class="data">
        <p>{{ address.address1 }}</p>
        <p>{{ address.city }}</p>
        <p>{{ address.state }}</p>
        <p>{{ address.postalCode }}</p>
      </div>
      <div class="actions">
        <a class="edit" @click="handleEdit()">
          <img src="@/assets/icons8-edit.svg" alt="" srcset="" />
          Edit
        </a>
        <a class="delete" @click="handleDelete()">
          <img src="@/assets/icons8-remove.svg" alt="" srcset="" />
          Delete
        </a>
        <h4 v-show="address.edited" class="status">(Edited)</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Address } from '../hooks/useAddress'
import { defineComponent, PropType } from 'vue'
import { deleteItemFromStorage, updateStorage } from '../hooks/useStorage'
export default defineComponent({
  props: {
    address: Object as PropType<Address>,
    index: { type: Number, required: true }
  },

  setup(props, { emit }) {
    function handleEdit() {
      console.log('Editing....')
      updateStorage(props.index, 'edited', 'true')
      emit('refreshList')
    }
    function handleDelete() {
      console.log('Deleting....')
      deleteItemFromStorage(props.index)
      emit('refreshList')
    }
    return { handleEdit, handleDelete }
  }
})
</script>
<style lang="scss" scoped>
.item {
  margin: 0.25em;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 25%;
  width: 20%;
  border: 1px solid #08b1d5;
  box-shadow: 1px 0px 5px 0px;
  border-radius: 0.25em;
  .header {
    height: 20%;
    border: 2px solid #08b1d5;
    margin: 0;
    background: #08b1d5;
    color: white;
  }
  .description {
    display: flex;
    justify-content: space-between;
    .data {
      p {
        margin: 0.25em;
      }
    }
    .actions {
      display: flex;
      flex-direction: column;
      margin: 0.25em;
      a {
        margin: 0.2em;
        display: block;
        text-align: center;
        color: #08b1d5;
        cursor: pointer;
        text-decoration: none;
        display: inherit;
      }
      .edit {
        color: #08b1d5;
      }
      .delete {
        color: #ff445f;
      }
      .status {
        margin: 0.25em;
      }
    }
  }
}
</style>
