<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h2>使用者中心</h2>
        <nav>
            <RouterLink to="/user">個人資料</RouterLink>
            <RouterLink to="/user/posts">我的文章</RouterLink>
            <RouterLink to="/user/settings">設定</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>

<style scoped></style>