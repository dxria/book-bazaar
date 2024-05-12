export const YakabooObj = {
    url: "https://www.yakaboo.ua/ua/promotions",
    cardsClass: ".promotion-card",
    baseURL: "https://www.yakaboo.ua",
    bookshop: {
        name: "Yakaboo",
        image: "https://www.yakaboo.ua/dist/site-logo.svg?b1b42e85cd73b83f8438e35973bc2a6f",
    },
    // linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".promotion-image-wrapper img",
        imageAttr: "src",
        title: ".promotion-title",
        description: ".promotion-description",
    },
};

// export const Bookish: TBookstoreConstant = {
//     baseURL: "",
//     searchURL: "https://bookish.kiev.ua/search?search=",
//     bookshop: {
//         name: "Bookish",
//         image: "https://bookish.kiev.ua/image/cache/catalog/image/catalog/logo.webp",
//     },
//     cardsClass: "div.main_item_wrapper",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".popup_link",
//         imageAttr: "href",
//         title: ".top_info .preview_text",
//         author: ".props_list tr:first-child td.char_value span",
//         price: ".prices_block .price_value",
//     },
// };
// export const Bookling: TBookstoreConstant = {
//     baseURL: "https://bookling.ua",
//     searchURL:
//         "https://bookling.ua/catalog/?s=%D0%9F%D0%BE%D1%88%D1%83%D0%BA&q=",
//     bookshop: {
//         name: "Bookling",
//         image: "https://bookling.ua/upload/CNext/702/original_2_01.png",
//     },
//     cardsClass: "div.main_item_wrapper",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".popup_link img",
//         imageAttr: "src",
//         title: ".dotdot",
//         author: ".autor-spoiler",
//         price: ".main_item_wrapper .values_wrapper",
//     },
// };

// export const Bukva: TBookstoreConstant = {
//     baseURL: "https://bukva.ua",
//     searchURL:
//         "https://bukva.ua/ua/search/index/?l=1&filter=Array&sort=default&page=1&search=",
//     bookshop: {
//         name: "Буква",
//         image: "https://bukva.ua/img/logo.png?1714717303",
//     },
//     cardsClass: ".no1",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".ArtImage",
//         imageAttr: "src",
//         title: ".bg_h1_small h1",
//         author: "",
//         price: ".price_value",
//     },
// };

// export const NashFormat: TBookstoreConstant = {
//     baseURL: "https://nashformat.ua/",
//     searchURL: "https://nashformat.ua/search?keyword=",
//     bookshop: {
//         name: "Наш формат",
//         image: "https://nashformat.ua/design/NF/images/logo-nf.svg",
//     },
//     cardsClass: "div.novimage_wrapper",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".galleries-main a",
//         imageAttr: "href",
//         title: ".col-lg-8 h1",
//         author: ".author_title",
//         price: ".fn-price ",
//     },
// };

export const shopPromoDependencies = {
    yakaboo: YakabooObj,
    // bukva: Bukva,
    // Bookish: Bookish,
    // Bookling: Bookling,
    // nashFormat: NashFormat,
};
