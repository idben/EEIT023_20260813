<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const articles = ref([
    { id: 1, title: 'Vue 3 新手入門', summary: '從零開始學習 Vue 3 的基礎概念' },
    { id: 2, title: '深入 Composition API', summary: '了解 setup、ref、reactive 等核心 API' },
    { id: 3, title: 'Vue Router 完全指南', summary: '掌握 SPA 路由管理的所有技巧' }
])

const dataDisplay = ref('table') // grid/table
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="h1">文章列表</div>
        <div class="btn-group ms-auto">
            <button @click="dataDisplay = 'table'" class="btn btn-primary btn-sm">表格</button>
            <button @click="dataDisplay = 'grid'" class="btn btn-primary btn-sm">卡片</button>
        </div>

    </div>

    <!-- 文章卡片迴圈 -->
    <!-- <div v-if="dataDisplay == 'grid'" class="row gx-1 gy-1 row-cols-1 row-cols-md-3  row-cols-lg-4"> -->
    <div v-if="dataDisplay == 'grid'" class="row gx-1 gy-1 row-cols-2">
        <div class="col" v-for="article in articles" :key="article.id">
            <div class="card card-body h200px">
                <h3>{{ article.title }}</h3>
                <p>{{ article.summary }}</p>
                <RouterLink :to="{
                    name: 'ArticleDetail', params: {
                        id: article.id
                    }
                }" class="btn btn-primary btn-sm">閱讀更多</RouterLink>
            </div>
        </div>
    </div>

    <!-- 文章表格迴圈 -->
    <table v-else-if="dataDisplay == 'table'" class="table table-striped table-hover">
        <thead class="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">標題</th>
                <th scope="col">摘要</th>
                <th class="w100px" scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(article, index) in articles" :key="article.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ article.title }}</td>
                <td>{{ article.summary }}</td>
                <td>
                    <RouterLink :to="{
                        name: 'ArticleDetail', params: {
                            id: article.id
                        }
                    }" class="btn btn-primary btn-sm">閱讀更多</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.h200px {
    height: 200px;
}

.w100px {
    width: 100px;
}
</style>