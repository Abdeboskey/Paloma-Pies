import pecanMain from '../../assets/images/menu/pecanMain.jpg'
import pecanDetail from '../../assets/images/menu/pecanDetail.jpg'
import berryMain from '../../assets/images/menu/berryMain.jpg'
import berryDetail from '../../assets/images/menu/berryDetail.jpg'
import bloodOrangeMain from '../../assets/images/menu/bloodOrangeMain.jpg'
import bloodOrangeDetail from '../../assets/images/menu/bloodOrangeDetail.jpg'
import chocolateMain from '../../assets/images/menu/chocolateMain.jpg'
import chocolateDetail from '../../assets/images/menu/chocolateDetail.jpg'
import whipMain from '../../assets/images/menu/whipMain.jpg'
import whipDetail from '../../assets/images/menu/whipDetail.jpg'
import iceCreamMain from '../../assets/images/menu/iceCreamMain.jpg'
import iceCreamDetail from '../../assets/images/menu/iceCreamDetail.jpg'
import strawberryMain from '../../assets/images/menu/strawberryMain.jpg'
import strawberryDetail from '../../assets/images/menu/strawberryDetail.jpg'

export const valentinesMenu = [
  {
    id: 1,
    name: 'Golden Pecan Pie',
    description: 'Clean & rich sweetness',
    ingredients: 'Pecans, Golden Syrup (Water, Sugar, Lemon), Eggs, Sugar, Butter, Salt, Vanilla Extract',
    img1: pecanMain,
    img2: pecanDetail,
    availableGF: true,
    availableVegan: false,
  },
  {
    id: 2,
    name: 'Mixed Berry Pie',
    description: 'Classic mix of berries & a splash of rosé wine',
    ingredients: 'Mixed Berries (Raspberry, Blueberry, Blackberry), Lemon, Dash of Rosé Wine, Sugar, Quick Cooking Tapioca (Organic Tapioca Starch, Citric Acid), Salt, Butter',
    img1: berryMain,
    img2: berryDetail,
    availableGF: true,
    availableVegan: true,
  },
  {
    id: 3,
    name: 'Blood Orange Creme Pie',
    description: 'Creamy & slightly tart',
    ingredients: 'Milk, Egg Yolk, Salt, Sugar, Cornstarch, Butter, Vanilla Extract, Blood Orange (Zest & Juice)',
    img1: bloodOrangeMain,
    img2: bloodOrangeDetail,
    availableGF: true,
    availableVegan: false,
  },
  {
    id: 4,
    name: 'Chocolate Creme Pie',
    description: 'Rich, Creamy, Silky, Dark Chocolate, Truffle',
    ingredients: 'Milk, Egg Yolk, Salt, Cornstarch, Butter, Vanilla Extract, Cocoa Powder, Brown Sugar',
    img1: chocolateMain,
    img2: chocolateDetail,
    availableGF: true,
    availableVegan: false,
  },
  {
    id: 5,
    name: 'Tarragon Whipped Cream',
    description: 'Sweet and down to earth with a small kick of spice',
    ingredients: 'Tarragon Simple Syrup (Sugar, Tarragon, Water), Heavy Whipping Cream',
    img1: whipMain,
    img2: whipDetail,
    availableGF: null,
    availableVegan: null,
  },
  {
    id: 6,
    name: 'Blood Orange Mimosa Ice Cream',
    description: 'Bright & tangy blood orange with a hint of effervescense',
    ingredients: 'Milk, Heavy Whipping Cream, Sugar, Blood Orange (Zest & Juice), Sparkling Wine, Egg Yolks',
    img1: iceCreamMain,
    img2: iceCreamDetail,
    availableGF: null,
    availableVegan: null,
  },
  {
    id: 7,
    name: 'Chocolate Covered Strawberries',
    description: 'Turmeric white chocolate with milk chocolate swirl',
    ingredients: 'Strawberries, Milk Chocolate, White Chocolate, Turmeric',
    img1: strawberryMain,
    img2: strawberryDetail,
    availableGF: null,
    availableVegan: null,
  },
]