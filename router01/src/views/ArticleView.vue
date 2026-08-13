<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
defineProps({
    id: {
        type: String,
        default: '-1'
    }
})
</script>

<template>
    <div>
        <h2>文章詳情</h2>
        <p>文章 ID: {{ route.params.id }}</p>
        <p>目前路徑: {{ route.path }}</p>
        <p>查詢參數: {{ route.query.b }}</p>
        <p>屬性傳遞路由參數 ID: {{ id }}</p>
        <p>{{ route.name }}</p>
        <p>{{ route.meta }}</p>
        <nav>
            <RouterLink :to="{ name: 'article', params: { id: 1 } }">文章 1</RouterLink>
            <RouterLink :to="{ name: 'article', params: { id: 2 } }">文章 2</RouterLink>
            <RouterLink :to="{ name: 'article', params: { id: 3 } }">文章 3</RouterLink>

        </nav>
    </div>
</template>

<style scoped></style>