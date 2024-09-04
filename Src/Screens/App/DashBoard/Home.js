import {StyleSheet} from 'react-native';
import React from 'react';
import MainContainer from '../../../Components/MainContainer';
import Header from './components/Header';
import Banner from './components/Banner';
import Trending from './components/Trending';
import TraderList from './components/TraderList';

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Banner />
      <Trending />
      <TraderList />
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
