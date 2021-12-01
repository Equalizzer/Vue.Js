<template>
  <div>
    <p>This is child component</p>
    <small>{{ number }}</small>
    <button @click="sendParent">send to parent</button>

  </div>
</template>

<script>
export default {
    props: [
      'number'
    ],
  methods: {
      sendParent(){
        return this.$emit('dataSended', 'hey')
      }
  }
}
</script>

<style scoped>

</style>
