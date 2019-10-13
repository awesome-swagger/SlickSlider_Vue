<template>
  <div calss="work-section">
    <slick ref="slick"  :options="slickOptions">
        <div><img src="./../assets/slider.png" alt=""></div>
        <div><img src="./../assets/slider.png" alt=""></div>
        <div><img src="./../assets/slider.png" alt=""></div>
        <div><img src="./../assets/slider.png" alt=""></div>
        <div><img src="./../assets/slider.png" alt=""></div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
    components: { Slick },

    data() {
        return {
            slickOptions: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            },
        };
    },

    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
}
</script>
<style>
img {
    width:100vw;
    height: 600px;
}
.work-section {
    width:100%;
}
.slick-dots {
    bottom: 10px !important;
}
</style>