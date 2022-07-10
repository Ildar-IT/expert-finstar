<template>
  <v-app>
    <transition name="route" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>
<script>

import Home from '@/views/home'

export default {
  name: 'App',
  components: {
    Home
  }


};
</script>

<style lang="scss">

:root {
  --vh: 1vh;
  --gray: #B3B8CB;
}


html {
  overflow-y: inherit;
  overflow-x: hidden;
}

body {
  overflow: hidden;
  min-width: 320px;
  cursor: default;
  font-family: Avenir, Helvetica, Arial, sans-serif;;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 0;
  margin: 0;
  color: $black;
  @include up($md) {
    font-size: 18px;
  }
  @include up($lg) {
    font-size: 24px;
  }
}




a {
  @include transition();
  &:hover {
    opacity: 0.7;
  }
}

p {
  margin-bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: $black;
}

label {
  font-size: 10px;
  line-height: 13px;


  letter-spacing: -0.02em;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
}


ul {
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    & + li {
      margin-top: 10px;
    }
  }
}


</style>
