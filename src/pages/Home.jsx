import React from 'react';
import Intro from '../components/Intro';
import Search from '../components/Search';
import PlacesLis from '../components/PlacesList';
import Destinations from '../components/Destinations';
import TopTourList from '../components/TopTourList';
import ExploreList from '../components/ExploreList';
import TrendingCitesList from '../components/TrendingCitesList';
import Passion from '../components/Passion';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <div>
      <Intro />
      <Search />
      <PlacesLis />
      <Destinations />
      <TopTourList />
      <ExploreList />
      <TrendingCitesList />
      <Passion />
      <Subscribe />
    </div>
  );
}

export default Home;