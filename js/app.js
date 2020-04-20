const social= [
    {
        type: 'page views',
        number: 87,
        img: '../images/icon-facebook.svg',
        percentage: 3
    },
    {
        type: 'likes',
        number: 52,
        img: '../images/icon-facebook.svg',
        percentage: 2
    },
    {
        type: 'likes',
        number: 5462,
        img: '../images/icon-instagram.svg',
        percentage: 2257
    },
    {
        type: 'profile views',
        number: 52000,
        img: '../images/icon-instagram.svg',
        percentage: 1375
    },
    {
        type: 'retweets',
        number: 117,
        img: '../images/icon-twitter.svg',
        percentage: 303
    },
    {
        type: 'likes',
        number: 507,
        img: '../images/icon-twitter.svg',
        percentage: 553
    },
    {
        type: 'likes',
        number: 107,
        img: '../images/icon-youtube.svg',
        percentage: 19
    },
    {
        type: 'total views',
        number: 1407,
        img: '../images/icon-youtube.svg',
        percentage: 12
    }
];

new Vue({
    el:".daily",
    data: {
        social: social
    },
    methods:{

    }
});