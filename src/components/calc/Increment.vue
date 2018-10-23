<template lang="html">
  <button :class="{active:isActive}" type="button" name="button" @click="increment()" @mousedown="start" @mouseleave="stop" @mouseup="stop" @touchstart="start" @touchend="stop" @touchcancel="stop">
    <span> + </span>
  </button>
</template>

<script>
export default {
  props: ["amount", "incrementBy", "max"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    increment() {
      if (this.amount < this.max) {
        let changedAmount = Math.abs(
          parseInt(this.amount) + parseInt(this.incrementBy)
        );
        changedAmount < this.max ? this.$emit("clicked", changedAmount) : this.$emit("clicked", this.max);
      }
    },
    start() {
      if (!this.isActive) {
        this.isActive = setInterval(() => {
          if (this.amount < this.max) {
            let changedAmount = Math.abs(
              parseInt(this.amount) + parseInt(this.incrementBy)
            );
            changedAmount < this.max ? this.$emit("clicked", changedAmount) : this.$emit("clicked", this.max);
          }
        }, 150);
      }
    },
    stop() {
      clearInterval(this.isActive);
      this.isActive = false;
    }
  }
};
</script>

<style lang="css">
.active{
  background-color: green;
}
</style>
