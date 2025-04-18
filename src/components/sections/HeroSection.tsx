import React, { useCallback } from 'react';

const HeroSection = () => {
  const handleDownloadClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  const handleProClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  return (
    <div className="column2">
      <span className="text10">
        {"모든 채팅을 한곳에.\nLoop"}
      </span>
      <div className="view3">
        <div className="column3">
          <div className="row-view5">
            <button
              className="button2"
              onClick={handleDownloadClick}
            >
              <span className="text11">{"Download for Windows"}</span>
            </button>
            <button
              className="button3"
              onClick={handleProClick}
            >
              <span className="text12">{"무제한으로 Pro 사용하기"}</span>
            </button>
          </div>
          <div className="row-view6">
            <span className="text13">{"Web"}</span>
            <span className="text14">{","}</span>
            <span className="text15">{"Insiders edition"}</span>
            <span className="text14">{", or"}</span>
            <span className="text16">{"other platforms"}</span>
          </div>
        </div>
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/tu9c73jo_expires_30_days.png"
        }
        className="image3"
        alt="Editor preview"
        loading="lazy"
      />
      <div className="view4">
        <span className="text17">{"Pause"}</span>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;