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

const darkCardBg = 'hsl(228, 28%, 20%)';
const whiteCardBg = 'hsl(227, 47%, 96%)'
const darkMainBg = 'hsl(230, 17%, 14%)';
const whiteMainBg = 'hsl(0, 0%, 100%)';
const darkTextSecondary =  'hsl(228, 34%, 66%)';
const darkTextPrimary = 'hsl(0, 0%, 100%)';
const whiteTextSecondary = 'hsl(228, 12%, 44%)';
const whiteTextPrimary = 'hsl(230, 17%, 14%)';

new Vue({
    el:'.wrapper',
    data:{
        social: social,
        light: true,
        background: '',
        textColorP: '',
        textColorH3: ''
        
    },
    methods:{
        darkLight: function(){

            const body= document.querySelector('body');

            if(this.light === true){
                this.background = darkCardBg;
                this.textColorP = darkTextSecondary;
                this.textColorH3 = darkTextPrimary;
                body.style.backgroundColor= darkMainBg;
                this.light = false;
                
                
            }else if(this.light === false){
                this.background=  whiteCardBg;
                this.textColorP = whiteTextSecondary;
                this.textColorH3 = whiteTextPrimary;
                body.style.backgroundColor= whiteMainBg;
                this.light = true;
                
                
            }
            
        }
    }
});