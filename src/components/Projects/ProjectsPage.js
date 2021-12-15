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
import { projects } from "./project-list";

SwiperCore.use([Navigation, Pagination]);

const ProjectsPage = () => {
  return (
    <Page color={"white"} scroll="projects">
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
        {projects.map((project, i) => {
          return (
            <SwiperSlide key={i}>
              <ProjectBlock project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Page>
  );
};

export default ProjectsPage;
