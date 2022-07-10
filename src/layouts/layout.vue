<template>
  <div class="layout-main">
    <main>
      <transition name="route" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>

export default {
  name: "layout",

}
</script>

<style lang="scss">

</style>
