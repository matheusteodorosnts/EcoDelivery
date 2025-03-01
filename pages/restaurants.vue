<script>
import { ref } from 'vue'
import anime from 'animejs'

export default {
    setup() {
        // Variables
        const showScreenMcDonalds = ref(false);
        const showScreenKFC = ref(false);
        const showScreenSubway = ref(false);
        const showScreenSelectFood = ref(true);
        const showDivDoneOrder = ref(false);

        
        // Methods
        const toggleScreenMcDonalds = () => {
            showScreenMcDonalds.value = !showScreenMcDonalds.value;
            showScreenSelectFood.value = !showScreenSelectFood.value;
        };
        
        const toggleScreenKFC = () => {
            showScreenKFC.value = !showScreenKFC.value;
            showScreenSelectFood.value = !showScreenSelectFood.value;
        };

        const toggleScreenSubway = () => {
            showScreenSubway.value = !showScreenSubway.value;
            showScreenSelectFood.value = !showScreenSelectFood.value;
        };

        const toggleScreenSelectFood = () => {
            showScreenSelectFood.value = !showScreenSelectFood.value;
            showScreenMcDonalds.value = false;
            showScreenKFC.value = false;
            showScreenSubway.value = false;
        };

        const toggleDivDoneOrder = () => {
            showDivDoneOrder.value = !showDivDoneOrder.value
            if (showDivDoneOrder.value) {
                setTimeout(() => {
                    anime({
                        targets: '#doneOrder',
                        translateX: -250,
                        duration: 3000
                    })
                }, 10);
                setTimeout(() => {
                    anime({
                        targets: '#doneOrder',
                        translateX: 250,
                        duration: 3000,
                        complete: () => {
                            showDivDoneOrder.value = false
                        }
                    })
                }, 4000);
            }
        };


        return {
            // Variables
            showScreenMcDonalds,
            showScreenKFC,
            showScreenSubway,
            showScreenSelectFood,
            showDivDoneOrder,

            // Methods
            toggleScreenMcDonalds,
            toggleScreenKFC,
            toggleScreenSubway,
            toggleScreenSelectFood,
            toggleDivDoneOrder,
        }
    }
}
</script>

<template>
        <div class="flex flex-row justify-center items-center min-h-screen">
            <header class="absolute top-4 left-4">
                <div v-if="showDivDoneOrder" id="doneOrder" class="bg-[#021908] rounded absolute left-380 max-sm:left-100 w-50 h-10 text-white flex flex-row justify-center items-center"><IconCircleCheck class="relative right-14"/>Done!</div>
                <button><IconArrowLeft @click="toggleScreenSelectFood" v-if="!showScreenSelectFood" class="text-[#021908] cursor-pointer"/></button>
            </header>
            <main class="animate-jump-in font-[Lexend]">
                <div v-if="showScreenSelectFood" class="flex flex-col gap-8">
                    <div class="bg-[#021908] rounded w-64 h-20 max-sm:w-80 flex justify-center items-center">
                        <span class="text-[#bbcb2f] font-[Lilita_One] relative right-5">15% <br> OFF</span>
                        <span class="font-[Lilita_One] text-[#bbcb2f] text-2xl relative left-10">IN ALL!</span>
                        <div class="bg-transparent rounded-full border-2 border-[#bbcb2f] w-15 h-15 relative right-34.5"></div>
                    </div>
                    <!-- The most famous -->
                    <div class="flex flex-row gap-2 relative max-sm:left-8">
                        <span class="absolute text-[#021908] bottom-20">The Most Famous</span>
                        <button @click="toggleScreenMcDonalds" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/mcdonaldsImg.png"></button>
                        <button @click="toggleScreenSubway" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/subwayImg.png"></button>
                        <button @click="toggleScreenKFC" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/kfcImg.png"></button>
                    </div>
                    <!-- The most Orders -->
                    <div class="flex flex-row gap-2 relative max-sm:left-8">
                        <span class="absolute text-[#021908] bottom-20">The Most Famous</span>
                        <button @click="toggleScreenKFC" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/kfcImg.png"></button>
                        <button @click="toggleScreenMcDonalds" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/mcdonaldsImg.png"></button>
                        <button @click="toggleScreenSubway" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/subwayImg.png"></button>
                    </div>
                    <!-- The most Rapid -->
                    <div class="flex flex-row gap-2 relative max-sm:left-8">
                        <span class="absolute text-[#021908] bottom-20">The Most Rapid</span>
                        <button @click="toggleScreenSubway" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/subwayImg.png"></button>
                        <button @click="toggleScreenKFC" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/kfcImg.png"></button>
                        <button @click="toggleScreenMcDonalds" class="bg-[#021908] rounded w-20 h-20 cursor-pointer"><img src="../public/imgs/mcdonaldsImg.png"></button>
                    </div>
                </div>
                <!-- Screen of Mc Donalds -->
                <div v-if="showScreenMcDonalds">
                    <div class="rounded bg-[#021908] w-170 max-sm:w-90 h-80 flex flex-col justify-center items-center gap-2">
                        <h1 class="font-[Lilita_One] text-white text-4xl">Mc Donalds</h1>
                        <span class="text-white opacity-50">The Mc Donalds is a Company of Hamburguers.</span>
                        <button @click="toggleDivDoneOrder" class="bg-[#bbcb2f] rounded-full p-2 w-40 cursor-pointer border-2 border-[#bbcb2f] hover:bg-transparent transition-all duration-500 hover:text-[#bbcb2f]">Order</button>
                    </div>
                </div>
                <!-- Screen of Subway -->
                <div v-if="showScreenSubway">
                    <div class="rounded bg-[#021908] w-170 max-sm:w-90 h-80 flex flex-col justify-center items-center gap-2">
                        <h1 class="font-[Lilita_One] text-white text-4xl">Subway</h1>
                        <span class="text-white opacity-50">The Subway is a Company of breads high/extensive.</span>
                        <button @click="toggleDivDoneOrder" class="bg-[#bbcb2f] rounded-full p-2 w-40 cursor-pointer border-2 border-[#bbcb2f] hover:bg-transparent transition-all duration-500 hover:text-[#bbcb2f]">Order</button>
                    </div>
                </div>
                <!-- Screen of Subway -->
                <div v-if="showScreenKFC">
                    <div class="rounded bg-[#021908] w-170 max-sm:w-90 h-80 flex flex-col justify-center items-center gap-2">
                        <h1 class="font-[Lilita_One] text-white text-4xl">KFC</h1>
                        <span class="text-white opacity-50">The KFC is a Company of Chicken.</span>
                        <button @click="toggleDivDoneOrder" class="bg-[#bbcb2f] rounded-full p-2 w-40 cursor-pointer border-2 border-[#bbcb2f] hover:bg-transparent transition-all duration-500 hover:text-[#bbcb2f]">Order</button>
                    </div>
                </div>
            </main>
        </div>
</template>

<style scoped>
/* Font of Google */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Lilita+One&display=swap');
</style>
