<template>
    <div class="c-about-content">
        <div class="c-about-content__rows">
            <div class="c-about-row">
                <div class="c-about-row__inner">
                    <div class="c-about-row__txt">
                        <p>
                            Какое развитие рекламного видеомаркетинга ждет нас через 5-10 лет? В голову приходят образы
                            из фантастических фильмах о будущем, где ночные улицы залиты светом огромных ярких экранов и
                            таблоидов с мелькающей рекламой, а в каждом магазине или коммерческой организации
                            установлены сенсорные панели содержащие всевозможную информацию и предложения.
                        </p>
                        <p>
                            Компания YAMA.SYSTEMS с уверенностью заявляет - «Будущее уже наступило!»
                        </p>
                        <p>
                            Мы создаем персональные проекты под потребности вашего бизнеса: <br>
                            - собственное производство комплектующих;<br>
                            - профессиональная команда разработчиков программного обеспечения;<br>
                            - контроль качества на всех этапах создания проекта.
                        </p>
                        <p>
                            Каждая последующая модель наших Сенсорных панелей и приставок опережает запросы клиентов и
                            приближает вас к миру будущего!
                        </p>

                    </div>

                    <div class="c-about-row__list">
                        <div class="c-about-row__item">
                            <div class="c-about-row__name">
                                76 человек
                            </div>
                            <div class="c-about-row__txt">
                                Штатных сотрудников
                            </div>
                        </div>
                        <div class="c-about-row__item">
                            <div class="c-about-row__name">
                                380 клиентов
                            </div>
                            <div class="c-about-row__txt">
                                Крупные и средние компании России и СНГ

                            </div>
                        </div>
                        <div class="c-about-row__item">
                            <div class="c-about-row__name">
                                10 лет
                            </div>
                            <div class="c-about-row__txt">
                                Работаем с 2009 года
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-about-row__inner">
                    <div class="c-contacts">
                        <div class="c-about-row__title">
                            Свяжитесь с нами
                        </div>
                        <div class="c-about-row__txt">
                            Компания «Yama.Systems»
                        </div>
                        <div class="c-contacts__list">
                            <div class="c-contacts__item">
                                <div class="c-contacts__name">Телефон</div>
                                <div class="c-contacts__txt">
                                    +7 (383) 315-62-69 (ПН-ПТ 10:00 - 18:00)
                                </div>
                            </div>
                            <div class="c-contacts__item">
                                <div class="c-contacts__name">Почта</div>
                                <div class="c-contacts__txt">
                                    info@yama.systems
                                </div>
                            </div>
                            <div class="c-contacts__item">
                                <div class="c-contacts__name">Адрес</div>
                                <div class="c-contacts__txt">
                                    Новосибирск, ул. Большевистская, д. 97
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-about-team">
            <div class="c-about-team__list">
                <div class="c-about-card"
                     v-for="(item, index) in team"
                     :key="index"
                >
                    <div class="c-about-card__img-wrap"
                         :style="{'background-image': 'url(' + item.url + ')'}"
                    ></div>
                    <div class="c-about-card__content">
                        <div class="c-about-card__name"
                        >
                            {{ item.name }}
                        </div>
                        <div class="c-about-card__vacancy">
                            {{ item.vacancy }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "About",
        components: {},
        data() {
            return {
                team: []
            }
        },
        async created() {
            try {
                const res = await axios.get(`/team`);
                this.team = res.data;
            } catch(e) {
                console.error(e)
            }
        },
    }
</script>

<style scoped>

</style>