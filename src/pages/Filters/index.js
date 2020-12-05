import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ProductsContext } from '../../context/productsContext';

import {
  FiltersContainer,
  Separator,
  FilterOption,
  FilterText,
  FilterListTitle,
} from './styles';

const data = [
  {
    name: 'Ordem alfabética',
    action: 'alphabeticOrder',
  },
  {
    name: 'Maior preço',
    action: 'decPrice',
  },
  {
    name: 'Menor Preço',
    action: 'ascPrice',
  },
  {
    name: 'Maior relevância',
    action: 'decScore',
  },
  {
    name: 'Menor Relevância',
    action: 'ascScore',
  },
];

const Filters = ({ navigation }) => {
  const { handleProductsOrder } = useContext(ProductsContext);

  const handleFilterOption = useCallback(
    async order => {
      handleProductsOrder(order);
      navigation.goBack();
    },
    [navigation, handleProductsOrder],
  );

  return (
    <FiltersContainer>
      <FilterListTitle>Filtrar Por</FilterListTitle>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <FilterOption onPress={() => handleFilterOption(item.action)}>
            <FilterText>{item.name}</FilterText>
          </FilterOption>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </FiltersContainer>
  );
};

export default Filters;
