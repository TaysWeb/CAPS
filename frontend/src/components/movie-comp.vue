<template>
    
    <div class="container">
        <div class="book">
            <div v-if="Movie">
            <img :src="Movie.image" :alt="Movie.Title">
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
    .book-container {
    border: 1px solid lightgray;
    width: 500px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: 400px;
}

.book {
    width: 200px;
    height: 300px;
    transform: rotateY(-30deg);
    transform-style: preserve-3d;
    position: relative;
    transition: transform 1s ease;
    animation: 1s ease 0s 1 initAnimation;
}

.book:hover {
    transform: rotate(0deg);
}

@keyframes initAnimation {
    0% {
        transform: rotateY(0deg)
    }

    100% {
        transform: rotateY(-30deg);
    }
}




.book> :first-child {
    position: absolute;
    background: #0d47a1aa;
    width: 200px;
    height: 300px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.book::before {
    position: absolute;
    content: '';
    background: #bf360caa;
    height: calc(300px - 2 * 3px);
    top: 3px;
    width: 50px;
    transform: translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2));
}

.book::after {
    content: '';
    position: absolute;
    left: 0;
    width: 200px;
    height: 300px;
    background: #1b5e20aa;
    transform: translateZ(-50px);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: -10px 0 50px 10px #666;
}
</style>