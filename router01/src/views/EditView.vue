<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const isSaved = ref(true)
const formData = ref('123')

const handleInput = (event) => {
    formData.value = event.target.value
    isSaved.value = false
}

const save = function () {
    isSaved.value = true
    alert('已儲存!!')
}

onBeforeRouteLeave(() => {
    if (!isSaved.value) {
        const answer = confirm('尚有未儲存的變更, 確定離開?')
        if (!answer) return false
    }
})
</script>

<template>
    <div>
        <h2>編輯頁面</h2>
        <input :value="formData" @input="handleInput" type="text" placeholder="輸入一些內容...">
        <button @click="save">存檔</button>
        <p v-if="!isSaved" class="tip">尚未儲存...</p>
    </div>
</template>

<style scoped>
.tip {
    font-size: 12px;
    color: #fb4d4d;
}
</style>