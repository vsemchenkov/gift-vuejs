<template>
    <div class="content">
        <h1>Что умеет мобиль из фетра?</h1>
        <div class="content-items">
            <div class="content-item">
                <div class="contain-image">
                    <img src="https://static.tildacdn.com/lib/tildaicon/31306266-3563-4932-a430-626264656163/gymnastics.svg"
                         alt="">
                </div>
                <div class="container-info">
                    <h5>Развивает</h5>
                    <p>Стимулирует развитие зрения и слуха, моторики рук и ног</p>
                </div>
            </div>
            <div class="content-item">
                <div class="contain-image">
                    <img src="https://static.tildacdn.com/lib/tildaicon/31306266-3563-4932-a430-626264656163/gymnastics.svg"
                         alt="">
                </div>
                <div class="container-info">
                    <h5>Развивает</h5>
                    <p>Стимулирует развитие зрения и слуха, моторики рук и ног</p>
                </div>
            </div>
            <div class="content-item">
                <div class="contain-image">
                    <img src="https://static.tildacdn.com/lib/tildaicon/31306266-3563-4932-a430-626264656163/gymnastics.svg"
                         alt="">
                </div>
                <div class="container-info">
                    <h5>Развивает</h5>
                    <p>Стимулирует развитие зрения и слуха, моторики рук и ног</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MThirdBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            padding-top: 150px;
            padding-bottom: 150px;
            padding-left: 10%;
            padding-right: 10%;

            background-color:#f5f2f0;

        }

        .content > h1 {
            font-size: 42px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
            padding-bottom: 100px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr;
        }

        .content-items > .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            text-align: center;

            margin-left: 20px;
            margin-right: 20px;

        }

        .container-info {
            padding-left: 20px;
            padding-right: 20px;
        }

        .container-info > h5 {
            margin-bottom: 25px;
            margin-top: 12px;
            font-size: 30px;
            line-height: 1.17;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .container-info > p {
            font-size: 16px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .contain-image {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .contain-image > img {
            display: grid;
            justify-content: center;
            align-items: center;

            width: 100px;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            padding-top: 150px;
            padding-bottom: 150px;
            padding-left: 10%;
            padding-right: 10%;

            background-color:#f5f2f0;


        }

        .content > h1 {
            font-size: 42px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
            padding-bottom: 100px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr;
        }

        .content-items > .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            text-align: center;

            margin-left: 20px;
            margin-right: 20px;

        }

        .container-info {
            padding-left: 20px;
            padding-right: 20px;
        }

        .container-info > h5 {
            margin-bottom: 25px;
            margin-top: 12px;
            font-size: 30px;
            line-height: 1.17;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .container-info > p {
            font-size: 16px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .contain-image {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .contain-image > img {
            display: grid;
            justify-content: center;
            align-items: center;

            width: 100px;
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            padding-bottom: 0px;
            padding-top: 150px;
            padding-left: 10%;
            padding-right: 10%;

        }

        .content > h1 {
            font-size: 42px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
            padding-bottom: 100px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
        }

        .content-items > .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            text-align: center;

            margin-left: 20px;
            margin-right: 20px;

        }

        .container-info {
            padding-left: 20px;
            padding-right: 20px;
        }

        .container-info > h5 {
            margin-bottom: 25px;
            margin-top: 12px;
            font-size: 30px;
            line-height: 1.17;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .container-info > p {
            font-size: 16px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-bottom: 40px;
        }

        .contain-image {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .contain-image > img {
            display: grid;
            justify-content: center;
            align-items: center;

            width: 100px;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            padding-bottom: 0px;
            padding-top: 150px;
            padding-left: 10%;
            padding-right: 10%;

        }

        .content > h1 {
            font-size: 42px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
            padding-bottom: 100px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
        }

        .content-items > .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            text-align: center;

            margin-left: 20px;
            margin-right: 20px;

        }

        .container-info {
            padding-left: 20px;
            padding-right: 20px;
        }

        .container-info > h5 {
            margin-bottom: 25px;
            margin-top: 12px;
            font-size: 30px;
            line-height: 1.17;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .container-info > p {
            font-size: 16px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-bottom: 40px;
        }

        .contain-image {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .contain-image > img {
            display: grid;
            justify-content: center;
            align-items: center;

            width: 100px;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;

            padding-bottom: 0px;
            padding-top: 150px;
            padding-left: 10%;
            padding-right: 10%;

        }

        .content > h1 {
            font-size: 42px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
            padding-bottom: 100px;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
        }

        .content-items > .content-item {
            display: grid;

            justify-content: center;
            align-items: center;
            text-align: center;

            margin-left: 20px;
            margin-right: 20px;

        }

        .container-info {
            padding-left: 20px;
            padding-right: 20px;
        }

        .container-info > h5 {
            margin-bottom: 25px;
            margin-top: 12px;
            font-size: 30px;
            line-height: 1.17;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .container-info > p {
            font-size: 16px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-bottom: 40px;
        }

        .contain-image {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .contain-image > img {
            display: grid;
            justify-content: center;
            align-items: center;

            width: 100px;
        }
    }
</style>
