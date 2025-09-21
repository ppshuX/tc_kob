<template>
    <div ref="parent" class="game-map">
        <canvas ref="canvas">

        </canvas>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { GameMap } from '@/assets/scripts/GameMap.js'

export default {
    name: 'GameMap',
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            const ctx = canvas.value.getContext('2d');
            new GameMap(ctx, parent.value);
        })

        return {
            parent,
            canvas,
        }
    },
}
</script>

<style scoped>
.game-map {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>    