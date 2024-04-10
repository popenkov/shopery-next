const data = {
  categories: [
    { title: 'Fresh Fruit (25)', value: '', amount: 134 },
    { title: 'Vegetables', value: '', amount: 150 },
    { title: 'Cooking', value: 'cooking', amount: 54 },
    { title: 'Snacks', value: 'snacks', amount: 47 },
    { title: 'Beverages', value: 'beverages', amount: 43 },
    { title: 'Beauty & Health', value: 'beauty-n-health', amount: 38 },
    { title: 'Bread & Bakery', value: 'bread-n-bakery', amount: 15 },
  ],
  priceRange: {
    min: 100,
    max: 1000,
  },

  tags: [
    {
      text: 'Healthy',
      value: 'Healthy',
    },
    {
      text: 'Low fat',
      value: 'low-fat',
    },
    {
      text: 'Vegetarian',
      value: 'Vegetarian',
    },
    {
      text: 'Kid foods',
      value: 'kid-foods',
    },
    {
      text: 'Vitamins',
      value: 'Vitamins',
    },
    {
      text: 'Bread',
      value: 'Bread',
    },
    {
      text: 'Meat',
      value: 'Meat',
    },
    {
      text: 'Snacks',
      value: 'Snacks',
    },
    {
      text: 'Tiffin',
      value: 'Tiffin',
    },
    {
      text: 'Launch',
      value: 'Launch',
    },
    {
      text: 'Dinner',
      value: 'Dinner',
    },
    {
      text: 'Breackfast',
      value: 'Breackfast',
    },
    {
      text: 'Fruit',
      value: 'Fruit',
    },
  ],
};

export const getFilterData = () => {
  return data;
};