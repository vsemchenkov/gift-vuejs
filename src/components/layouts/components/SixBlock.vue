<template>
    <div class="content">
        <h1>Студия детского текстиля "Тепло" в цифрах</h1>

        <div class="content-items">
            <div class="content-item">
                <h1 class="pink">3,5</h1>
                <h1 class="grey">года</h1>
                <div class="hr"></div>
                <div class="div">
                    <p>День рождение студии</p>
                    <p>10 сентября 2016</p>
                </div>
            </div>
            <div class="content-item">
                <h1 class="pink">3,5</h1>
                <h1 class="grey">года</h1>
                <div class="hr"></div>
                <div class="div">
                    <p>Столько индивидуальных заказов мы выполнили за все время</p>
                </div>
            </div>
            <div class="content-item">
                <h1 class="pink">3,5</h1>
                <h1 class="grey">года</h1>
                <div class="hr"></div>
                <div class="div">
                    <p>Это приблизительное кол-во положительных отзывов от наших клиентов</p>
                </div>
            </div>
            <div class="content-item">
                <h1 class="pink">3,5</h1>
                <h1 class="grey">года</h1>
                <div class="hr"></div>
                <div class="div">
                    <p>Столько бортиков мы сшили за время нашего существования</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SixBlock"
    }
</script>

<style scoped>


    @media screen and (min-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background: white;

            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 46px;
            color: #6b6b6b;
        }

        .content-items {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            grid-template-rows: 37px 37px 37px 0px;
            width: 240px;
            min-height: 225px;
        }

        .pink {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: rgb(230, 150, 150);
        }

        .grey {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: #6b6b6b;
        }

        .hr {
            background-color: #e0e0e0;
            height: 1px;
            opacity: 1;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            box-sizing: content-box;
        }

        .content-item > div {
            width: 240px;
            height: 1px;
            font-size: 22px;
            line-height: 28px;
            text-align: center;
            color: #6b6b6b;
        }
        .div {
            height: 110px;
        }

    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background: white;

            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 46px;
            color: #6b6b6b;
        }

        .content-items {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            grid-template-rows: 37px 37px 37px 0px;
            width: 220px;
            min-height: 225px;
        }

        .pink {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: rgb(230, 150, 150);
        }

        .grey {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: #6b6b6b;
        }

        .hr {
            background-color: #e0e0e0;
            height: 1px;
            opacity: 1;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            box-sizing: content-box;
        }

        .content-item > div {
            width: 220px;
            height: 1px;
            font-size: 22px;
            line-height: 28px;
            text-align: center;
            color: #6b6b6b;
        }
        .div {
            height: 110px;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background: white;

            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 46px;
            color: #6b6b6b;
            text-align: center;
        }

        .content-items {
            display: grid;

            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            grid-template-rows: 37px 37px 37px 0px;
            min-height: 225px;
        }

        .pink {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: rgb(230, 150, 150);
        }

        .grey {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: #6b6b6b;
        }

        .hr {
            background-color: #e0e0e0;
            height: 1px;
            opacity: 1;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            box-sizing: content-box;
        }

        .content-item > div {
            width: 220px;
            height: 1px;
            font-size: 22px;
            line-height: 28px;
            text-align: center;
            color: #6b6b6b;
        }
        .div {
            height: 110px;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background: white;

            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 46px;
            color: #6b6b6b;
            text-align: center;
        }

        .content-items {
            display: grid;

            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            grid-template-rows: 37px 37px 37px 0px;
            min-height: 225px;
        }

        .pink {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: rgb(230, 150, 150);
        }

        .grey {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: #6b6b6b;
        }

        .hr {
            background-color: #e0e0e0;
            height: 1px;
            opacity: 1;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            box-sizing: content-box;
        }

        .content-item > div {
            width: 220px;
            height: 1px;
            font-size: 22px;
            line-height: 28px;
            text-align: center;
            color: #6b6b6b;
        }
        .div {
            height: 110px;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            background: white;

            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 46px;
            color: #6b6b6b;
            text-align: center;
        }

        .content-items {
            display: grid;

            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            grid-template-rows: 37px 37px 37px 0px;
            min-height: 225px;
            padding-bottom: 60px;
        }

        .pink {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: rgb(230, 150, 150);
        }

        .grey {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
            color: #6b6b6b;
        }

        .hr {
            background-color: #e0e0e0;
            height: 1px;
            opacity: 1;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            box-sizing: content-box;
        }

        .content-item > div {
            width: 150px;
            height: 1px;
            font-size: 22px;
            line-height: 28px;
            text-align: center;
            color: #6b6b6b;
        }
        .div {
            height: 110px;
        }
    }

</style>
