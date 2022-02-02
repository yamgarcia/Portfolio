import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Section id='about'>
        <SectionTitle>
          <SectionText></SectionText>
        </SectionTitle>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll()}>
          <>
            {TimeLineData.map((item, i) => (
              <CarouselMobileScrollNode
                key={i}
                final={i === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={i}
                  id={`carousel__item-${i}`}
                  active={activeItem}
                  onClick={(e) => {
                    handleClick(e, i);
                  }}
                >
                  <CarouselItemTitle>{item.year}</CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((item, i) => {
            return (
              <CarouselButton
                key={i}
                index={i}
                active={activeItem}
                onClick={(e) => handleClick(e, i)}
                type='button'
              >
                <CarouselButtonDot active={activeItem} />
              </CarouselButton>
            );
          })}
        </CarouselButtons>
        <SectionDivider />
      </Section>
    </>
  );
};

export default Timeline;
