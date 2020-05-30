<template>
    <section class="content">
        <h1>
            4 шага воплощения ваших идей
        </h1>

        <div class="composition-item recoordinate">
            <div>
                <div class="composition-block">
                    <div class="circle">
                        1
                    </div>
                    <div class="inblock">
                        <h3>Обсуждаем идею</h3>
                        <p>Обговариваем с вами размеры, комплектность, подбираем ткань.
                            После этого Вы вносите предоплату 30% от общей стоимости, и мы принимаем заказ в работу.</p>
                        <div class="image-cont">
                            <img src="https://thumb.tildacdn.com/tild3363-6639-4237-b730-623137303536/-/resize/100x/-/format/webp/Frame_149_1.png"
                                 alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="composition-block">
                    <div class="circle">
                        2
                    </div>
                    <div class="inblock">
                        <h3>Обсуждаем идею</h3>
                        <p>Обговариваем с вами размеры, комплектность, подбираем ткань.
                            После этого Вы вносите предоплату 30% от общей стоимости, и мы принимаем заказ в работу.</p>
                        <div class="image-cont">
                            <img src="https://thumb.tildacdn.com/tild3363-6639-4237-b730-623137303536/-/resize/100x/-/format/webp/Frame_149_1.png"
                                 alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="composition-block">
                    <div class="circle">
                        3
                    </div>
                    <div class="inblock">
                        <h3>Обсуждаем идею</h3>
                        <p>Мы разрабатываем лекала изделий, если это что-то новое для нас. Заказываем материалы, и портной шьет все изделия.</p>
                        <div class="image-cont">
                            <img src="https://thumb.tildacdn.com/tild3363-6639-4237-b730-623137303536/-/resize/100x/-/format/webp/Frame_149_1.png"
                                 alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="composition-block">
                    <div class="circle">
                        4
                    </div>
                    <div class="inblock">
                        <h3>Обсуждаем идею</h3>
                        <p>По готовности заказа мы делаем подробный фото отчет изделий, и менеджер высылает его Вам на подтверждение, чтобы убедиться, что все сделано верно.</p>
                        <div class="image-cont">
                            <img src="https://thumb.tildacdn.com/tild3363-6639-4237-b730-623137303536/-/resize/100x/-/format/webp/Frame_149_1.png"
                                 alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FourthBlock"
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

        .composition-item {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            grid-gap: 20px;
            z-index: 2;
        }

        .recoordinate {
            z-index: 0 !important;
        }

        .container-circle {
            display: grid;
            width: 260px;

            justify-content: center;
            align-items: center;
        }

        .composition-block {
            position: relative;
            width: 260px;
            border: 1px solid rgb(255, 255, 255);
            background-color: rgb(234, 240, 251);
            border-radius: 7px;

            padding-top: 55px;
            z-index: 1;
            min-height: 345px;
        }

        .inblock {
            display: grid;

            padding: 30px;
            width: 200px;
        }

        .inblock > h3 {
            font-size: 26px;
            text-align: left;
            color: #d0a3a3;
            padding: 10px 0px 10px 0px;
        }

        .inblock {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .image-cont {
            display: grid;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;

            justify-content: center;
            align-items: center;
        }

        .image-cont > img {
            max-width: 100px;
        }

        .circle {
            display: grid;

            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            color: #d0a3a3;
            font-size: 48px;

            width: 72px;
            height: 72px;

            position: absolute;
            left: 37%;
            right: 0;
            top: -37px;
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

        .composition-item {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            grid-gap: 20px;
            z-index: 2;
        }

        .recoordinate {
            z-index: 0 !important;
        }


        .composition-block {
            position: relative;
            width: 220px;
            border: 1px solid rgb(255, 255, 255);
            background-color: rgb(234, 240, 251);
            border-radius: 7px;

            padding-top: 55px;
            z-index: 1;
            min-height: 425px;
        }

        .inblock {
            display: grid;

            padding: 30px;
            width: 160px;
        }

        .inblock > h3 {
            font-size: 26px;
            text-align: left;
            color: #d0a3a3;
            padding: 10px 0px 10px 0px;
        }

        .inblock {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .image-cont {
            display: grid;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;

            justify-content: center;
            align-items: center;
        }

        .image-cont > img {
            max-width: 100px;
        }

        .circle {
            display: grid;

            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            color: #d0a3a3;
            font-size: 48px;

            width: 72px;
            height: 72px;

            position: absolute;
            left: 33%;
            right: 0;
            top: -37px;
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
            text-align: center;
        }

        .composition-item {
            display: grid;

            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;

            grid-gap: 20px;
            z-index: 2;
        }

        .recoordinate {
            z-index: 0 !important;
        }

        .recoordinate > div {
            padding: 40px;
        }

        .composition-block {
            position: relative;
            border: 1px solid rgb(255, 255, 255);
            background-color: rgb(234, 240, 251);
            border-radius: 7px;

            padding-top: 55px;
            height: 300px;
            z-index: 1;
        }

        .inblock {
            display: grid;

            padding: 30px;
        }

        .inblock > h3 {
            font-size: 26px;
            text-align: left;
            color: #d0a3a3;
            padding: 10px 0px 10px 0px;
        }

        .inblock {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .image-cont {
            display: grid;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;

            justify-content: center;
            align-items: center;
        }

        .image-cont > img {
            max-width: 100px;
        }


        .circle {
            display: grid;

            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            color: #d0a3a3;
            font-size: 48px;

            width: 72px;
            height: 72px;

            position: absolute;
            left: 47%;
            right: 0;
            top: -37px;
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
            text-align: center;
        }

        .composition-item {
            display: grid;

            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;

            grid-gap: 20px;
            z-index: 2;
        }

        .recoordinate {
            z-index: 0 !important;
        }

        .recoordinate > div {
            padding: 40px;
        }

        .composition-block {
            position: relative;
            border: 1px solid rgb(255, 255, 255);
            background-color: rgb(234, 240, 251);
            border-radius: 7px;

            padding-top: 55px;
            height: 300px;
            z-index: 1;
        }

        .inblock {
            display: grid;

            padding: 30px;
        }

        .inblock > h3 {
            font-size: 26px;
            text-align: left;
            color: #d0a3a3;
            padding: 10px 0px 10px 0px;
        }

        .inblock {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .image-cont {
            display: grid;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;

            justify-content: center;
            align-items: center;
        }

        .image-cont > img {
            max-width: 100px;
        }


        .circle {
            display: grid;

            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            color: #d0a3a3;
            font-size: 48px;

            width: 72px;
            height: 72px;

            position: absolute;
            left: 47%;
            right: 0;
            top: -37px;
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
            text-align: center;
        }

        .composition-item {
            display: grid;

            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;

            grid-gap: 20px;
            z-index: 2;
        }

        .recoordinate {
            z-index: 0 !important;
        }

        .recoordinate > div {
            padding: 40px;
        }

        .composition-block {
            position: relative;
            border: 1px solid rgb(255, 255, 255);
            background-color: rgb(234, 240, 251);
            border-radius: 7px;

            padding-top: 55px;
            height: 300px;
            z-index: 1;
        }

        .inblock {
            display: grid;

            padding: 30px;
        }

        .inblock > h3 {
            font-size: 26px;
            text-align: left;
            color: #d0a3a3;
            padding: 10px 0px 10px 0px;
        }

        .inblock {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .image-cont {
            display: grid;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;

            justify-content: center;
            align-items: center;
        }

        .image-cont > img {
            max-width: 100px;
        }


        .circle {
            display: grid;

            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            color: #d0a3a3;
            font-size: 48px;

            width: 72px;
            height: 72px;

            position: absolute;
            left: 38%;
            right: 0;
            top: -37px;
        }
    }

</style>
