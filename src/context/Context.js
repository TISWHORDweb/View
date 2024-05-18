// MyContext.js
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { REACT_APP_USER_BASE_URL } from '../Utils/Urls';
import axios from 'axios';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('close');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [videos, setVideos] = useState([])

  const updateData = (newValue) => {
    setData(newValue);
  };

  useEffect(() => {
    const url = `${REACT_APP_USER_BASE_URL}/video/all`
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    })
        .then((res) => {
            const response = res.data.data
            setVideos(response)
        })
        .catch((err) => console.log(err));

}, []);

  const updateSearchQuery = (newQuery) => {
    setSearchQuery(newQuery);
    filterVideos(newQuery); // Trigger filtering based on new query
  };

  const filterVideos = useCallback((newQuery) => {
    if (!newQuery) {
      setFilteredVideos(videos);
    }
    const filtered = videos.filter((video) => {
      // Adjust search logic as needed
      return video.title.toLowerCase().includes(newQuery.toLowerCase());
    });
    setFilteredVideos(filtered);
  }, [videos]);

  useEffect(() => {
    let hasRun = false;
    if (!hasRun && videos) {
      filterVideos('');
      hasRun = true;
    }
  }, [videos, filterVideos]);

  useEffect(() => {
    // Filter whenever searchQuery changes
    filterVideos(searchQuery);
  }, [searchQuery, filterVideos]);

  return (
    <MyContext.Provider value={{
      data,
      updateData,
      updateSearchQuery,
      filteredVideos,
      searchQuery,
      videos
    }}>

      {children}
    </MyContext.Provider>
  );
};