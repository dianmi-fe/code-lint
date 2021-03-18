<template>
    <!-- ✗ BAD -->
    <MyInput v-on="$listeners" />
</template>
<script>
export default {
    computed: {
        listeners() {
            return {
                /* ✗ BAD */
                ...this.$listeners,
                input() {
                    /* */
                }
            }
        }
    }
}
</script>
