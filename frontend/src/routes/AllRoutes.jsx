import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import ListingPage from '../pages/ListingPage';
import DetailsPage from '../pages/DetailsPage';
import BookmarksPage from '../pages/BookmarksPage';
import FourOFour from '../pages/FourOFour';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/list" element={<ListingPage />} />
        <Route path="/pokemon/:pokemonName" element={<DetailsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path='*' element={<FourOFour/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
