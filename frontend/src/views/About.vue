<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="down">download</button>
    <a ref="a" href="http://localhost:8087/api/v1/download?name=ext.jpg"></a>
  </div>
</template>
<script>
export default {
  methods: {
    down() {
      this.$refs.a.click()
    }
  }
}
</script>