<template>
  <div class="layout">
    <header>Header</header>
    <section>
      <aside>SideBar</aside>
      <main>
        <address-view />
      </main>
    </section>
    <footer>Footer</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddressView from '../components/AddressView.vue'

export default defineComponent({
  components: { AddressView }
})
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
.layout {
  width: 100%;
  height: 100%;
  header,
  footer {
    height: 7%;
    padding: 0.5em;
    background: #07242d;
    color: white;
  }
  section {
    height: 86%;
    width: 100%;
    display: flex;
    flex-direction: row;
    aside {
      width: 15%;
      padding: 0.5em;
      background: #183278;
      color: white;
    }
    main {
      width: 85%;
    }
  }
}
</style>
