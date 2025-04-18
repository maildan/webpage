import React from 'react';

interface LanguageItemProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  smallImage?: boolean;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ imageSrc, imageAlt, name, smallImage }) => (
  <>
    <img
      src={imageSrc}
      className={smallImage ? "image11" : "image10"}
      alt={imageAlt}
      loading="lazy"
    />
    <span className={smallImage ? "text37" : "text36"}>{name}</span>
  </>
);

const LanguageSection: React.FC = () => {
  return (
    <div className="row-view12">
      <div className="column12">
        <span className="text27">{"정확한 타자 수와 정확성 제공"}</span>
        <span className="text35">
          {
            "VS Code supports almost every major\nprogramming language. Several ship in the box,\nlike JavaScript, TypeScript, CSS, and HTML, but\nextensions for others can be found in the VS Code\nMarketplace."
          }
        </span>
      </div>
      
      {/* 첫 번째 언어 세트 */}
      <div className="column13">
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/r7tu88m5_expires_30_days.png" className="image10" alt="JavaScript" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/npej1gbo_expires_30_days.png" className="image10" alt="C#" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/galis5mx_expires_30_days.png" className="image10" alt="Java" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/uytjnj36_expires_30_days.png" className="image11" alt="Markdown" loading="lazy" />
      </div>
      <div className="column14">
        <span className="text36">{"JavaScript"}</span>
        <span className="text36">{"C#"}</span>
        <span className="text36">{"Java"}</span>
        <span className="text37">{"Markdown"}</span>
      </div>
      
      {/* 두 번째 언어 세트 */}
      <div className="column13">
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wgnmx13u_expires_30_days.png" className="image10" alt="TypeScript" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/4mjhjt4e_expires_30_days.png" className="image10" alt="C++" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/rn1gdr2s_expires_30_days.png" className="image10" alt="JSON" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3dotlvo_expires_30_days.png" className="image11" alt="Powershell" loading="lazy" />
      </div>
      <div className="column14">
        <span className="text36">{"TypeScript"}</span>
        <span className="text36">{"C++"}</span>
        <span className="text36">{"JSON"}</span>
        <span className="text37">{"Powershell"}</span>
      </div>
      
      {/* 세 번째 언어 세트 */}
      <div className="column13">
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/g2kx4ild_expires_30_days.png" className="image10" alt="Python" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ledfdddn_expires_30_days.png" className="image10" alt="HTML" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3cm93tt_expires_30_days.png" className="image10" alt="PHP" loading="lazy" />
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/n0pdqox3_expires_30_days.png" className="image11" alt="YAML" loading="lazy" />
      </div>
      <div className="column15">
        <span className="text36">{"Python"}</span>
        <span className="text36">{"HTML"}</span>
        <span className="text36">{"PHP"}</span>
        <span className="text37">{"YAML"}</span>
      </div>
    </div>
  );
};

LanguageSection.displayName = 'LanguageSection';

export default LanguageSection;