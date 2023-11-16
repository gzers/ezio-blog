<template>
  <div class="balloon" :class="styleClass" :style="style">
    <img class="person-image" :src="person.image" :alt="person.name" />
  </div>
</template>

<script>
export default {
  name: 'Balloon',
  props: ['person'],
  computed: {
    styleClass() {
      return `balloon-${Math.floor(Math.random() * 6) + 1}`;
    },
    style() {
      const width = Math.floor(Math.random() * 150) + 50;
      const left = Math.floor(Math.random() * 60) + 20;
      const duration = Math.floor(Math.random() * 5) + 5;
      return {
        width: `${width}px`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
      };
    },
  },
};
</script>

<style>
.balloon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  animation-name: move;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

.person-image {
  max-width: 100%;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
}

.balloon-1 {
  animation-delay: 0s;
}

.balloon-2 {
  animation-delay: 2s;
}

.balloon-3 {
  animation-delay: 4s;
}

@keyframes move {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
}

</style>