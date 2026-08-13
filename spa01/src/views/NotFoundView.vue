<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
    <h1>404 - 找不到頁面</h1>
    <p>路徑 {{ route.path }} - 不存在</p>
    <div class="d-flex">
        <button @click="router.push('/')" class="btn btn-sm btn-primary ms-auto">回首頁</button>
    </div>
</template>

<style scoped></style>