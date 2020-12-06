import photos from './img'
export default[
  {
    id: "1",
    name: "Шампунь1",
    img:photos[0] ,
    availableColors: ["желтый", "красный", "синий"],
    availableVolume: ["100", "200", "300"],
    description:'Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    isNew: true,
    price: 300
  },
  {
    id: "2",
    name: "Шампунь2",
    img:photos[1] ,
    availableColors:  ["красный","белый", "зеленый", "синий","желтый", "красный", "синий","желтый", "красный", "синий"],
    availableVolume: ["100", "200", "300"],
    description:'Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    isNew: false,
    price: 200
   
  },
  {
    id: "3",
    name: "Шампунь3",
    img:photos[2] ,
    availableColors: ["белый", "зеленый", "синий"],
    availableVolume: ["120", "500", "1000"],
    description:'Lorem minim veaboris nisi ut altrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    isNew: true,
    price: 200
  }
]
