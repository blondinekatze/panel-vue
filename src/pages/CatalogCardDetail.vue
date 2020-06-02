<template>
    <div class="c-catalog-card-detail">
        <div class="c-catalog-card-detail__top">
            <router-link
                class="c-back-link"
                to="/"
            >
                <div class="c-back-link__icon">
                    <IconTemplate
                        name="arrowback"
                        width="16"
                        height="12"
                    />
                </div>
                <div class="c-back-link__txt">
                    Назад
                </div>
            </router-link>
        </div>
        <div class="c-catalog-card-detail__wrap">
            <div class="c-catalog-card-detail__inner">
                <div class="c-card-carousel">
                    <el-carousel
                        height="785px"
                        :autoplay="false"

                        ref="slider"
                    >
                        <el-carousel-item
                            v-for="(item,index) in product.imagesSlider"
                            :key="index"
                        >
                            <img :src=item.url alt="">
                        </el-carousel-item>
                    </el-carousel>
                    <div class="c-card-carousel__nav">
                        <div
                            v-for="(item,index) in product.imagesSlider"
                            :key="index"
                            :style="{'background-image': 'url(' + item.url + ')'}"
                            :class="['c-card-carousel__nav-item', {active: defaultImg === index}]"
                            @click="handleSliderChange(index)"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-catalog-card-detail__inner info">
                <div class="c-catalog-card-info">
                    <div class="c-catalog-card-info__top">
                        <div class="c-catalog-card-info__title">
                            {{ product.name }}
                        </div>
                    </div>

                    <div class="c-catalog-card-info__content">
                        <div class="c-catalog-card-info__item">
                            <div class="c-catalog-card-detail__subtitle">
                                Выберите диагональ
                            </div>
                            <div class="c-models-list">
                                <div
                                    v-for="(modelItem, index) in product.offers"
                                    :key="index"
                                    :class="['c-models-list__item', {active: defaultModel === index}]"
                                    @click="defaultModel = index"
                                >
                                    <div class="c-models-list__icon">
                                        <IconTemplate
                                            name="mark"
                                            width="16"
                                            height="16"
                                        />
                                    </div>
                                    <div class="c-models-list__name">{{ modelItem.textUnder}}{{ modelItem.size }} дюйма
                                        {{ modelItem.text}}
                                    </div>
                                    <div class="c-models-list__price">{{ modelItem.textUnder}}{{
                                        fluentFormatNumber(modelItem.price) }} р
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            class="c-catalog-card-info__item"
                            v-if="product.colors"
                        >
                            <div class="c-catalog-card-detail__subtitle">
                                Цвет устройства
                            </div>
                            <div class="c-card-colors">
                                <div
                                    v-for="(color, index) in product.colors"
                                    :key="index"
                                    :class="['c-card-colors__item', {active: defaultColor === index}]"
                                    @click="defaultColor = index"
                                    :style="{backgroundColor: color.name }"
                                >
                                </div>
                            </div>
                        </div>

                        <div class="c-catalog-card-info__item">
                            <el-button type="primary" @click="dialogFormVisible = true">Оформить заказ</el-button>

                            <el-dialog title="Оформить заказ" :visible.sync="dialogFormVisible">
                                <el-form :model="form">
                                    <el-form-item label="Имя">
                                        <el-input v-model="form.name" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Телефон">
                                        <el-input v-model="form.phone" autocomplete="off"></el-input>
                                    </el-form-item>
                                </el-form>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">Отмена</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false">Оформить</el-button>
                                </span>
                            </el-dialog>

                        </div>
                    </div>
                    <div
                        class="c-catalog-card-info__bottom"
                        v-if="product.specifications"
                    >
                        <div class="c-catalog-card-detail__subtitle">
                            Технические характеристики для всех диагоналей
                        </div>
                        <CatalogProperties
                            v-for="(property, index) in product.specifications"
                            :key="index"
                            :name="property.name"
                            :value="property.value"
                        >
                        </CatalogProperties>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="c-catalog-card-detail__inner"
            v-if="product.txt"
        >
            <div class="c-catalog-card-detail__subtitle">
                Описание
            </div>
            <div class="c-catalog-card-detail__txt" v-html="product.txt">
            </div>
        </div>
    </div>
</template>

<script>

    import store from "@/store";

    import AccountingMixin from "@/mixins/accounting";

    import CatalogProperties from "@/components/CatalogProperties";


    export default {

        name: "CatalogCardDetail",

        components: {
            CatalogProperties
        },

        async beforeRouteEnter(to, from, next) {
            await store.dispatch('catalog/getProductList');
            next();
        },

        data() {
            return {
                defaultModel: 0,
                defaultColor: 0,
                defaultImg: 0,
                dialogFormVisible: false,
                form: {
                    name: '',
                    phone: ''
                },
            }
        },

        mixins: [
            AccountingMixin
        ],

        computed: {
            productId() {
                return +this.$route.params.id;
            },
            product() {
                return this.$store.getters['catalog/getProduct'](this.productId);
            }
        },

        methods: {
            handleSliderChange(index) {
                this.$refs.slider.setActiveItem(index);
                this.defaultImg = index;
            }
        }
    }
</script>