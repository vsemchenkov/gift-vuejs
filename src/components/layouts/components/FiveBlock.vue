<template>
    <section class="content">
        <div class="content-img">
        <img width="100%" src="https://static.tildacdn.com/tild3062-3232-4237-b932-396338306632/Frame_113_2.png" alt="">
            <div class="information">
                <h4>Основатель студии</h4>
                <h1>Елена кузнецова</h1>
                <img width="20px" src="https://static.tildacdn.com/tild3361-3935-4237-b138-323731616330/left-quotes-sign.svg" alt="">
                <p>Здравствуйте! Меня зовут Елена. Я основатель студии, а по совместительству мама двух замечательных сыночков.</p><br>

                <p>В нашей студии Вы можете заказать индивидуальный пошив детского текстиля. Мы можем предложить свои идеи, уже выполненные работы, которые можно повторить точь-в-точь или воплотим Ваши задумки.</p><br>

                <p>В любом случае Вы получите изделия высокого качества, идеально подходящее по размерам именно Вашей кроватки, в расцветке подходящей к интерьеру Вашей комнаты.</p><br>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FiveBlock"
    }
</script>

<style scoped>


    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding: 100px;
            background: white;
        }
        .content > img {
            width: calc(100% - 100px);
        }
        .content-img {
            display: grid;
        }
        .content-img > img {
            width: 100%;
        }
        .information {
            position: absolute;
        }
        .information > h4 {
            padding: 50px 60px 0px 80px;
            color: #dbabab;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > h1 {
            padding: 0px 60px 0px 80px;
            color: #6b6b6b;
            font-size: 40px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > img {
            position: absolute;
            padding: 0px 20px 0px 80px;
        }
        .information > p {
            padding: 0px 80px 0px 110px;
            width: 400px;
            color: #6b6b6b;
            font-size: 16px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding: 100px;
            background: white;
        }
        .content-img {
            display: grid;
        }
        .content-img > img {
            width: 100%;
        }
        .information {
            position: absolute;
        }
        .information > h4 {
            padding: 50px 60px 0px 80px;
            color: #dbabab;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > h1 {
            padding: 0px 60px 0px 80px;
            color: #6b6b6b;
            font-size: 40px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > img {
            position: absolute;
            padding: 0px 20px 0px 80px;
        }
        .information > p {
            padding: 0px 80px 0px 110px;
            width: 400px;
            color: #6b6b6b;
            font-size: 14px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            background: white;
        }
        .content-img {
            display: grid;
            background-position: center center;
            overflow: hidden;
        }
        .content-img > img {
            max-width: 100%;
            min-width: 800px;
        }

        .information {
            position: absolute;
            background-position: center center;
        }
        .information > h4 {
            padding: 50px 60px 0px 80px;
            color: #dbabab;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > h1 {
            padding: 0px 60px 0px 80px;
            color: #6b6b6b;
            font-size: 40px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > img {
            position: absolute;
            padding: 0px 20px 0px 80px;
        }
        .information > p {
            padding: 0px 80px 0px 110px;
            width: 400px;
            color: #6b6b6b;
            font-size: 12px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            background: white;
        }
        .content-img {
            display: grid;
            background-position: center center;
            overflow: hidden;
        }
        .content-img > img {
            max-width: 100%;
            min-width: 200px;
        }

        .information {
            background-position: center center;
        }
        .information > h4 {
            padding: 50px 60px 0px 80px;
            color: #dbabab;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > h1 {
            padding: 0px 60px 0px 80px;
            color: #6b6b6b;
            font-size: 40px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > img {
            position: absolute;
            padding: 0px 20px 0px 80px;
        }
        .information > p {
            padding: 0px 80px 0px 110px;
            width: 300px;
            color: #6b6b6b;
            font-size: 12px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            background: white;
        }
        .content-img {
            display: grid;
            background-position: center center;
            overflow: hidden;
        }
        .content-img > img {
            max-width: 100%;
            min-width: 200px;
        }

        .information {
            background-position: center center;
        }
        .information > h4 {
            padding: 50px 60px 0px 60px;
            color: #dbabab;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > h1 {
            padding: 0px 60px 0px 20px;
            color: #6b6b6b;
            font-size: 40px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
        .information > img {
            position: absolute;
            padding: 0px 20px 0px 30px;
        }
        .information > p {
            padding: 0px 80px 0px 60px;
            width: 300px;
            color: #6b6b6b;
            font-size: 12px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }
    }

</style>
