import React from 'react';

interface FeatureGridItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureGridItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = "column23"
}: FeatureGridItemProps) => (
  <div className={className}>
    <img
      src={imageSrc}
      className="image14"
      alt={imageAlt}
      loading="lazy"
    />
    <span className={title.length > 15 ? "text53" : "text55"}>{title}</span>
    <span className={description.length > 60 ? "text54" : "text56"}>
      {description}
    </span>
  </div>
);

const FeatureGridSection = () => {
  return (
    <div className="column20">
      <div className="column21">
        <span className="text51">{"Loop 의 다양한 앱들."}</span>
        <span className="text52">
          {
            "There's a lot more to an editor. Whether it's using built-in features or\nrich extensions, there's something for everyone."
          }
        </span>
      </div>
      <div className="column22">
        <div className="row-view14">
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jn6dhmj5_expires_30_days.png"
            imageAlt="Integrated terminal"
            title="Integrated terminal"
            description="Use your favorite shell whether it's zsh,\npwsh, or git bash, all inside the editor."
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/xlzm8ahj_expires_30_days.png"
            imageAlt="Run code"
            title="Run code"
            description="Run and debug your code without\nleaving your editor."
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wz1lwntk_expires_30_days.png"
            imageAlt="Version control"
            title="Version control"
            description="Built-in support for git and many other\nsource control providers."
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/pkxvogvt_expires_30_days.png"
            imageAlt="Build tasks"
            title="Build tasks"
            description="Run tools and analyze their results from\nwithin VS Code."
            className="column24"
          />
        </div>
        <div className="row-view15">
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/gicfrmnw_expires_30_days.png"
            imageAlt="Local history"
            title="Local history"
            description="Never lose your changes with\nautomatically tracked local history."
            className="column25"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/zkagpy1r_expires_30_days.png"
            imageAlt="Themes"
            title="Themes"
            description="Your theme is an extension of your\npersonality. Add some flair to your\neditor and add your touch."
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/glyoadv3_expires_30_days.png"
            imageAlt="Accessibility"
            title="Accessibility"
            description="Optimized experience for screen\nreaders, high contrast themes, and\nkeyboard-only navigation."
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/hj86jcdu_expires_30_days.png"
            imageAlt="Web support"
            title="Web support"
            description="Whether you are on your phone, tablet,\nor desktop, you can access your code\nfrom anywhere."
            className="column24"
          />
        </div>
      </div>
    </div>
  );
};

FeatureGridSection.displayName = 'FeatureGridSection';

export default FeatureGridSection;