<template>
    <div class="backdrop" v-if="modalActive" @click.self="showModal">
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Modal',
    props: ['modalActive', 'showModal'],
}
</script>

<style lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 90%;
    max-width: 40rem;
    background: #eaf3f9;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    animation: slide-down 300ms ease-out forwards;

    h2 {
        text-align: center;
        margin: 0;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>