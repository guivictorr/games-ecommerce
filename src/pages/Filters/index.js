import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ProductsContext } from '../../context/productsContext';
import filterOptions from '../../utils/filters';

import CircleButton from '../../components/CircleButton';
import Header from '../../components/Header';
import HeaderContainer from '../../components/Header/styles';

import FiltersContainer from './styles';

const Filters = ({ navigation }) => {
  const { handleProductsOrder } = useContext(ProductsContext);

  const handleFilterOption = callback => {
    handleProductsOrder(callback);
    navigation.goBack();
  };

  return (
    <FiltersContainer>
      <Header>
        <CircleButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={32} color="#e5e5e5" />
        </CircleButton>
        <HeaderContainer.Title>Filtrar Por</HeaderContainer.Title>
      </Header>
      <FlatList
        data={filterOptions}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <FiltersContainer.Option
            onPress={() => handleFilterOption(item.func)}
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
