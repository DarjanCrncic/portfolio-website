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
import PageDescription from "../Common/PageDescription";

SwiperCore.use([Navigation, Pagination]);

const ProjectsPage = () => {
  return (
    <Page color={"white"} scroll="projects">
      <Title>My Projects</Title>
      <PageDescription style={{backgroundColor: "transparent"}}>
        Throughout my journey as a developer I've created a few web applications. Some of the more advanced ones I listed in this section. Feel free to visit the sites but be aware, most of them are hosted on Heroku so it could take some time for the pages to load.
      </PageDescription>
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
