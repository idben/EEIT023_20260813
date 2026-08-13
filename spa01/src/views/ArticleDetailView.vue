<script setup>
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const router = useRouter()

watchEffect(() => {
    console.log("執行一次: " + props.id);
    // 利用 watchEffect 立即執行一次的特性
    // 來呼叫 API 從資料庫抓取網頁需要用的資料
    // fetch
})
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="h1">文章 id {{ id }} 的標題</div>
        <button @click="router.back()" class="btn btn-primary btn-sm ms-auto">返回上一頁</button>
    </div>

    <p>文章 id {{ id }} 的詳細內容</p>
    <!-- 詳細內容: 進入頁面的時候, 透過 api 即時抓取 -->
</template>

<style scoped></style>