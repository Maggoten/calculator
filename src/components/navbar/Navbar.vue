<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <button @click="navigateToCalc()" type="button" name="button" class="btn btn-primary"> Calculator <i class="fas fa-calculator"></i></button>
        <button @click="navigateToHome()" type="button" name="button" class="btn btn-primary"> Home <i class="fas fa-home"></i></button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome(){
      this.$router.push({path: '/'});
    },
    navigateToCalc(){
      this.$router.push({path: '/calc'});
    }
  }
}
</script>

<style lang="css">
</style>
