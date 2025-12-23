import React, { useState } from "react";
import "./App.css";
import APIForm from "./components/APIForm";
import Gallery from './Components/Gallery';
const App = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [prevImages, setPrevImages] = useState([]); // FIXED: missing state
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const submitForm = () => {
    const defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if (inputs.url.trim() === "") {
      alert("You forgot to submit a URL!");
      return;
    }

    // Fill empty fields with default values
    const updatedInputs = { ...inputs };
    for (const key in updatedInputs) {
      if (updatedInputs[key].trim() === "") {
        updatedInputs[key] = defaultValues[key];
      }
    }

    setInputs(updatedInputs);

    const query = makeQuery(updatedInputs);
    callAPI(query);
  };

  const makeQuery = (form) => {
    const wait_until = "network_idle";
    const response_type = "json";
    const fail_on_status = "400%2C404%2C500-511";

    const url_starter = "https://";
    const fullURL = url_starter + form.url;

    return `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}&url=${fullURL}&format=${form.format}&no_ads=${form.no_ads}&no_cookie_banners=${form.no_cookie_banners}&width=${form.width}&height=${form.height}`;
  };

  const callAPI = async (query) => {
    try {
      const response = await fetch(query);
      const json = await response.json();

      if (json.url) {
        // Save the previous image before updating (if exists)
        if (currentImage) {
          setPrevImages((imgs) => [...imgs, currentImage]);
        }

        setCurrentImage(json.url);
        reset();
      } else {
        alert("No image returned from API.");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("API request failed.");
    }
  };

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: "",
    });
  };

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />

      <br />

      {/* MAIN CURRENT IMAGE */}
      {currentImage && (
        <div className="image-container">
          <h2>Current Screenshot</h2>
          <img className="screenshot" src={currentImage} alt="Screenshot returned" />
        </div>
      )}

      {/* PREVIOUS IMAGES */}
      {prevImages.length > 0 && (
        <div className="prev-images">
          <h2>Previous Screenshots</h2>
          <div className="prev-list">
            {prevImages.map((img, idx) => (
              <img key={idx} src={img} alt="Previous screenshot" className="small-thumb" />
            ))}
          </div>
        </div>
      )}

      {/* CURRENT QUERY PREVIEW */}
      <div className="container">
        <h3>Current Query Status:</h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY<br />
          &url={inputs.url}<br />
          &format={inputs.format}<br />
          &width={inputs.width}<br />
          &height={inputs.height}<br />
          &no_cookie_banners={inputs.no_cookie_banners}<br />
          &no_ads={inputs.no_ads}<br />
        </p>
      </div>

      <br />
      <div className="container">
  <Gallery images={prevImages} />
</div>
    </div>
  );
};

export default App;
