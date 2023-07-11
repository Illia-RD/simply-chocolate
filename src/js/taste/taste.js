import tasteCards from '/json/tasteCards.json';

const tasteCardList = document.querySelector('.taste-card-list');

function renderCard() {
  return tasteCards
    .map(({ id, cardName, scrMob, scrDesk, scrDefaut } = tasteCard) => {
      return `  <li class="taste-card-item">
          <picture class="taste-card-img">
            <source media="(min-width:1200px)" srcset="${retina(scrMob)}" />
            <source media="(max-width:1199px)" srcset="" />
            <img src="${scrDefaut}" alt="${cardName}" />
          </picture>
          <h3 class="taste-card-subtitle">${cardName}</h3>
        </li>`;
    })
    .join('');
}
function retina(scr) {}
// console.log(renderCard());

tasteCardList.insertAdjacentHTML('beforeend', renderCard());
//  },
//   {
//     "id": "2",
//     "cardName": "MILK",
//     "scrMob": {
//       "x1": "../images/taste/milk/tablet-mobile/taste-milk_t_m@1.webp",
//       "x2": "../images/taste/milk/tablet-mobile/taste-milk_t_m@2.webp",
//       "x3": "../images/taste/milk/tablet-mobile/taste-milk_t_m@3.webp",
//       "x4": "../images/taste/milk/tablet-mobile/taste-milk_t_m@4.webp"
//     },
//     "scrDesk": {
//       "x1": "../images/taste/milk/desktop/taste-milk_d@1.webp",
//       "x2": "../images/taste/milk/desktop/taste-milk_d@2.webp",
//       "x3": "../images/taste/milk/desktop/taste-milk_d@3.webp",
//       "x4": "../images/taste/milk/desktop/taste-milk_d@4.webp"
//     },
//     "scrDefaut": "../images/taste/defaut/taste-milk.png"
//   },
//   {
//     "id": "3",
//     "cardName": "NUTS",
//     "scrMob": {
//       "x1": "../images/taste/nuts/tablet-mobile/taste-nuts_t_m@1.webp",
//       "x2": "../images/taste/nuts/tablet-mobile/taste-nuts_t_m@2.webp",
//       "x3": "../images/taste/nuts/tablet-mobile/taste-nuts_t_m@3.webp",
//       "x4": "../images/taste/nuts/tablet-mobile/taste-nuts_t_m@4.webp"
//     },
//     "scrDesk": {
//       "x1": "../images/taste/nuts/desktop/taste-nuts_d@1.webp",
//       "x2": "../images/taste/nuts/desktop/taste-nuts_d@2.webp",
//       "x3": "../images/taste/nuts/desktop/taste-nuts_d@3.webp",
//       "x4": "../images/taste/nuts/desktop/taste-nuts_d@4.webp"
//     },
//     "scrDefaut": "../images/taste/defaut/taste-nuts.png"
//   },
//   {
//     "id": "4",
//     "cardName": "SEMI - SWEET CHOCOLATE",
//     "scrMob": {
//       "x1": "../images/taste/semi-sweet-chocolate/tablet-mobile/taste-semi_t_m@1.webp",
//       "x2": "../images/taste/semi-sweet-chocolate/tablet-mobile/taste-semi_t_m@2.webp",
//       "x3": "../images/taste/semi-sweet-chocolate/tablet-mobile/taste-semi_t_m@3.webp",
//       "x4": "../images/taste/semi-sweet-chocolate/tablet-mobile/taste-semi_t_m@4.webp"
//     },
//     "scrDesk": {
//       "x1": "../images/taste/semi-sweet-chocolate/desktop/taste-semi_d@1.webp",
//       "x2": "../images/taste/semi-sweet-chocolate/desktop/taste-semi_d@2.webp",
//       "x3": "../images/taste/semi-sweet-chocolate/desktop/taste-semi_d@3.webp",
//       "x4": "../images/taste/semi-sweet-chocolate/desktop/taste-semi_d@4.webp"
//     },
//     "scrDefaut": "../images/taste/defaut/taste-semi.png"
//   }
