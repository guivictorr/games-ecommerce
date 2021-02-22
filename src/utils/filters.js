const filterOptions = [
  {
    name: 'Ordem alfabética',
    action: 'alphabeticOrder',
    func: (a, b) => a.name > b.name,
  },
  {
    name: 'Maior preço',
    action: 'decPrice',
    func: (a, b) => a.price < b.price,
  },
  {
    name: 'Menor Preço',
    action: 'ascPrice',
    func: (a, b) => a.price > b.price,
  },
  {
    name: 'Maior relevância',
    action: 'decScore',
    func: (a, b) => a.score < b.score,
  },
  {
    name: 'Menor Relevância',
    action: 'ascScore',
    func: (a, b) => a.score > b.score,
  },
];

export default filterOptions;
