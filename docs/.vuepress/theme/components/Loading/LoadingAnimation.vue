<script setup lang="ts">

</script>

<template>
  <div class="loading-animation">
    <div class="css-load-table">
      <div class="css-load-cell">
        <div class="css-load-gmb-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-animation{
  .css-load-gmb-loader {
    font-size: 0;
    display: inline-block;
    position: relative;
    height: 120px;
    width: 120px;
  }
  .css-load-gmb-loader div {
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    animation: css-load-gmb-bounce 1.75s infinite;
    -o-animation: css-load-gmb-bounce 1.75s infinite;
    -ms-animation: css-load-gmb-bounce 1.75s infinite;
    -webkit-animation: css-load-gmb-bounce 1.75s infinite;
    -moz-animation: css-load-gmb-bounce 1.75s infinite;
  }
  .css-load-gmb-loader div:nth-child(2) {
    left: 50%;
    margin-left: -15px;
    animation-delay: 0.25s;
    -o-animation-delay: 0.25s;
    -ms-animation-delay: 0.25s;
    -webkit-animation-delay: 0.25s;
    -moz-animation-delay: 0.25s;
  }
  .css-load-gmb-loader div:nth-child(3) {
    right: 0;
    animation-delay: 0.5s;
    -o-animation-delay: 0.5s;
    -ms-animation-delay: 0.5s;
    -webkit-animation-delay: 0.5s;
    -moz-animation-delay: 0.5s;
  }



  .css-load-table {
    display: flex;
    width: 100px;
    height: 100%;
    text-align: center;
    margin: auto;
  }
  .css-load-table .css-load-cell {
    display: table-cell;
    vertical-align: middle;
  }

  @keyframes css-load-gmb-bounce {
    10% {
      transform: translate3d(0, 30px, 0);
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      height: 30px;
    }
    14% {
      height: 90px;
    }
    15% {
      height: 30px;
      transform: translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.8, 0, 0.8, 1);
    }
    35% {
      transform: translate3d(0, 0, 0);
    }
  }

  @-o-keyframes css-load-gmb-bounce {
    10% {
      -o-transform: translate3d(0, 30px, 0);
      -o-animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      height: 30px;
    }
    14% {
      height: 90px;
    }
    15% {
      height: 30px;
      -o-transform: translate3d(0, -60px, 0);
      -o-animation-timing-function: cubic-bezier(0.8, 0, 0.8, 1);
    }
    35% {
      -o-transform: translate3d(0, 0, 0);
    }
  }

  @-ms-keyframes css-load-gmb-bounce {
    10% {
      -ms-transform: translate3d(0, 30px, 0);
      -ms-animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      height: 30px;
    }
    14% {
      height: 90px;
    }
    15% {
      height: 30px;
      -ms-transform: translate3d(0, -60px, 0);
      -ms-animation-timing-function: cubic-bezier(0.8, 0, 0.8, 1);
    }
    35% {
      -ms-transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes css-load-gmb-bounce {
    10% {
      -webkit-transform: translate3d(0, 30px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      height: 30px;
    }
    14% {
      height: 90px;
    }
    15% {
      height: 30px;
      -webkit-transform: translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.8, 1);
    }
    35% {
      -webkit-transform: translate3d(0, 0, 0);
    }
  }

  @-moz-keyframes css-load-gmb-bounce {
    10% {
      -moz-transform: translate3d(0, 30px, 0);
      -moz-animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      height: 30px;
    }
    14% {
      height: 90px;
    }
    15% {
      height: 30px;
      -moz-transform: translate3d(0, -60px, 0);
      -moz-animation-timing-function: cubic-bezier(0.8, 0, 0.8, 1);
    }
    35% {
      -moz-transform: translate3d(0, 0, 0);
    }
  }
}
</style>