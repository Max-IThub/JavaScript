let products = [
    {
          id: 1,
          title: 'велосипед',
          price: 45000,
          count: 3, // количество на складе
          marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
      },
      {
          id: 2,
          title: 'ролики',
          price: 25000,
          count: 5,
          marks: [4, 3, 5, 5]
      },
      {
          id: 3,
          title: 'арбалет',
          price: 1700,
          count: 9,
          marks: [3, 3, 4, 5]
      },
      {
          id: 4,
          title: 'коньки',
          price: 4500,
          count: 3,
          marks: [4, 3, 4, 3]
      },
      {
          id: 5,
          title: 'ракетки',
          price: 900,
          count: 15,
          marks: [5, 3, 5, 3]
      },
      {
          id: 6,
          title: 'штанги',
          price: 14000,
          count: 5,
          marks: [3, 3, 3, 2]
      },
      {
          id: 7,
          title: 'стрелы',
          price: 1200,
          count: 55,
          marks: [3, 2, 4, 5]
      },
      {
          id: 8,
          title: 'мячи',
          price: 500,
          count: 49,
          marks: [5, 4, 4, 4]
      },
      {
          id: 9,
          title: 'сетка',
          price: 5000,
          count: 6,
          marks: [4, 5, 2, 5]
      },
      {
          id: 10,
          title: 'гантели',
          price: 3400,
          count: 12,
          marks: [3, 2, 4, 2]
      },
      {
          id: 11,
          title: 'маты',
          price: 16500,
          count: 7,
          marks: [4, 4, 4, 5]
      }
    ]

let count10 = products.filter(products => products.count > 10);
let price89 = products.filter(products => products.price >= 800 && products.price <= 900);
let sortPrice = products.sort((next, prev) => prev.price - next.price);
let sumPrice = products.map(products => products.price).reduce((prev, next) => prev + next);
let totalMarks = products.map(elem => (
{
    id: elem.id,
    title: elem.title,
    price: elem.price,
    count:elem.count,
    totalM: elem.marks.reduce((sum, elem) => sum + elem, 0)
}
)).sort((currentElem, nextElem) => currentElem.totalM - nextElem.totalM)
console.log(totalMarks)
 