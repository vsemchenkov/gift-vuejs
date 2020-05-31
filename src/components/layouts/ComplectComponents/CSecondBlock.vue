<template>
    <div class="content">
        <h1>Как бортики способствуют крепкому сну малыша?</h1>
        <div class="content-items">
            <div class="content-item">
                <div class="information-items">
                    <div class="information-item">
                        <div class="image-container">
                            <img src="https://thumb.tildacdn.com/tild3639-3835-4066-b632-666466666466/-/cover/65x65/center/center/-/format/webp/icons8---64.png" alt="">
                        </div>
                        <h1>Защищают от ударов о стенки кроватки</h1>
                        <p>Когда у малышей начинается активный период, удары о стенки кроватки являются довольно распространенной проблемой. Конечно он не нанесет себе увечий, но сон малыша будет нарушен.</p>
                    </div>
                    <div class="information-item">
                        <div class="image-container">
                            <img src="https://thumb.tildacdn.com/tild3639-3835-4066-b632-666466666466/-/cover/65x65/center/center/-/format/webp/icons8---64.png" alt="">
                        </div>
                        <h1>Защищают от ударов о стенки кроватки</h1>
                        <p>Когда у малышей начинается активный период, удары о стенки кроватки являются довольно распространенной проблемой. Конечно он не нанесет себе увечий, но сон малыша будет нарушен.</p>
                    </div>
                    <div class="information-item">
                        <div class="image-container">
                            <img src="https://thumb.tildacdn.com/tild3639-3835-4066-b632-666466666466/-/cover/65x65/center/center/-/format/webp/icons8---64.png" alt="">
                        </div>
                        <h1>Защищают от ударов о стенки кроватки</h1>
                        <p>Когда у малышей начинается активный период, удары о стенки кроватки являются довольно распространенной проблемой. Конечно он не нанесет себе увечий, но сон малыша будет нарушен.</p>
                    </div>
                    <div class="information-item">
                        <div class="image-container">
                            <img src="https://thumb.tildacdn.com/tild3639-3835-4066-b632-666466666466/-/cover/65x65/center/center/-/format/webp/icons8---64.png" alt="">
                        </div>
                        <h1>Защищают от ударов о стенки кроватки</h1>
                        <p>Когда у малышей начинается активный период, удары о стенки кроватки являются довольно распространенной проблемой. Конечно он не нанесет себе увечий, но сон малыша будет нарушен.</p>
                    </div>
                </div>
            </div>
            <div class="content-item">
                <img src="https://thumb.tildacdn.com/tild3332-3639-4962-b235-353966343963/-/resize/560x/-/format/webp/IMG_5431.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CSecondBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }
        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding: 80px;
        }
        .content-items {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: start;

            height: 100%;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px
        }
        .information-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        .information-item {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 1fr ;

            grid-template-areas:
                    "img h1"
                    "img p";
            grid-gap: 20px;
            padding-bottom: 40px;
        }

        .information-item > div {
            grid-area: img;
        }
        .information-item > h1 {
            grid-area: h1;
            font-size: 28px;
            line-height: 1.17;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .information-item > p {
            grid-area: p;
            font-size: 14px;
            line-height: 1.55;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }
        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding: 80px;
        }
        .content-items {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: start;

            height: 100%;
            grid-template-columns: 1fr;
            grid-gap: 20px
        }
        .information-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        .information-item {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 1fr ;

            grid-template-areas:
                    "img h1"
                    "img p";
            grid-gap: 20px;
            padding-bottom: 40px;
        }

        .information-item > div {
            grid-area: img;
        }
        .information-item > h1 {
            grid-area: h1;
            font-size: 28px;
            line-height: 1.17;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .information-item > p {
            grid-area: p;
            font-size: 14px;
            line-height: 1.55;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 100%;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }
        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 80px;
            padding-top: 80px;
        }
        .content-items {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: start;

            height: 100%;
            grid-template-columns: 1fr;
            grid-gap: 20px
        }
        .information-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        .information-item {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 1fr ;

            grid-template-areas:
                    "img h1"
                    "img p";
            grid-gap: 20px;
            padding-bottom: 40px;
        }

        .information-item > div {
            grid-area: img;
        }
        .information-item > h1 {
            grid-area: h1;
            font-size: 28px;
            line-height: 1.17;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .information-item > p {
            grid-area: p;
            font-size: 14px;
            line-height: 1.55;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 100%;
        }


    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }
        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 80px;
            padding-top: 80px;
        }
        .content-items {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: start;

            height: 100%;
            grid-template-columns: 1fr;
            grid-gap: 20px
        }
        .information-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        .information-item {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 1fr ;

            grid-template-areas:
                    "img h1"
                    "img p";
            grid-gap: 20px;
            padding-bottom: 40px;
        }

        .information-item > div {
            grid-area: img;
        }
        .information-item > h1 {
            grid-area: h1;
            font-size: 28px;
            line-height: 1.17;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .information-item > p {
            grid-area: p;
            font-size: 14px;
            line-height: 1.55;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 100%;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }
        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 80px;
            padding-top: 80px;
        }
        .content-items {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: start;

            height: 100%;
            grid-template-columns: 1fr;
            grid-gap: 20px
        }
        .information-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        .information-item {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 1fr ;

            grid-template-areas:
                    "img h1"
                    "img p";
            grid-gap: 20px;
            padding-bottom: 40px;
        }

        .information-item > div {
            grid-area: img;
        }
        .information-item > h1 {
            grid-area: h1;
            font-size: 28px;
            line-height: 1.17;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .information-item > p {
            grid-area: p;
            font-size: 14px;
            line-height: 1.55;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-item {
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .content-item > img {
            width: 100%;
        }

    }
</style>
