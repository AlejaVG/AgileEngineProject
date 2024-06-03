const Link = {
    title: '',
    url: ''
}

const Hero = {
   headingImage: '',
   headingAtribute: '',
   languageOptions: [Link],
   menuOptions: [Link]
}

const HeroEsteeLauder = {
   headingImage: /estee_lauder-logo-white-thick-660.png/,
   headingAtribute: 'Estée Lauder Companies Logo',
   menuOptions:[
    {title:'Who We Are', url: '/en/who-we-are'},
    {title:'Our Brands', url: '/en/our-brands'},
    {title:'Our Impact', url: '/en/our-impact'},
    {title:'Careers', url: '/en/careers'},
    {title:'News & Media', url: '/en/news-and-media'},
    {title:'Investors', url: '/en/investors'}
   ]
};
const SocialShareIcons = {
   shareOptions:[
    {title:'Email to your friend', url: /mailto/},
    {title:'Share on Facebook', url: 'http://www.facebook.com/sharer.php?u=https://www.elcompanies.com/en'},
    {title:'Share on Linkedin', url: 'http://www.linkedin.com/shareArticle?mini=true&url=https://www.elcompanies.com/en'},
    {title:'Share on Twitter', url: 'http://twitter.com/home/?status=https://www.elcompanies.com/en'}
   ]
};

module.exports = {Link, Hero, HeroEsteeLauder, SocialShareIcons}