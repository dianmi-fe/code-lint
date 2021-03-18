<template>
    <!-- ✓ GOOD -->
    <div @click="$emit('good')" />
    <!-- ✗ BAD -->
    <div @click="$emit('bad')" />
</template>
<script>
export default {
    emits: ['good']
}
</script>
