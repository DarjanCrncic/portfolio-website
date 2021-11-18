import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import ProjectBlock from "./ProjectBlock";
import Page from "../Common/Page";
import Title from "../Common/Title";

SwiperCore.use([Navigation, Pagination]);

const ProjectsPage = () => {
  return (
    <Page color={"red"}>
      <Title>My Projects</Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectBlock />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Page>
  );
};

export default ProjectsPage;
