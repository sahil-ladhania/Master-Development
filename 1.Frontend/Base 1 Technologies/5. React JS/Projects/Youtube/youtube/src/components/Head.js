import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { data } from 'react-router-dom';

const Head = () => {
  // State Variables
  const [searchQuery , setSearchQuery] = useState("");

  // dispatch and selector
  const dispatch = useDispatch();

  // Handler Functions
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
  }
  console.log(searchQuery);

  const getSearchSuggestions = async() => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    console.log(response);
    console.log(data);
  }

  // useEffect
  useEffect(() => {
    getSearchSuggestions();
  },[])


  return (
    // Main Container
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
          {/* Hamburger Icon */}
          <img
            onClick={handleToggleMenu}
            className="h-8 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          />
          {/* Youtube Logo */}
          <a href="/">
            <img
              className="h-8 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
      <div className="col-span-10 px-10">
        <div>
          {/* Search Bar */}
          <input
            onChange={handleInputChange}
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
          />
          {/* Search Button */}
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1">
        {/* Profile Icon */}
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}

export default Head