<template>
    <section class="content">
        <h1>
            Каталог
        </h1>

        <div class="catalog-blocks">
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
            <div class="catalog-item">
                <img src="../../../assets/img/slides/slider-2.jpg" alt="">
                <p class="catalog-p">Бомбон одеяла</p>
                <div class="catalog-for-button">
                    <button>Кнопка</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ThirdBlock"
    }
</script>

<style scoped>


    @media screen and (min-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background-color: white;
            padding-bottom: 55px;
        }

        h1 {
            display: grid;
            justify-content: center;
            padding: 55px;
            font-size: 46px;
            line-height: 40px;
            color: #6b6b6b;
        }

        .catalog-blocks {
            display: grid;

            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .catalog-item {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 260px;
        }

        .catalog-item > img {
            width: 260px;
            margin-bottom: 20px;
        }

        .catalog-item > p {
            display: grid;
            justify-content: center;
            align-items: center;

            color: #6b6b6b;

            font-size: 18px;
            font-weight: 500;

        }

        .catalog-item > .catalog-for-button {
            display: grid;
            justify-content: center;
            align-items: center;

        }

        .catalog-for-button > button {
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #dbabab;
            border: none;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            font-weight: 600;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background-color: white;
            padding-bottom: 55px;
        }

        h1 {
            display: grid;
            justify-content: center;
            padding: 55px;
            font-size: 46px;
            line-height: 40px;
            color: #6b6b6b;
        }

        .catalog-blocks {
            display: grid;

            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .catalog-item {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 260px;
        }

        .catalog-item > img {
            width: 260px;
            margin-bottom: 20px;
        }

        .catalog-item > p {
            display: grid;
            justify-content: center;
            align-items: center;

            color: #6b6b6b;

            font-size: 18px;
            font-weight: 500;

        }

        .catalog-item > .catalog-for-button {
            display: grid;
            justify-content: center;
            align-items: center;

        }

        .catalog-for-button > button {
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #dbabab;
            border: none;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            font-weight: 600;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background-color: white;
            padding-bottom: 55px;
        }

        h1 {
            display: grid;
            justify-content: center;
            padding: 55px;
            font-size: 46px;
            line-height: 40px;
            color: #6b6b6b;
        }

        .catalog-blocks {
            display: grid;

            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }

        .catalog-item {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 260px;
        }

        .catalog-item > img {
            width: 260px;
            margin-bottom: 20px;
        }

        .catalog-item > p {
            display: grid;
            justify-content: center;
            align-items: center;

            color: #6b6b6b;

            font-size: 18px;
            font-weight: 500;

        }

        .catalog-item > .catalog-for-button {
            display: grid;
            justify-content: center;
            align-items: center;

        }

        .catalog-for-button > button {
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #dbabab;
            border: none;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            font-weight: 600;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background-color: white;
            padding-bottom: 55px;
        }

        h1 {
            display: grid;
            justify-content: center;
            padding: 55px;
            font-size: 46px;
            line-height: 40px;
            color: #6b6b6b;
        }

        .catalog-blocks {
            display: grid;

            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }

        .catalog-item {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 260px;
        }

        .catalog-item > img {
            width: 260px;
            margin-bottom: 20px;
        }

        .catalog-item > p {
            display: grid;
            justify-content: center;
            align-items: center;

            color: #6b6b6b;

            font-size: 18px;
            font-weight: 500;

        }

        .catalog-item > .catalog-for-button {
            display: grid;
            justify-content: center;
            align-items: center;

        }

        .catalog-for-button > button {
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #dbabab;
            border: none;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            font-weight: 600;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background-color: white;
            padding-bottom: 55px;
        }

        h1 {
            display: grid;
            justify-content: center;
            padding: 55px;
            font-size: 46px;
            line-height: 40px;
            color: #6b6b6b;
        }

        .catalog-blocks {
            display: grid;

            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr ;
            grid-gap: 20px;
        }

        .catalog-item {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 260px;
        }

        .catalog-item > img {
            width: 260px;
            margin-bottom: 20px;
        }

        .catalog-item > p {
            display: grid;
            justify-content: center;
            align-items: center;

            color: #6b6b6b;

            font-size: 18px;
            font-weight: 500;

        }

        .catalog-item > .catalog-for-button {
            display: grid;
            justify-content: center;
            align-items: center;

        }

        .catalog-for-button > button {
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #dbabab;
            border: none;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            font-weight: 600;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

    }



</style>
