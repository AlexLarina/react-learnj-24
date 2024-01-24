/* eslint-disable react/no-children-prop */
import React from "react";
import ReactDom from "react-dom/client";
import {restaurants} from "./const/mocks.js";


const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(
//   <div>
//     <h2>{restaurants[0].name}</h2>
//     <h3>Меню</h3>
//     <ul>
//       <li>{restaurants[0].menu[0].name}</li>
//       <li>{restaurants[0].menu[1].name}</li>
//       <li>{restaurants[0].menu[2].name}</li>
//     </ul>
//     <h3>Отзывы</h3>
//     <ul>
//       <li>{restaurants[0].reviews[0].text}</li>
//       <li>{restaurants[0].reviews[1].text}</li>
//     </ul>

//     <h2>{restaurants[1].name}</h2>
//     <h3>Меню</h3>
//     <ul>
//       <li>{restaurants[1].menu[0].name}</li>
//       <li>{restaurants[1].menu[1].name}</li>
//     </ul>
//     <h3>Отзывы</h3>
//     <ul>
//       <li>{restaurants[1].reviews[0].text}</li>
//       <li>{restaurants[1].reviews[1].text}</li>
//       <li>{restaurants[1].reviews[2].text}</li>
//     </ul>

//     <h2>{restaurants[2].name}</h2>
//     <h3>Меню</h3>
//     <ul>
//       <li>{restaurants[2].menu[0].name}</li>
//       <li>{restaurants[2].menu[1].name}</li>
//       <li>{restaurants[2].menu[2].name}</li>
//     </ul>
//     <h3>Отзывы</h3>
//     <ul>
//       <li>{restaurants[2].reviews[0].text}</li>
//     </ul>

//     <h2>{restaurants[3].name}</h2>
//     <h3>Меню</h3>
//     <ul>
//       <li>{restaurants[3].menu[0].name}</li>
//       <li>{restaurants[3].menu[1].name}</li>
//     </ul>
//     <h3>Отзывы</h3>
//     <ul>
//       <li>{restaurants[3].reviews[0].text}</li>
//       <li>{restaurants[3].reviews[1].text}</li>
//     </ul>
//   </div>
// );

root.render(React.createElement("div", {
  key: "restaurants",
  children: [
    React.createElement("h2", {key: restaurants[0].id, children: restaurants[0].name}),
    React.createElement("h3", {key: restaurants[0].id + '-menu', children: "Меню"}),
    React.createElement("ul", {key: restaurants[0].id + '-menu-list', children: [
      React.createElement("li", {
        key: restaurants[0].menu[0].id, children: restaurants[0].menu[0].name
      }),
      React.createElement("li", {
        key: restaurants[0].menu[1].id, children: restaurants[0].menu[1].name
      }),
      React.createElement("li", {
        key: restaurants[0].menu[2].id, children: restaurants[0].menu[2].name
      })
    ]}),
    React.createElement("h3", {key: restaurants[0].id + '-reviews', children: "Отзывы"}),
    React.createElement("ul", {key: restaurants[0].id + '-review-list', children: [
      React.createElement("li", {
        key: restaurants[0].reviews[0].id, children: restaurants[0].reviews[0].text
      }),
      React.createElement("li", {
        key: restaurants[0].reviews[1].id, children: restaurants[0].reviews[1].text
      })
    ]}),

    React.createElement("h2", {key: restaurants[1].id, children: restaurants[1].name}),
    React.createElement("h3", {key: restaurants[1].id + '-menu', children: "Меню"}),
    React.createElement("ul", {key: restaurants[1].id + '-menu-list', children: [
      React.createElement("li", {
        key: restaurants[1].menu[0].id, children: restaurants[1].menu[0].name
      }),
      React.createElement("li", {
        key: restaurants[1].menu[1].id, children: restaurants[1].menu[1].name
      })
    ]}),
    React.createElement("h3", {key: restaurants[1].id + '-reviews', children: "Отзывы"}),
    React.createElement("ul", {key: restaurants[1].id + '-review-list', children: [
      React.createElement("li", {
        key: restaurants[1].reviews[0].id, children: restaurants[1].reviews[0].text
      }),
      React.createElement("li", {
        key: restaurants[1].reviews[1].id, children: restaurants[1].reviews[1].text
      }),
      React.createElement("li", {
        key: restaurants[1].reviews[2].id, children: restaurants[1].reviews[2].text
      })
    ]}),

    React.createElement("h2", {key: restaurants[2].id, children: restaurants[2].name}),
    React.createElement("h3", {key: restaurants[2].id + '-menu', children: "Меню"}),
    React.createElement("ul", {key: restaurants[2].id + '-menu-list', children: [
      React.createElement("li", {
        key: restaurants[2].menu[0].id, children: restaurants[2].menu[0].name
      }),
      React.createElement("li", {
        key: restaurants[2].menu[1].id, children: restaurants[2].menu[1].name
      }),
      React.createElement("li", {
        key: restaurants[2].menu[2].id, children: restaurants[2].menu[2].name
      })
    ]}),
    React.createElement("h3", {key: restaurants[2].id + '-reviews', children: "Отзывы"}),
    React.createElement("ul", {key: restaurants[2].id + '-review-list', children: [
      React.createElement("li", {
        key: restaurants[2].reviews[0].id, children: restaurants[2].reviews[0].text
      })
    ]}),

    React.createElement("h2", {key: restaurants[3].id, children: restaurants[3].name}),
    React.createElement("h3", {key: restaurants[3].id + '-menu', children: "Меню"}),
    React.createElement("ul", {key: restaurants[3].id + '-menu-list', children: [
      React.createElement("li", {
        key: restaurants[3].menu[0].id, children: restaurants[3].menu[0].name
      }),
      React.createElement("li", {
        key: restaurants[3].menu[1].id, children: restaurants[3].menu[1].name
      })
    ]}),
    React.createElement("h3", {key: restaurants[3].id + '-reviews', children: "Отзывы"}),
    React.createElement("ul", {key: restaurants[3].id + '-review-list', children: [
      React.createElement("li", {
        key: restaurants[3].reviews[0].id, children: restaurants[3].reviews[0].text
      }),
      React.createElement("li", {
        key: restaurants[3].reviews[1].id, children: restaurants[3].reviews[1].text
      })
    ]}),
  ]
}));