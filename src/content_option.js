import img1 from './assets/photos/1.jpeg'
import img2 from './assets/photos/2.jpeg'
import img3 from './assets/photos/3.jpeg'
import img4 from './assets/photos/4.jpeg'
import img5 from './assets/photos/5.jpeg'
import img6 from './assets/photos/6.jpeg'
import img7 from './assets/photos/7.jpeg'
import img8 from './assets/photos/8.jpeg'
import img9 from './assets/photos/9.jpeg'
import img10 from './assets/photos/10.jpeg'
import img11 from './assets/photos/11.jpeg'
import img12 from './assets/photos/12.jpeg'
import main from './assets/photos/main.jpeg'

import publication1 from './assets/publications/1.jpeg'
import publication2 from './assets/publications/2.jpeg'
import publication3 from './assets/publications/3.jpeg'
import publication4 from './assets/publications/4.jpeg'
import publication5 from './assets/publications/5.jpeg'
import publication6 from './assets/publications/6.jpeg'
import publication7 from './assets/publications/7.jpeg'
import publication8 from './assets/publications/8.jpeg'
import publication9 from './assets/publications/9.jpeg'
import publication10 from './assets/publications/10.jpeg'
import publication11 from './assets/publications/11.jpeg'
import publication12 from './assets/publications/12.jpeg'
import publication13 from './assets/publications/13.jpeg'
import publication14 from './assets/publications/14.jpeg'
import publication15 from './assets/publications/15.jpeg'
import publication16 from './assets/publications/16.jpeg'
import publication17 from './assets/publications/17.jpeg'
import publication18 from './assets/publications/18.jpeg'
import publication19 from './assets/publications/19.jpeg'
import publication20 from './assets/publications/20.jpeg'

const logotext = "STEIN";
const meta = {
    title: "Olga Stein",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Olga Stein",
    animated: {
        first: "I am artist",
        second: "I run my own art studio",
        third: "I am ukrainian",
    },
    description: "Hello and welcome to my website! My name is Olga and I am artist from Kyiv, Ukraine. Here you can find everything about me!",
    your_img_url: main,
};

const dataabout = {
    title: "Bio",
    aboutme: "Born in Cherkasy in 1997. Graduated with a bachelor&#39;s degree from the Lviv Academy of Arts, Department of\n" +
        "Restoration of Works of Art, in 2018. During studies from 2015 to 2018, practiced at the Potocki Palace Museum.\n" +
        "Also worked as a restorer in temples, including in 2017 artist had an internship at the Garrison Church of the Holy\n" +
        "Apostles Peter and Paul.\n" +
        "Graduated from the Kyiv Academy of Arts, Department of Restoration, in 2020. In 2019 had an internship at the\n" +
        "Kyiv-Pechersk Lavra.\n" +
        "The restoration work, especially practice in churches greatly influenced the formation of artist style and built its\n" +
        "technical basis. Artist works are a combination of figurative painting with a modern interpretation of iconographic\n" +
        "motifs.\n" +
        "She works with mixed media: tempera, oil, pastels and enamels. In her works Stein raises the question of the\n" +
        "adaptability of the church and the canonical visual order, rethink the position of the saints and the interpretation\n" +
        "of major biblical texts in terms of the context of the new spirituality, ethics, morals and feminism.\n" +
        "Founder and curator of the project of the artist- run art space ‘’thesteinstudio’’."
};
const education = [
    {
        years: "2018-2020",
        where: "Kyiv National Academy of Fine Arts and Architecture, Restoration Artist",
        grade: "Master",
    },
    {
        years: "2014-2018",
        where: "Lviv National Academy of Arts, Restoration Artist",
        grade: "Bachelor",
    },
];

