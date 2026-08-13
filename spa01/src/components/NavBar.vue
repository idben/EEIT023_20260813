<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="nav nav-pills">
        <RouterLink class="nav-link" active-class="active" to="/">首頁</RouterLink>
        <RouterLink class="nav-link" active-class="active" to="/about">關於</RouterLink>
        <RouterLink class="nav-link" active-class="active" to="/articles">文章</RouterLink>
    </nav>
</template>

<style scoped></style>