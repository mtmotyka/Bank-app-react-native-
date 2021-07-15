import React, { useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselItem";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const spentData = [
    {
      id: 1,
      amount: "$6,390",
      amountOf: "$3.248",
    },
    {
      id: 2,
      amount: "$21,370",
      amountOf: "$43.123",
    },
    {
      id: 3,
      amount: "$38",
      amountOf: "$50",
    },
  ];

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={spentData}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={spentData.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 16,
          height: 4,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "#1836F0",
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
