<template>
  <div class="main-container">
    <h1>Welcome to the Quiz Geek!</h1>

    <div>
      <iframe
        class="neon"
        allow="fullscreen"
        frameBorder="0"
        src="https://giphy.com/embed/QYcTghGpoj7LcPFeEQ/video"
      ></iframe>
    </div>
    <div class="btn-container">
      <CustomButton :startGame="startGame" />
    </div>
    <div class="footer">
      <p>Hecho con 💜 por Britney Palma (BR03)</p>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  methods: {
    startGame() {
      this.$router.push("/questions");
    },
  },
  components: {
    CustomButton,
  },
};
</script>

<style>
.main-container {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #020815;
  padding: 1rem;
  gap: 2rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2315%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsG2321' transform='translate(0%2c 0)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2321' transform='translate(832%2c 0)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2315'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cg id='SvgjsG2320'%3e%3cpath d='M11.986 8.245a46.749 46.749 0 0 1-0.521-0.411c-0.146-0.116-0.293-0.233-0.44-0.348-0.88-0.688-1.797-1.316-2.816-1.407A2.815 2.815 0 0 0 7.954 6.067c-0.086 0-0.171 0.011-0.255 0.018-1.022 0.093-1.942 0.717-2.826 1.408l0.093 0.073c0.108 0.085 0.213 0.168 0.32 0.252C6.165 7.137 7.021 6.576 7.954 6.576c0.93 0 1.784 0.558 2.66 1.236a35.098 35.098 0 0 1 0.535 0.421c0.142 0.113 0.283 0.226 0.426 0.338C12.532 9.32 13.531 10 14.658 10c0.437 0 0.854-0.104 1.257-0.273v-0.557c-0.409 0.197-0.825 0.32-1.257 0.32-0.934 0-1.792-0.563-2.672-1.245z'%3e%3c/path%3e%3cpath d='M11.574 7.496c0.029 0.023 0.059 0.046 0.088 0.07 0.109 0.087 0.216 0.17 0.325 0.256 0.318-0.246 0.635-0.476 0.952-0.67v1.37c0.17 0.111 0.34 0.214 0.51 0.301V6.878c0.315-0.147 0.634-0.248 0.96-0.283v2.537c0.078 0.01 0.157 0.018 0.237 0.018 0.091 0 0.183-0.009 0.273-0.021V6.592c0.34 0.037 0.67 0.144 0.996 0.3V6.336C15.514 6.17 15.099 6.067 14.664 6.067c-1.128 0-2.13 0.68-3.09 1.429z m-7.248 1.08c-0.034-0.027-0.068-0.053-0.102-0.08-0.104-0.083-0.207-0.162-0.31-0.245-0.877 0.678-1.733 1.238-2.665 1.238C0.82 9.49 0.407 9.36 0 9.152v0.562C0.401 9.891 0.815 10 1.249 10c1.124 0 2.122-0.677 3.077-1.423z'%3e%3c/path%3e%3cpath d='M0.989 9.133c0.084 0.011 0.17 0.019 0.254 0.02 0.086 0 0.171-0.008 0.256-0.02V6.592c0.329 0.035 0.65 0.136 0.967 0.285-0.002 0.012-0.007 0.023-0.007 0.036v1.903a5.818 5.818 0 0 0 0.51-0.303V7.152c0.487 0.3 0.971 0.684 1.467 1.08C5.525 9.101 6.652 10 7.948 10c1.123 0 2.121-0.675 3.078-1.42l-0.106-0.084c-0.103-0.082-0.205-0.161-0.306-0.242-0.313 0.242-0.622 0.466-0.934 0.658V7.564A5.816 5.816 0 0 0 9.17 7.261v1.893c0 0.01 0.004 0.019 0.005 0.029-0.316 0.149-0.637 0.252-0.965 0.288V6.937a1.97 1.97 0 0 0-0.267-0.02c-0.082 0-0.163 0.008-0.243 0.017v2.541c-0.33-0.035-0.652-0.136-0.969-0.283 0.002-0.013 0.006-0.024 0.006-0.039V7.248a5.629 5.629 0 0 0-0.51 0.302v1.368c-0.49-0.299-0.976-0.686-1.474-1.083C3.666 6.966 2.539 6.067 1.243 6.067c-0.432 0-0.844 0.096-1.243 0.251v0.55c0.324-0.144 0.652-0.244 0.989-0.278V9.133z'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG2318'%3e%3cpath d='M15.909 7.864C14.147 5.194 11.191 3.6 8.001 3.6 4.812 3.6 1.855 5.194 0.091 7.864L0 8.002l0.091 0.137c1.762 2.67 4.719 4.264 7.91 4.264 3.19 0 6.146-1.594 7.908-4.265l0.091-0.136-0.091-0.138z m-14.944 0.138c1.3-1.801 3.205-3.012 5.341-3.437a3.832 3.832 0 0 0-0.978 0.708c-0.727 0.726-1.127 1.692-1.127 2.719a3.821 3.821 0 0 0 1.127 2.72 3.857 3.857 0 0 0 1.041 0.737C4.208 11.037 2.278 9.82 0.966 8.002z m7.076 2.372c-1.31 0-2.374-1.066-2.374-2.375 0-0.634 0.247-1.23 0.694-1.679a2.359 2.359 0 0 1 1.679-0.695c0.634 0 1.23 0.246 1.68 0.695a2.362 2.362 0 0 1 0.694 1.678c0 0.634-0.246 1.23-0.694 1.679a2.364 2.364 0 0 1-1.679 0.695z m1.744 1.047a3.838 3.838 0 0 0 0.981-0.711 3.824 3.824 0 0 0 1.126-2.72c0-1.474-0.836-2.756-2.056-3.4C11.915 5.04 13.765 6.24 15.035 8.002c-1.281 1.775-3.15 2.979-5.25 3.419z'%3e%3c/path%3e%3cpath d='M7.217 8.133c0.433 0 0.784-0.351 0.784-0.785s-0.352-0.785-0.785-0.784a0.784 0.784 0 0 0-0.785 0.784A0.784 0.784 0 0 0 7.216 8.133'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG2316'%3e%3cpath d='M2.133 2.133h11.734v11.734H2.133z'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG2317'%3e%3cpath d='M0.778 8.111a7.222 7.222 0 1 0 14.444 0 7.222 7.222 0 1 0-14.444 0'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG2319'%3e%3cpath d='M14.344 10.747c0 2.735-2.217 4.952-4.952 4.952-2.735 0-4.952-2.217-4.953-4.952 0-1.3 0.294-3.189 2.021-4.918 3.16-3.16 3.308-4.973 3.308-4.973 3.797 3.797 4.576 7.155 4.576 9.889z'%3e%3c/path%3e%3cpath d='M3.978 3.8s0.461 3.022 3.141 4.749c1.488 0.959 4.571 3.643 4.57 4.584 0 1.981-4.712 2.565-6.693 2.566s-3.588-1.606-3.588-3.588c0-1.982-0.18-5.56 2.571-8.311z'%3e%3c/path%3e%3cpath d='M8.123 6.557s0.08 0.983 1.792 2.695c0.936 0.935 1.095 1.959 1.095 2.663 0 1.482-1.201 2.683-2.684 2.683s-2.683-1.201-2.683-2.684c0-1.481 0.422-3.301 2.48-5.358z'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG2321'%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(0%2c 0) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(0%2c 83.2) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(0%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(0%2c 249.60000000000002) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(0%2c 332.8) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(0%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(0%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(83.2%2c 0) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(83.2%2c 83.2) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(83.2%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(83.2%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(83.2%2c 332.8) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(83.2%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(83.2%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(166.4%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(166.4%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(166.4%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(166.4%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(166.4%2c 332.8) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(166.4%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(166.4%2c 499.20000000000005) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(249.60000000000002%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(249.60000000000002%2c 83.2) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(249.60000000000002%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(249.60000000000002%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(249.60000000000002%2c 332.8) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(249.60000000000002%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(249.60000000000002%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(332.8%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(332.8%2c 83.2) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(332.8%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(332.8%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(332.8%2c 332.8) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(332.8%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(332.8%2c 499.20000000000005) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(416%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(416%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(416%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(416%2c 249.60000000000002) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(416%2c 332.8) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(416%2c 416) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(416%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(499.20000000000005%2c 0) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(499.20000000000005%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(499.20000000000005%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(499.20000000000005%2c 249.60000000000002) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(499.20000000000005%2c 332.8) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(499.20000000000005%2c 416) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(499.20000000000005%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(582.4%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(582.4%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(582.4%2c 166.4) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(582.4%2c 249.60000000000002) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(582.4%2c 332.8) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(582.4%2c 416) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(582.4%2c 499.20000000000005) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(665.6%2c 0) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(665.6%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(665.6%2c 166.4) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(665.6%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2320' transform='translate(665.6%2c 332.8) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(665.6%2c 416) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(665.6%2c 499.20000000000005) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(748.8000000000001%2c 0) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2319' transform='translate(748.8000000000001%2c 83.2) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2317' transform='translate(748.8000000000001%2c 166.4) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2318' transform='translate(748.8000000000001%2c 249.60000000000002) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(748.8000000000001%2c 332.8) scale(1.3)' fill='rgba(255%2c 70%2c 85%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(748.8000000000001%2c 416) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG2316' transform='translate(748.8000000000001%2c 499.20000000000005) scale(1.3)' fill='rgba(77%2c 86%2c 103%2c 1)'%3e%3c/use%3e%3c/g%3e%3c/defs%3e%3c/svg%3e");
}
.footer {
  background-color: #40015860;
  position: absolute;
  bottom: 0;
  width: 100vw;
}
.footer p {
  font-size: 0.85rem;
  text-align: center;
  padding: 0.4rem 0;
}
h1 {
  color: azure;
  font-size: 3rem;
  text-align: center;
  background: rgba(11, 1, 1, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.btn-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  width: 100%;
}
.neon {
  width: 600px;
  height: 400px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .neon {
    width: 300px;
    height: 200px;
  }
}
</style>
