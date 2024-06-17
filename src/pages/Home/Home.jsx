// src/components/ExampleComponent.js

import HomeSearch from "./HomeSearch";
import HomeCardMovieAPI from "./HomeCardMovieAPI";
import HomeImg from "./HomeImg";
import HomeCardMovie from "./HomeCardMovie";
import { HomeCarousel } from "./HomeCarousel";

const ExampleComponent = () => {
  return (
    <div className="relative">
      <HomeCarousel />
      <HomeSearch />
      <HomeCardMovieAPI />
    </div>
  );
};

export default ExampleComponent;
