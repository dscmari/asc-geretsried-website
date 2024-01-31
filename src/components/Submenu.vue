<template>
    <div class="absolute left-0 top-0 border border-ascBlue lg:w-full opacity-90 bg-ascBlue" v-if="isOpen" @mouseenter="isOpen = true"
        @mouseleave="isOpen = false">
        <ul class="text-white p-4 text-xl lg:flex lg:w-full lg:p-0 lg:pl-4">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: Boolean
    }
}
</script>