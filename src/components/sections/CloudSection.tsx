import React from 'react';

const CloudSection = () => {
  return (
    <div className="row-view9">
      <div className="column7">
        <span className="text27">{"클라우드로 손쉽게 저장."}</span>
        <span className="text28">
          {
            "Loop uses the cloudSecurely store your data and logsThe data is stored securely through securityYou don't have to worry about security.   \n(including some euros)"
          }
        </span>
        <span className="text26">
          {"Code with AI-powered suggestions"}
        </span>
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/du9byp6k_expires_30_days.png"
        }
        className="image8"
        alt="Next Edit Suggestions"
        loading="lazy"
      />
    </div>
  );
};

CloudSection.displayName = 'CloudSection';

export default CloudSection;