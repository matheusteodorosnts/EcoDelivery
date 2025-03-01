<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const nameUser = ref('')
        const passwordUser = ref('')
        const showDivLogin = ref(false)

        const toggleDivLogin = () => {
            showDivLogin.value = !showDivLogin.value
        }

        const loginUser = () => {
            if (nameUser.value.length > 0 && passwordUser.value.length > 0) {
                navigateTo('/restaurants')
                showDivLogin.value = false
            }    
        }

        const enableButton = computed(() => nameUser.value == 0 || passwordUser.value == 0)
        return { 
            // Variables
            showDivLogin, 
            nameUser, 
            passwordUser, 

            // Computed's
            enableButton, 
            
            // Methods
            loginUser, 
            toggleDivLogin 
        }
    }
}
</script>

<template>
    <div class="flex flex-row justify-center items-center min-h-screen" >
        <main class="animate-fade-up font-[Lexend]">
            <button @click="toggleDivLogin" class="cursor-pointer bg-[#021908] text-white rounded w-70 p-3">Create Account</button>
            <Transition 
                enter-active-class="animate-jump-in" 
                leave-active-class="animate-jump-out">
                <div v-if="showDivLogin" class="bg-[#021908] rounded flex items-center justify-center w-80 h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form class="flex flex-col items-center justify-center gap-3" @submit.prevent="loginUser">
                        <label class="text-white">Name</label>
                        <input v-model="nameUser" type="text" class="border-2 border-[#bbcb2f] rounded focus:outline-none text-white italic" placeholder="example">
                        <label class="text-white">Password</label>
                        <input v-model="passwordUser" type="password" class="border-2 border-[#bbcb2f] rounded focus:outline-none text-white italic" placeholder="example123">
                        <button :disabled="enableButton" @click="loginUser" class="disabled:opacity-50 disabled:cursor-not-allowed text-white rounded bg-[#bbcb2f] cursor-pointer w-40 p-2 relative top-5 shadow-2xl not-disabled:hover:shadow-[#bbcb2f] transition-all duration-500">Send</button>
                    </form>
                </div>
            </Transition>
        </main>
    </div>
</template>

<style scoped>
/* Font of Google */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Lilita+One&display=swap');
</style>
