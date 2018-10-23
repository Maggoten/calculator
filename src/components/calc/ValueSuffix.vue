<template lang="html">
  <input :readonly="true" name="input" v-model="valueAndsuffix" @input="valueAndsuffix" type="text"></input>
</template>

<script>
export default {
  props: ["value"],
  computed: {
    valueAndsuffix() {
      let valueAndSuffix = this.value;
      return valueAndSuffix;
    }
  }
};
</script>

<style lang="css">
</style>