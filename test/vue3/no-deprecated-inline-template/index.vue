<template>
    <!-- ✓ GOOD -->
    <my-comnponent />

    <!-- ✗ BAD -->
    <my-component inline-template>
        <div>
            <p>These are compiled as the component's own template.</p>
            <p>Not parent's transclusion content.</p>
        </div>
    </my-component>
</template>
