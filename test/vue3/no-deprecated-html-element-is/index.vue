<template>
    <!-- ✓ GOOD -->
    <div />
    <component :is="foo" />

    <!-- ✗ BAD -->
    <div is="foo" />
    <div :is="foo" />
</template>
