<template>
    <div class="content">
        <h1>Фото отзывы наших довольных мам</h1>
        <div class="content-items">
            <div>
                <div class="content-item img1"></div>
            </div>
            <div>
                <div class="content-item img3"></div>
            </div>
            <div>
                <div class="content-item img2"></div>
            </div>
            <div>
                <div class="content-item img4"></div>
            </div>
            <div>
                <div class="content-item img5"></div>
            </div>
            <div>
                <div class="content-item img6"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CSevenBlock"
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
            font-size: 42px;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .img1:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img2:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img3:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img4:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img5:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img6:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img1 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img2 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img3 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img4 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img5 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img6 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
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
            font-size: 42px;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }

        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .img1:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img2:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img3:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img4:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img5:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img6:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img1 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img2 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img3 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img4 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img5 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img6 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
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
            font-size: 42px;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .img1:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img2:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img3:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img4:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img5:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img6:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img1 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img2 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img3 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img4 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img5 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img6 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .img1:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img2:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img3:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img4:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img5:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img6:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img1 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img2 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img3 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img4 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img5 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img6 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            color: #4a4949;
            text-align: center;
            padding-bottom: 60px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .img1:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img2:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img3:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img4:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img5:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img6:hover {
            background-size: 105%;
            transition: 0.2s linear;
        }

        .img1 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img2 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img3 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img4 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img5 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }

        .img6 {
            width: 360px;
            height: 300px;
            background-size: 100%;
            background-position: center center;
            background-image: url("https://thumb.tildacdn.com/tild6638-3134-4834-b531-333339666234/-/cover/600x500/center/center/-/format/webp/49579999_79304883102.jpg");
            transition: 0.2s linear;
            cursor: pointer;
        }
    }

</style>
