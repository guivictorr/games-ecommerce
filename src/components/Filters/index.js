import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { ProductsContext } from '../../context/productsContext';
import filterOptions from '../../utils/filters';
import CircleButton from '../CircleButton';

import F from './styles';

const Filters = ({ closeModal }) => {
  const { handleProductsOrder } = useContext(ProductsContext);

  const handleFilterOption = callback => {
    handleProductsOrder(callback);
    closeModal();
  };

  return (
    <F>
      <FlatList
        data={filterOptions}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => (
          <F.Header>
            <CircleButton onPress={closeModal}>
              <AntDesign color="#e5e5e5" name="close" size={32} />
            </CircleButton>
          </F.Header>
        )}
        renderItem={({ item }) => (
          <F.Option onPress={() => handleFilterOption(item.func)}>
            <F.Text>{item.name}</F.Text>
          </F.Option>
        )}
        ItemSeparatorComponent={() => <F.Separator />}
      />
    </F>
  );
};

export default Filters;
