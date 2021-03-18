<template>
    <!-- ✓ GOOD -->
    <CoolInput @keydown.enter="onKeydownEnter" />

    <!-- ✗ BAD -->
    <CoolInput @keydown.enter.native="onKeydownEnter" />
</template>