const exhibitions = [{
    title: "Solo exhibitions",
    description: "• 2023 January – “1 solar system” Velychko gallery. Limassol, Cyprus\n" +
        "• 2022 May – “La condition humaine” Kalina gallery &amp; Kalina art Advisor, Paris France \n" +
        "• 2017 January – &quot;Man&quot;, Chatka Zaka Gallery, Lublin, Poland.",
},
    {
        title: "Group exhibitions",
        description: "•2023 March – «ART ON THE BATTLEFRONT», Vogue Ukraine and Natalia Cola foundation, online\n" +
            "exhibition\n" +
            "• 2023 April – “One Fine 9” A-spade gallery Curator- Alice Bonnot and Rui Guerreiro. Lisabon, Portugal\n" +
            "• 2023 October – “Anniversary” The Nakedroom gallery and Ukrainian Emergency Art Found. Kyiv,\n" +
            "Ukraine\n" +
            "• 2022 December – «CONTRAPUNCT», Curator- Yana Barinova. Albertina Modern Künstlerhaus. Vienna,\n" +
            "Austria\n" +
            "\n" +
            "• 2022 October – “Opening” TEST Gallery, Curator- Ekateryna Pidgaina. Barcelona, Spain\n" +
            "• 2022 September – “Opening” Helen Ritz gallery. Spain, Valencia\n" +
            "• 2022 July/August – “Sensing places” ODP gallery. Curator- OSTOV art collective. Leipzig, Germany\n" +
            "• 2022 July – “Tunnel vision”, Isnotgallery together with Velychko gallery. Nicosia, Cyprus\n" +
            "• 2022 June – “Art for Sanity: Reverse Perspective of War”. Kulturális Muhely. Budapest, Hungary\n" +
            "• 2022 May – “Context” Gallery Morfi together with Velychko gallery. Limassol, Cyprus\n" +
            "• 2022 May – “Artists Agains War” Fundacio Palo Alto. Curator- Ekaterina Pidgaina. Spaine, Barcelona.\n" +
            "• 2021 November – “Collectors club. Open dayIV” artist-run space &amp;Theshteinstudio. Kiev, Ukraine\n" +
            "• 2021 August – “To the studio&quot;, group exhibition and group performance, artist-run space\n" +
            "&amp;Theshteinstudio. Lviv, Ukraine\n" +
            "• 2021 May – “Fair of ultra-contemporary Ukrainian art. Open dayIII”. artist-run space &amp;Theshteinstudio.\n" +
            "Kiev, Ukraine\n" +
            "• 2020 December – “First open day” artist-run space &amp;Theshtinstudio. Kiev, Ukraine\n" +
            "• 2020 – &quot;Art in Isolation&quot; Santa Clarita Art virtual gallery, California, USA;\n" +
            "• 2019 – &quot;NA.MI.STO&quot; - a group project with the support of the Ukrainian Cultural Foundation together\n" +
            "with NAOMA and Khanenko Museum; Kyiv Ukraine\n" +
            "• 2018 – Gallery Seasons “Winter Preview” Lviv, Ukraine;\n" +
            "• 2017 – Gallery Seasons “Samer Preview” Lviv, Ukraine",
    },
    {
        title: "Residencies",
        description: "•2023 May – Velychko gallery. Limassol Cyprus\n" +
            "• 2023 February – A-space gallery &amp; Quinta das Relvas. Curator- Alice Bonnot. Lisabon, Porto. Portugal\n" +
            "• 2022 May – June - «millstART residency». Curator- Tanja Prusnik. Millstatt, Austria.\n" +
            "• 2022 May – “Context” Velychko gallery. Limassol Cyprus\n" +
            "• 2021 May – “Art Nova residence”; Curator- Olga Gricenko, Kremenchuk Ukraine.",
    },
    {
        title: "Auctions",
        description: "•2023 May – Velychko gallery. Limassol Cyprus\n" +
            "• 2023 February – A-space gallery &amp; Quinta das Relvas. Curator- Alice Bonnot. Lisabon, Porto. Portugal\n" +
            "• 2022 May – June - «millstART residency». Curator- Tanja Prusnik. Millstatt, Austria.\n" +
            "• 2022 May – “Context” Velychko gallery. Limassol Cyprus\n" +
            "• 2021 May – “Art Nova residence”; Curator- Olga Gricenko, Kremenchuk Ukraine.",
    },
    {
        title: "Collaborations",
        description: "• 2022 May – collaboration with the Litkovskaya brand for Kornit fashion week. London, UK\n" +
            "• 2021 – participation in Map of Renovation art project.Kyiv, Ukraine",
    },
];

