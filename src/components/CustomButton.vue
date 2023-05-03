<template>
  <div class="btn-container">
    <div class="middle">
      <a href="" class="btn btn4" @click="startGame">Start Game</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startGame: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Start Game",
    },
  },
};
</script>

<style>
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.btn::before {
  background: #ff7675;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.btn1::before {
  width: 0%;
  height: 100%;
}

.btn1:hover::before {
  width: 100%;
}

.btn2::before {
  width: 100%;
  height: 0%;
}
.btn2:hover::before {
  height: 100%;
}

.btn3::before {
  width: 100%;
  height: 0%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.btn3:hover::before {
  height: 380%;
}

.btn4::before {
  width: 100%;
  height: 0%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.btn4:hover::before {
  height: 380%;
}

@media (max-width: 768px) {
  .btn {
    font-size: 1rem;
  }
}
</style>
