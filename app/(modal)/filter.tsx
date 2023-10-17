import { useNavigation } from 'expo-router';
import { useCallback } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import data from '@/assets/data/filter.json';
import { Button } from '@/components/ui/Button/Button';
import { FilterItem, FilterItemProps } from '@/components/ui/FilterItem/FilterItem';
import { FilterOptions } from '@/components/ui/FilterOptions/FilterOptions';

export default function FilterModal() {
  const { goBack } = useNavigation();

  const renderItem: ListRenderItem<FilterItemProps> = useCallback(
    ({ item }) => <FilterItem {...item} />,
    [],
  );

  return (
    <View className="bg-lightGrey flex-1 p-6">
      <FlatList data={data} renderItem={renderItem} ListHeaderComponent={<FilterOptions />} />

      <View className="absolute bottom-0 left-0 right-0 h-[100px] bg-white p-2.5 shadow-md">
        <Button onPress={goBack}>Done</Button>
      </View>
    </View>
  );
}
