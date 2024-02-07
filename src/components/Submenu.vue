<template>
    <div class="absolute left-0 top-0 border border-ascBlue lg:w-full opacity-90 bg-ascBlue"
        v-if="isOpen"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <ul class="text-white p-4 text-xl lg:flex lg:w-full lg:p-0 lg:pl-4">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: Boolean
    },
    methods: {
    handleMouseEnter() {
      // You can perform any additional logic here
      // but do not mutate the prop isOpen
      console.log("handleMouseEnter loaded")
      this.$emit('open-submenu')
      console.log(this.isOpen)
    },
    handleMouseLeave() {
      // You can perform any additional logic here
      // but do not mutate the prop isOpen
      console.log("handleMouseLeave loaded")
      this.$emit('close-submenu');
      console.log(this.isOpen)
    }
  }
}
</script>