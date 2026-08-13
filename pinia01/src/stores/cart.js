import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default useCartStore = defineStore(
    'cart',
    () => {
        const items = ref([])

        const totalItems = computed(() => { })

        const totalMoney = computed(() => { })

        const isEmpty = computed(() => { })

        function addItem() { }

        function removeItem() { }

        function increaseAmount() { }

        function decreaseAmount() { }

        function clearCart() { }

        // return { 狀態, 計算屬性, 操作方法 }
        return {
            items,
            totalItems,
            totalMoney,
            isEmpty,
            addItem,
            removeItem,
            increaseAmount,
            decreaseAmount,
            clearCart
        }
    }
)