<template>
    <!-- ✓ GOOD -->
    {{ filter(msg) }}
    {{ filter(msg, '€') }}
    {{ filterB(filterA(msg)) }}
    <div :id="filter(msg)" />
    <div :id="filter(msg, '€')" />
    <div :id="filterB(filterA(msg))" />

    <!-- ✗ BAD -->
    {{ msg | filter }}
    {{ msg | filter('€') }}
    {{ msg | filterA | filterB }}
    <div :id="msg | filter" />
    <div :id="msg | filter('€')" />
    <div :id="msg | filterA | filterB" />
</template>
