import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CircleButton from '../../components/CircleButton';
import Header from '../../components/Header';
import HeaderContainer from '../../components/Header/styles';
import { ProductsContext } from '../../context/productsContext';

import FiltersContainer from './styles';

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
      <Header>
        <CircleButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={32} color="#e5e5e5" />
        </CircleButton>
        <HeaderContainer.Title>Filtrar Por</HeaderContainer.Title>
      </Header>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <FiltersContainer.Option
            onPress={() => handleFilterOption(item.action)}
          >
            <FiltersContainer.Text>{item.name}</FiltersContainer.Text>
          </FiltersContainer.Option>
        )}
        ItemSeparatorComponent={() => <FiltersContainer.Separator />}
      />
    </FiltersContainer>
  );
};

export default Filters;
