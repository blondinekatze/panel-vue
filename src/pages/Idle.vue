<template>
    <router-link
        to="/"
        class="c-start-page"
        :style="{'background-image': 'url(/img/img-big.jpg)'}"
    >

        <div class="c-start-page__video">
            <video
                controls
                autoplay
                loop
                muted
                class="video"
            >
                <source src="http://verstka.1gt.ru/vue-yama/video.mp4" type="video/mp4">
            </video>
        </div>
        <!--
             параметры видео - ?autoplay=1&loop=1
        -->

        <div class="c-start-page__content">
            <div class="c-start-page__icon">
                <IconTemplate
                    name="touch"
                    width="55"
                    height="89"
                />
            </div>
            <div class="c-start-page__txt">
                Нажмите на экран для перехода
                к информации о продукте
            </div>
        </div>
    </router-link>
</template>

<script>

    export default {
        name: "Idle"
    }
</script>