<template>
    <div class="content">
        <h1>Наша мастерская</h1>
        <div class="content-items">
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3039-3666-4363-b838-363166636266/SAV08291.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3030-3139-4033-b232-346661663633/SAV08452.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3763-6631-4236-a132-616430666565/SAV08206.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3939-3035-4264-b931-346432666239/SAV08423.jpg" alt="">
            </div>
            <div class="content-item" hidden>
                <img class="item-moon" src="https://static.tildacdn.com/tild6439-3866-4630-a236-653364363863/Frame_158.png" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3565-6635-4335-a633-613862346434/SAV08492.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3339-3438-4661-a330-323438323332/SAV08137.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3932-3463-4338-a134-616233656230/SAV08079.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="https://static.tildacdn.com/tild3736-3836-4638-a265-313936393536/SAV08396.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EighthBlock"
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
            font-family: 'IskraCYR',Arial,sans-serif;
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

            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 380px;
        }
        .content-item > .item-moon {
            background-position: center center;
            width: 255px !important;
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
            font-family: 'IskraCYR',Arial,sans-serif;
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

            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 300px;
        }
        .content-item > .item-moon {
            background-position: center center;
            width: 205px !important;
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
            font-family: 'IskraCYR',Arial,sans-serif;
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

            grid-template-columns: 1fr 1fr ;

            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 300px;
        }
        [hidden] {
            display: none;
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
            font-family: 'IskraCYR',Arial,sans-serif;
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
        .content-item > img {
            width: 370px;
        }
        [hidden] {
            display: none;
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
            font-family: 'IskraCYR',Arial,sans-serif;
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
        .content-item > img {
            width: 300px;
        }
        [hidden] {
            display: none;
        }
    }

</style>
