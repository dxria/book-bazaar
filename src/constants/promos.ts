export const YakabooObj = {
    url: "https://www.yakaboo.ua/ua/promotions",
    baseURL: "https://www.yakaboo.ua",
    bookshop: {
        name: "Yakaboo",
        image: "https://www.yakaboo.ua/dist/site-logo.svg?b1b42e85cd73b83f8438e35973bc2a6f",
    },
    cardsClass: ".promotion-card",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".promotion-image-wrapper img",
        imageAttr: "src",
        title: ".promotion-title",
        description: ".promotion-description",
    },
};
export const Bookling = {
    url: "https://bookling.ua/company/news/",
    baseURL: "https://bookling.ua",
    bookshop: {
        name: "Bookling",
        image: "https://bookling.ua/upload/CNext/702/original_2_01.png",
    },
    cardsClass: ".items .item",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: "img",
        imageAttr: "src",
        title: ".body-info .title",
        description: "",
    },
};

export const shopPromoDependencies = {
    yakaboo: YakabooObj,
    Bookling: Bookling,
};
