<template>
    <div class="content">
        <h1>Наши партнеры</h1>
        <h3>Назовите промокод "Teplo" при заказе у наших<br> партнеров и получите скидку 10%</h3>
        <div class="content-items">
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3434-3361-4362-b439-633238636261/3072515f-8f0c-4a3a-9.jpg" alt="">
                <a class="link">Pangababy.com</a>
                <p class="desc">Слингомайка для мам и малышей</p>
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3935-3434-4833-b831-383339643463/ed3cc268-e39c-4b49-b.png" alt="">
                <a class="link">ADIWood.ru</a>
                <p class="desc">Ночники ручной работы и декор из дерева</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NinthBlock"
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
            font-size: 42px;
            color: #6b6b6b;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            text-align: center;
        }

        .content > h3 {
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;
        }

        .content-item  {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item > img {
            width: 560px;
        }
        .content-item > a {
            display: grid;
            padding-top: 40px;

            color: #4a4949;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-align: center;
            padding-bottom: 15px;
        }

        .content-item > p {
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
            font-size: 16px;
            line-height: 1.55;
            text-align: center;
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
            font-size: 42px;
            color: #6b6b6b;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            text-align: center;
        }

        .content > h3 {
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;
        }

        .content-item  {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item > img {
            width: 460px;
        }
        .content-item > a {
            display: grid;
            padding-top: 40px;

            color: #4a4949;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-align: center;
            padding-bottom: 15px;
        }

        .content-item > p {
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
            font-size: 14px;
            line-height: 1.55;
            text-align: center;
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
            font-size: 42px;
            color: #6b6b6b;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            text-align: center;
        }

        .content > h3 {
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 40px;
        }

        .content-item  {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item > img {
            width: 600px;
        }
        .content-item > a {
            display: grid;
            padding-top: 40px;

            color: #4a4949;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-align: center;
            padding-bottom: 15px;
        }

        .content-item > p {
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
            font-size: 14px;
            line-height: 1.55;
            text-align: center;
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
            font-size: 42px;
            color: #6b6b6b;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            text-align: center;
        }

        .content > h3 {
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 40px;
        }

        .content-item  {
            display: grid;

            justify-content: center;
            align-items: center;

            box-sizing: content-box;
        }

        .content-item > img {
            width: 80%;
            padding-left: 10%;
            padding-right: 10%;
            box-sizing: content-box;
        }
        .content-item > a {
            display: grid;
            padding-top: 40px;

            color: #4a4949;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-align: center;
            padding-bottom: 15px;
        }

        .content-item > p {
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
            font-size: 14px;
            line-height: 1.55;
            text-align: center;
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
            font-size: 42px;
            color: #6b6b6b;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            text-align: center;
        }

        .content > h3 {
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 40px;
        }

        .content-item  {
            display: grid;

            justify-content: center;
            align-items: center;

            box-sizing: content-box;
        }

        .content-item > img {
            width: 80%;
            padding-left: 10%;
            padding-right: 10%;
            box-sizing: content-box;
        }
        .content-item > a {
            display: grid;
            padding-top: 40px;

            color: #4a4949;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-align: center;
            padding-bottom: 15px;
        }

        .content-item > p {
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
            font-size: 14px;
            line-height: 1.55;
            text-align: center;
        }
    }
</style>
