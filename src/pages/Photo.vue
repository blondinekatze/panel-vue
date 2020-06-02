<template>
    <div>


        <div class="c-photos">
            <div class="c-photos__list">
                <div class="c-photos__item"
                     v-for="(item, index) in photo"
                     :key="index"
                     :style="{'background-image': 'url(' + item.url + ')'}"
                     @click="dialogFormVisible = true"
                >
                </div>
            </div>
        </div>
<!--
        <el-dialog :visible.sync="dialogFormVisible">
            <el-carousel
                height="785px"
                :autoplay="false"
                ref="slider"
            >
                <el-carousel-item
                    v-for="(item,index) in photo"
                    :key="index"
                >
                    <img :src=item.url alt="">
                </el-carousel-item>
            </el-carousel>

        </el-dialog>-->

      <!--  <el-button @click="handleButtonClick">Остановить idle</el-button>-->
    </div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: "Photo",

        data() {
            return {
                photo: [],
                dialogFormVisible: false
            }
        },

        async created() {
            try {
                const res = await axios.get(`/photos`);
                this.photo = res.data;
            } catch(e) {
                console.error(e)
            }
        },
        methods: {
            handleButtonClick() {
                this.$idle.stop();
            }
        },
    }
</script>