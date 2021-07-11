import React from "react";
import { StyleSheet } from "react-native";
import { Pagination } from "react-native-swiper-flatlist";

const CarouselPagination = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="#E6ECF0"
      paginationActiveColor="#1836F0"
    />
  );
};

export default CarouselPagination;

const styles = StyleSheet.create({
  paginationContainer: {},
  pagination: {
    borderRadius: 10,
    width: 16,
    height: 4,
  },
});
