<template>
    <!-- ✓ GOOD -->
    <input @keyup.page-down="onArrowUp" />
    <input @keyup.9="onArrowUp" />
    <!-- 9 is KeyboardEvent.key -->

    <!-- ✗ BAD -->
    <input @keyup.34="onArrowUp" />
</template>
