import React from 'react';
import { FeatureItem } from '../common/FeatureItem';

const CustomizeSection: React.FC = () => {
  return (
    <div className="row-view13">
      <div className="column16">
        <span className="text38">{"UI 를 마음대로 수정."}</span>
        <span className="text39">
          {
            "Customize your VS Code UI and layout so that it\nfits your coding style."
          }
        </span>
        
        <FeatureItem 
          title="Color themes"
          description={
            <>
              <span className="text40">
                {"let you modify the colors in VS"}
              </span>
              <span className="text41">
                {
                  "Code's user interface to suit your preferences and\nwork environment."
                }
              </span>
            </>
          }
        />
        
        <FeatureItem 
          title="Settings Sync"
          description={
            <>
              <span className="text42">
                {"enables you to share your user"}
              </span>
              <span className="text43">
                {
                  "settings across your VS Code instances with the\nSettings Sync feature."
                }
              </span>
            </>
          }
        />
        
        <FeatureItem 
          title="Profiles"
          description={
            <>
              <span className="text44">
                {"let you create sets of customizations and"}
              </span>
              <span className="text45">
                {
                  "quickly switch between them or share them with\nothers."
                }
              </span>
            </>
          }
        />
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/o7lggksg_expires_30_days.png"
        }
        className="image12"
        alt="Customization options"
        loading="lazy"
      />
    </div>
  );
};

CustomizeSection.displayName = 'CustomizeSection';

export default CustomizeSection;