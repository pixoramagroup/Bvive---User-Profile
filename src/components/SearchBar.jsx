import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";

function SearchBar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setActiveButton(null); // Reset active button when closing modal
  };

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onFocus={openModal}
          // onBlur={closeModal}
        />
        <button type="submit" className="searchButton">
          <SearchIcon />
        </button>
      </div>

      {modalVisible && (
        <div>
          {/* Overlay */}
          <div className="overlay" onClick={closeModal}></div>

          {/* Modal */}
          <div className="search-modal" onClick={closeModal}>
            <div
              className="search-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <button
                  className={activeButton === "Username" ? "active" : ""}
                  onClick={() => handleButtonClick("Username")}
                >
                  Username
                </button>
                <button
                  className={activeButton === "PostalCode" ? "active" : ""}
                  onClick={() => handleButtonClick("PostalCode")}
                >
                  Postal Code
                </button>
              </div>
              <div className="search">
                <input
                  type="text"
                  className="searchTerm-2"
                  placeholder="Start typing username or postal code"
                  onFocus={openModal}
                />
              </div>
              <button type="submit" className="searchButton modalSearchButton">
                <span className="searchButtonText">Search</span>
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    {/* </div> */}
    </div>
  );
}

export default SearchBar;
