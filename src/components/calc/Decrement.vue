<template lang="html">
  <button :class="{active:isActive}" type="button" name="button"  @click="decrement()" @mousedown="start" @mouseleave="stop" @mouseup="stop" @touchstart="start" @touchend="stop" @touchcancel="stop">
    <span> - </span>
  </button>
</template>

<script>
export default {
  props: ["amount", "decrementBy", "min"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    decrement() {
      if (this.amount > this.min) {
        let changedAmount = Math.abs(this.amount - this.decrementBy);
        changedAmount > this.min ? this.$emit("clicked", changedAmount) : this.$emit("clicked", this.min);
      }
    },
    start() {
      if (!this.isActive) {
        this.isActive = setInterval(() => {
          if (this.amount > this.min) {
            let changedAmount = Math.abs(this.amount - this.decrementBy);
            changedAmount > this.min ? this.$emit("clicked", changedAmount) : this.$emit("clicked", this.min);
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

.active {
  background-color: green;
}
</style>