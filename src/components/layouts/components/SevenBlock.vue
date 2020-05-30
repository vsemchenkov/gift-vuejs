<template>
    <div class="content">
        <h1>Какие материалы мы используем</h1>
        <div class="content-items">
            <div class="content-item">
                <div class="content-image">
                    <img src="https://static.tildacdn.com/tild3434-3266-4537-a430-663131383235/Frame_154.png" alt="">
                </div>
                <p>100 % хлопок</p>
                <span class="field">‣ Обладает высокой воздухопроницаемостью и поэтому «дышит»;</span>
                <span class="field">‣ Не липнет к телу и создает комфортный микроклимат на поверхности кожи;</span>
                <span class="field">‣ Гигроскопичен, что позволяет впитывать лишнюю влагу с тела малыша;</span>
            </div>
            <div class="content-item">
                <div class="content-image">
                    <img src="https://static.tildacdn.com/tild6535-3862-4237-a265-353163373961/Frame_155.png" alt="">
                </div>
                <p>Холлофайбер</p>
                <span class="field">‣ Не вызывает аллергию
                    (в отличие от того же пуха);</span>

                <span class="field">‣ Не впитывает запахов;</span>

                <span class="field">‣ Гигиеничный, в нем не заводятся паразиты, так как нет патогенной среды для их развития;</span>
            </div>
            <div class="content-item">
                <div class="content-image">
                    <img src="https://static.tildacdn.com/tild6138-3163-4665-a262-303632363362/Frame_157.png" alt="">
                </div>
                <p>Репсовые ленты</p>
                <span class="field">‣ Более износостойкие чем атласные ленты;</span>

                <span class="field">‣ Благодаря рифленой структуре, крепче держат завязанный узел</span>

                <span class="field">‣ Гипоаллергенны,
                    безопасны для малышей;</span>
            </div>
            <div class="content-item">
                <div class="content-image">
                    <img src="https://static.tildacdn.com/tild6165-3862-4136-a331-626334346639/Frame_156.png" alt="">
                </div>
                <p>Плюш Minky Dot</p>
                <span class="field">‣ Очень приятен на ощупь, будет развивать тактильные ощущения малыша;</span>

                <span class="field">‣ Обладает высокой гигроскопичностью, может выступать в качестве барьера для влаги;</span>

                <span class="field">‣ Очень быстро сохнет.</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SevenBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;


            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            color: #6b6b6b;
            font-size: 46px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            width: 260px;
        }

        .content-item > div {
            display: grid;
            justify-content: center;
        }

        .content-item > div > img {
            width: 260px;
            border-radius: 7px;
        }

        .content-item > p {
            color: #d0a3a3;
            font-size: 26px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
            position: relative;
            bottom: 70px;
        }

        .content-item > span {
            display: none;
        }
        .content-image {
            display: grid;
            justify-content: center;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;


            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            color: #6b6b6b;
            font-size: 46px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            width: 180px;
        }

        .content-item > div {
            display: grid;
            justify-content: center;
        }

        .content-item > div > img {
            width: 180px;
            border-radius: 7px;
        }

        .content-item > p {
            color: #d0a3a3;
            font-size: 22px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
            position: relative;
            bottom: 55px;
        }

        .content-item > span {
            display: none;
        }
        .content-image {
            display: grid;
            justify-content: center;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;


            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            color: #6b6b6b;
            font-size: 46px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .content-item > div {
            display: grid;
            justify-content: center;
        }

        .content-item > div > img {
            width: 187px;
            border-radius: 7px;
            text-align: center;
        }

        .content-item > p {
            color: #d0a3a3;
            font-size: 22px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
            position: relative;
            bottom: 55px;
        }

        .content-item > span {
            position: relative;
            max-width: 180px;
            text-align: center;
            padding-bottom: 10px;

            color: #666565;
            font-size: 16px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        };
        .content-image {
            display: grid;
            justify-content: center;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;


            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            color: #6b6b6b;
            font-size: 46px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .content-item > div {
            display: grid;
            justify-content: center;
        }

        .content-item > div > img {
            width: 270px;
            border-radius: 7px;
            text-align: center;
        }

        .content-item > p {
            color: #d0a3a3;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
            position: relative;
            bottom: 63px;
        }

        .content-item > span {
            position: relative;
            max-width: 270px;
            text-align: center;
            padding-bottom: 10px;

            color: #666565;
            font-size: 16px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        };
        .content-image {
            display: grid;
            justify-content: center;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;


            padding-bottom: 75px;
        }

        .content > h1 {
            padding-top: 40px;
            padding-bottom: 40px;
            color: #6b6b6b;
            font-size: 46px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .content-item > div {
            display: grid;
            justify-content: center;
        }

        .content-item > div > img {
            width: 270px;
            border-radius: 7px;
            text-align: center;
        }


        .content-item > p {
            color: #d0a3a3;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 500;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
            text-align: center;
            position: relative;
            bottom: 63px;
        }

        .content-item > span {
            position: relative;
            max-width: 270px;
            text-align: center;
            padding-bottom: 10px;

            color: #666565;
            font-size: 16px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 400;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        };
    }
</style>
