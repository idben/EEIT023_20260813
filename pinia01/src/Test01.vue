<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <h1>購物車測試</h1>
    <p>商品數量: {{ cartStore.totalItems }}</p>
</template>

<style scoped></style>