const dataportfolio = [{
    img: img1,
    desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    link: "1",
},
    {
        img: img2,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "2",
    },
    {
        img: img3,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img4,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img5,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img6,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: img7,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img8,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img9,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img10,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img11,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img12,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const publications = [
    {
        url: "https://cp-publishing.com.ua/books/emerging-art/",
        header: "Book:",
        description: "Emerging Art in Ukraine",
        defaultMedia: publication1
    },
    {
        url: "https://panel-magazine.com/product/issue-9/",
        header: "Panel Magazine:",
        description: "Ukrainian artist Olga Stein on dangerous sleep",
        defaultMedia: publication2
    },
    {
        url: "https://instagram.com/kanvajournal?igshid=MzRlODBiNWFlZA==",
        header: "KANVA journal:",
        description: "Olga Stein talks about art during the war",
        defaultMedia: publication3
    },
    {
        url: "https://www.janebythegreyattic.com/shop/p/issueeleven",
        header: "JANE magazine Australia:",
        description: "The Howl of Hope. Ukrainian artist Olga Stein",
        defaultMedia: publication4
    },
    {
        url: "https://www.esthetegazeta.com/post/la-condition-humaine-виставка-ольги-штейн-у-парижі",
        header: "Esthete Newspaper:",
        description: "LA CONDITION HUMAINE : ВИСТАВКА ОЛЬГИ ШТЕЙН У ПАРИЖІ",
        defaultMedia: publication5
    },
    {
        url: "https://www.thenomadsalon.com/post/interview-with-ukrainian-visual-artist-olga-stein",
        header: "THENOMASALON:",
        description: "Interview with Ukrainian Visual Artist: Olga Stein",
        defaultMedia: publication6
    },
    {
        url: "https://brooklynrail.org/2022/03/art/RUSSIAN-INVASION-OF-UKRAINE-ORAL-HISTORY-IN-SEVEN-VOICES",
        header: "THE BROOKLYN RAIL:",
        description: "Russian Invasion of Ukraine: Oral History in Seven Voices. Olga Stein. by Nina Mdivani",
        defaultMedia: publication7
    },
    {
        url: "https://www.wonderzine.com.ua/wonderzine/career/vlasniy-dosvid/14329-koli-yak-ne-zaraz-tse-zhinki-yaki-stvorili-proekti-pid-chas-povnomasshtabnoyi-viyni",
        header: "WONDERZINE:",
        description: "Коли, як не зараз. Це жінки, які створили проєкти під час повномасштабної війни. Ольга Штейн про подкаст ”Hi it’s me Stein”",
        defaultMedia: publication8
    },
    {
        url: "https://fishforagoodstory.com/olga_shtein/?fbclid=PAAabfOgSUjWKZCJjNpvw4Oe-bPB1233HO3rVdCrkER0H5KE5y-hmE4S-FXeU",
        header: "FISH magazine:",
        description: "Olga Stein big interview",
        defaultMedia: publication9
    },
    {
        url: "https://podcasts.apple.com/ua/podcast/%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D1%88%D1%82%D0%B5%D0%B9%D0%BD-%D0%BC%D0%B8%D1%81%D1%82%D0%BA%D0%B8%D0%BD%D1%8F-%D1%8F%D0%BA%D0%B0-%D1%80%D1%8F%D1%82%D1%83%D0%B2%D0%B0%D0%BB%D0%B0-%D0%B2%D1%96%D0%B4-%D0%B2%D1%96%D0%B9%D0%BD%D0%B8-%D1%81%D0%B5%D0%B1%D0%B5-%D1%81%D0%B2%D0%BE%D1%94/id1531575119?i=1000559924135&l=uk",
        header: "Podcast:",
        description: "War diary - Ольга Штейн",
        defaultMedia: publication10
    },
    {
        url: "https://elle.ua/ru/stil-zhizni/blog_stil_zhizni/7-sovremennih-ukrainskih-hudozhnikov-o-kotorih-nuzhno-znat/",
        header: "ELLE:",
        description: "7 CONTEMPORARY UKRAINIAN ARTISTS TO KNOW ABOUT. OLGA STEIN",
        defaultMedia: publication11
    },
    {
        url: "https://www.thenomadsalon.com/post/ukrainian-artists-to-support-right-now",
        header: "THE NOMAD SALON:",
        description: "10 Ukrainian Artists To Support Right Now. Olga Stein",
        defaultMedia: publication12
    },
    {
        url: "https://elle.ua/ludi/novosty/pyat-ukranskih-mistkin-predstavili-svo-roboti-na-kpr-na-pdtrimku-ukrani/",
        header: "ELLE:",
        description: "П'ЯТЬ УКРАЇНСЬКИХ МИСТКИНЬ ПРЕДСТАВИЛИ СВОЇ РОБОТИ НА КІПРІ НА ПІДТРИМКУ УКРАЇНИ. Ольга Штейн",
        defaultMedia: publication13
    },
    {
        url: "https://www.artshebdomedias.com/agenda/olga-stein-la-condition-humaine/",
        header: "artshebdomedias:",
        description: "Son exposition Olga Stein | La condition humaine",
        defaultMedia: publication14
    },
    {
        url: "https://kreuzer-leipzig.de/2022/08/11/innere-kriegnahme",
        header: "Article:",
        description: "ODP Galerie stellt aktuelle Kunst aus der Ukraine aus. Olga Stein",
        defaultMedia: publication15
    },
    {
        url: "https://www.artistikrezo.com/agenda/olga-stein-artiste-ukrainienne-presente-son-exposition-la-condition-humaine.html",
        header: "Article:",
        description: "Olga Stein, artiste ukrainienne, présente son exposition “La Condition Humaine”",
        defaultMedia: publication16
    },
    {
        url: "https://www.diepresse.com/6214868/ukrainische-perchten-und-geister",
        header: "Article:",
        description: "Ukrainische Perchten und Geister. Olga Stein, Maria Kulikovska Julia Believa and others",
        defaultMedia: publication17
    },
    {
        url: "https://vogue.ua/battlefront-ukraine/index-en.html",
        header: "Olga Stein In the big project VOGUE:",
        description: "ART ON THE BATTLEFRONT",
        defaultMedia: publication18
    },
    {
        url: "https://vogue.ua/article/culture/art/u-videnskomu-budinku-hudozhnika-vidkrilas-vistavka-ukrajinskih-mitciv-50445.html",
        header: "VOGUE:",
        description: "Воля до життя: нова виставка українських художників у Відні. Ольга Штейн, Марія Куліковська, Катерина Лисовенка та інш.",
        defaultMedia: publication19
    },
    {
        url: "https://elle.ua/ludi/interview/olga-shteyn-pro-ukrainske-mistectvo-ta-chomu-vono-na-chasi/?fbclid=PAAaaaYYystrvx4yy2uxizXGtgIudLeaAYsZZRE2GQMio3PMh5N6qu4bDpQSI_aem_AeUtEorQugvbixmqsq2MSzZyS74CWnSmoWrI2JbJ2eT4ZXcZZz0fXTV41ZQoKSu2ocM",
        header: "ELLE:",
        description: "Ольга Штейн про українське мистецтво та чому воно «на часі»",
        defaultMedia: publication20
    },
]

const projects = [
    {
        type: 'single',
        artworks: [
            {image: img1, name: 'SOFIA IS CS', year: '2022', material: 'Tempera Oil and Canvas, coal', size: '200x170'}
        ]
    },
    {type: 'multi'},
]
const contactConfig = {
    YOUR_EMAIL: "stein2studio@gmail.com",
    YOUR_FONE: "+38(063)-435-22-68",
    description: "Please contact me regarding any questions you have using this form.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://www.facebook.com/olga.stein.161",
    linkedin: "https://www.linkedin.com/in/olga-stein-30aba4240",
    twitter: "https://www.twitter.com/_Olga_Stein_",
    instagram: "https://www.instagram.com/asteinart/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    education,
    exhibitions,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    publications
};
