<template>
<router-view></router-view>

</template>

<script>

export default {
  name: 'ARKA BMS',
  mounted() {

    this.$store.dispatch("CheckAuth")



  },
}
</script>

<style>

</style>
