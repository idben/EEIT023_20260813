import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore(
    'cart',
    () => {
        const items = ref([
            {
                id: 1,
                price: 50,
                quantity: 5
            }
        ])

        const totalItems = computed(() =>
            items.value.reduce((sum, item) => sum + item.quantity, 0)
        )

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