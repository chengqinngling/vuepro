<template>
  <div class="home">
    <img src="@/assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FooterBar focus="Home"/>
    <TestVuex  msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import FooterBar from "@/components/FooterBar.vue";
import TestVuex from "@/components/TestVuex.vue";


export default {
  name: 'home',
  components: {
    // HelloWorld,
    FooterBar,
    TestVuex
  }
}
</script>
