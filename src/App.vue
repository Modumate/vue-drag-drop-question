<template>
  <div>
    <HelloWorld msg="Hello World" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
