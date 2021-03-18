<template>
    <!-- ✓ GOOD -->
    <MyComponent v-model:prop-name="foo" />

    <!-- ✗ BAD -->
    <MyComponent :prop-name.sync="foo" />
</template>
