import React, { useState, useCallback, useMemo } from "react";
import "./index.css";
import "./App.css";

export interface ElementLightProps {
  // 필요한 경우 props 타입 정의
}

// 헤더 컴포넌트 분리
const Header = React.memo(() => {
  const [input1, setInput1] = useState<string>("");

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  }, []);

  const handleDownloadClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  return (
    <div className="row-view">
      <div className="row-view2">
        <span className="text">{"Docs"}</span>
        <span className="text2">{"Updates"}</span>
        <div className="column">
          <div className="view2">
            <span className="text3">{"FAQ"}</span>
          </div>
        </div>
        <span className="text4">{"GitHub Copilot"}</span>
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/embfm61j_expires_30_days.png"
        }
        className="image"
        alt="Theme"
        loading="lazy"
      />
      <div className="row-view3">
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/77qe7xx5_expires_30_days.png"
          }
          className="image2"
          alt="Search icon"
          loading="lazy"
        />
        <input
          placeholder={"Search Docs"}
          value={input1}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      <button
        className="button"
        onClick={handleDownloadClick}
      >
        <span className="text5">{"Download"}</span>
      </button>
    </div>
  );
});

Header.displayName = 'Header';

// 알림 배너 컴포넌트 분리
const AlertBanner = React.memo(() => (
  <div className="row-view4">
  </div>
));

AlertBanner.displayName = 'AlertBanner';

// 메인 히어로 섹션 컴포넌트 분리
const HeroSection = React.memo(() => {
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
});

HeroSection.displayName = 'HeroSection';

// 기능 카드 컴포넌트 분리
const FeatureCard = React.memo(({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  onClick,
  className
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    className={className}
    onClick={onClick}
  >
    <span className="text18">{title}</span>
    <span className="text19">{description}</span>
    <img
      src={imageSrc}
      className="image4"
      alt={imageAlt}
      loading="lazy"
    />
  </button>
));

FeatureCard.displayName = 'FeatureCard';

// 세 개의 기능 카드 섹션 컴포넌트 분리
const FeatureSection = React.memo(() => {
  const handleCardClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  return (
    <div className="row-view7">
      <FeatureCard
        title="모든 로그를 하나로 보세요."
        description="Use AI models like Claude Sonnet out of the\nbox, or bring your own key to access models\nfrom Azure, Anthropic, Google, Ollama,\nOpenAI, and OpenRouter."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
        imageAlt="AI models"
        onClick={handleCardClick}
        className="button-column"
      />
      <div className="column4">
        <span className="text20">{"로그에서 신속하게 다른 앱으로."}</span>
        <span className="text21">
          {
            "Your codebase is indexed locally and remotely (on\nGitHub) to understand what's relevant, enabling\nfast, context-aware interactions."
          }
        </span>
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1mrgcw8t_expires_30_days.png"
          }
          className="image5"
          alt="Codebase expert"
          loading="lazy"
        />
      </div>
      <FeatureCard
        title="AI 를 사용하여 일상을 향상시키세요."
        description="Personalize interactions using custom\ninstructions and reusable prompt files tailored\nto your workflows, tools, and projects."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3b9g6uic_expires_30_days.png"
        imageAlt="Team workflow"
        onClick={handleCardClick}
        className="button-column2"
      />
    </div>
  );
});

FeatureSection.displayName = 'FeatureSection';

// 메인 컴포넌트
export const ElementLight: React.FC<ElementLightProps> = () => {
  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="view">
          <Header />
        </div>
        <AlertBanner />
        <HeroSection />
        <FeatureSection />
        
        {/* 나머지 페이지 내용 */}
        <div className="column5">
          <img
            src={
              ""
            }
            className="image7"
            alt=""
            loading="lazy"
          />
          <div className="row-view8">
            <div className="column6">
              <span className="text24">{"모든 로그를 하나의 앱으로."}</span>
              <span className="text25">
                {
                  "Loop monitors the screen and keyboardSave log Save log Save log Save logIf you click on that log, you will go to that log!Don't worry! Your personal information and monitoring information areIt's strictly managed and there's no need for Kwon Hwan."
                }
              </span>
              <span className="text26">{"Build with agent mode"}</span>
            </div>
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1xar340x_expires_30_days.png"
              }
              className="image8"
              alt="Agent mode demo"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* 클라우드 저장 섹션 */}
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
        
        {/* 확장 프로그램 섹션 */}
        <div className="row-view10">
          <div className="column8">
            <span className="text29">{"탑재된 AI 로 더욱 더 효율적인 일상"}</span>
            <div className="column9">
              <div className="column10">
                <span className="text30">
                  {
                    "Customize VS Code with AI-powered functionality\nfrom extensions and Model Context Protocol\nservers to use in Chat. Or,"
                  }
                </span>
                <span className="absolute-text">{"build your own"}</span>
              </div>
              <span className="text31">{"extension"}</span>
              <span className="text32">
                {"to power your team's unique scenarios."}
              </span>
            </div>
          </div>
          <div className="column11">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/xi1nlxg5_expires_30_days.png"
              }
              className="image9"
              alt="Extensions"
              loading="lazy"
            />
            <div className="row-view11">
              <span className="text33">
                {"View 60k+ extensions in the"}
              </span>
              <span className="text34">
                {"Extension Marketplace"}
              </span>
            </div>
          </div>
        </div>
        
        {/* 언어 지원 섹션 */}
        <div className="row-view12">
          {/* ...나머지 코드... */}
          <div className="column12">
            <span className="text27">{"정확한 타자 수와 정확성 제공"}</span>
            <span className="text35">
              {
                "VS Code supports almost every major\nprogramming language. Several ship in the box,\nlike JavaScript, TypeScript, CSS, and HTML, but\nextensions for others can be found in the VS Code\nMarketplace."
              }
            </span>
          </div>
          <div className="column13">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/r7tu88m5_expires_30_days.png"
              }
              className="image10"
              alt="JavaScript"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/npej1gbo_expires_30_days.png"
              }
              className="image10"
              alt="C#"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/galis5mx_expires_30_days.png"
              }
              className="image10"
              alt="Java"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/uytjnj36_expires_30_days.png"
              }
              className="image11"
              alt="Markdown"
              loading="lazy"
            />
          </div>
          <div className="column14">
            <span className="text36">{"JavaScript"}</span>
            <span className="text36">{"C#"}</span>
            <span className="text36">{"Java"}</span>
            <span className="text37">{"Markdown"}</span>
          </div>
          <div className="column13">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wgnmx13u_expires_30_days.png"
              }
              className="image10"
              alt="TypeScript"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/4mjhjt4e_expires_30_days.png"
              }
              className="image10"
              alt="C++"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/rn1gdr2s_expires_30_days.png"
              }
              className="image10"
              alt="JSON"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3dotlvo_expires_30_days.png"
              }
              className="image11"
              alt="Powershell"
              loading="lazy"
            />
          </div>
          <div className="column14">
            <span className="text36">{"TypeScript"}</span>
            <span className="text36">{"C++"}</span>
            <span className="text36">{"JSON"}</span>
            <span className="text37">{"Powershell"}</span>
          </div>
          <div className="column13">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/g2kx4ild_expires_30_days.png"
              }
              className="image10"
              alt="Python"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ledfdddn_expires_30_days.png"
              }
              className="image10"
              alt="HTML"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3cm93tt_expires_30_days.png"
              }
              className="image10"
              alt="PHP"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/n0pdqox3_expires_30_days.png"
              }
              className="image11"
              alt="YAML"
              loading="lazy"
            />
          </div>
          <div className="column15">
            <span className="text36">{"Python"}</span>
            <span className="text36">{"HTML"}</span>
            <span className="text36">{"PHP"}</span>
            <span className="text37">{"YAML"}</span>
          </div>
        </div>
        
        {/* 커스터마이징 섹션 */}
        <div className="row-view13">
          <div className="column16">
            <span className="text38">{"UI 를 마음대로 수정."}</span>
            <span className="text39">
              {
                "Customize your VS Code UI and layout so that it\nfits your coding style."
              }
            </span>
            <div className="column17">
              <span className="text31">{"Color themes"}</span>
              <span className="text40">
                {"let you modify the colors in VS"}
              </span>
              <span className="text41">
                {
                  "Code's user interface to suit your preferences and\nwork environment."
                }
              </span>
            </div>
            <div className="column17">
              <span className="text31">{"Settings Sync"}</span>
              <span className="text42">
                {"enables you to share your user"}
              </span>
              <span className="text43">
                {
                  "settings across your VS Code instances with the\nSettings Sync feature."
                }
              </span>
            </div>
            <div className="column9">
              <span className="text31">{"Profiles"}</span>
              <span className="text44">
                {"let you create sets of customizations and"}
              </span>
              <span className="text45">
                {
                  "quickly switch between them or share them with\nothers."
                }
              </span>
            </div>
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
        
        {/* 코드 어디서나 섹션 */}
        <div className="row-view13">
          <div className="column18">
            <span className="text38">{"다양한 기능과 다양한 앱들"}</span>
            <span className="text46">
              {
                "Code wherever you're most productive, whether\nyou're connected to the cloud, a remote repository,\nor in the browser with VS Code for the Web\n(vscode.dev)."
              }
            </span>
            <div className="column19">
              <span className="text26">{"Built-in Source Control"}</span>
              <span className="text47">{"empowers you with Git"}</span>
              <span className="text48">
                {
                  "support out-of-the-box. Many other source control\nproviders are available through extensions."
                }
              </span>
            </div>
            <div className="column9">
              <span className="text31">{"GitHub Codespaces"}</span>
              <span className="text49">
                {"provides cloud-powered"}
              </span>
              <span className="text50">
                {
                  "development environments for any activity -\nwhether it's a long-term project, or a short-term\ntask like reviewing a pull request."
                }
              </span>
            </div>
          </div>
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/m4ht8xpi_expires_30_days.png"
            }
            className="image13"
            alt="Code anywhere"
            loading="lazy"
          />
        </div>
        
        {/* 다양한 기능 섹션 */}
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
              {/* ...나머지 코드... */}
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jn6dhmj5_expires_30_days.png"
                  }
                  className="image14"
                  alt="Integrated terminal"
                  loading="lazy"
                />
                <span className="text53">{"Integrated terminal"}</span>
                <span className="text54">
                  {
                    "Use your favorite shell whether it's zsh,\npwsh, or git bash, all inside the editor."
                  }
                </span>
              </div>
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/xlzm8ahj_expires_30_days.png"
                  }
                  className="image14"
                  alt="Run code"
                  loading="lazy"
                />
                <span className="text55">{"Run code"}</span>
                <span className="text56">
                  {"Run and debug your code without\nleaving your editor."}
                </span>
              </div>
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wz1lwntk_expires_30_days.png"
                  }
                  className="image14"
                  alt="Version control"
                  loading="lazy"
                />
                <span className="text55">{"Version control"}</span>
                <span className="text56">
                  {
                    "Built-in support for git and many other\nsource control providers."
                  }
                </span>
              </div>
              <div className="column24">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/pkxvogvt_expires_30_days.png"
                  }
                  className="image14"
                  alt="Build tasks"
                  loading="lazy"
                />
                <span className="text55">{"Build tasks"}</span>
                <span className="text54">
                  {
                    "Run tools and analyze their results from\nwithin VS Code."
                  }
                </span>
              </div>
            </div>
            <div className="row-view15">
              {/* ...나머지 코드... */}
              <div className="column25">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/gicfrmnw_expires_30_days.png"
                  }
                  className="image14"
                  alt="Local history"
                  loading="lazy"
                />
                <span className="text55">{"Local history"}</span>
                <span className="text56">
                  {
                    "Never lose your changes with\nautomatically tracked local history."
                  }
                </span>
              </div>
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/zkagpy1r_expires_30_days.png"
                  }
                  className="image14"
                  alt="Themes"
                  loading="lazy"
                />
                <span className="text55">{"Themes"}</span>
                <span className="text54">
                  {
                    "Your theme is an extension of your\npersonality. Add some flair to your\neditor and add your touch."
                  }
                </span>
              </div>
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/glyoadv3_expires_30_days.png"
                  }
                  className="image14"
                  alt="Accessibility"
                  loading="lazy"
                />
                <span className="text55">{"Accessibility"}</span>
                <span className="text54">
                  {
                    "Optimized experience for screen\nreaders, high contrast themes, and\nkeyboard-only navigation."
                  }
                </span>
              </div>
              <div className="column24">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/hj86jcdu_expires_30_days.png"
                  }
                  className="image14"
                  alt="Web support"
                  loading="lazy"
                />
                <span className="text53">{"Web support"}</span>
                <span className="text56">
                  {
                    "Whether you are on your phone, tablet,\nor desktop, you can access your code\nfrom anywhere."
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 푸터 섹션 */}
        <div className="column26">
          <div className="row-view16">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3ronyp9z_expires_30_days.png"
              }
              className="image15"
              alt="GitHub logo"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/j1m2e4c1_expires_30_days.png"
              }
              className="image16"
              alt="Microsoft logo"
              loading="lazy"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/06gvyj3x_expires_30_days.png"
              }
              className="image17"
              alt="Visual Studio logo"
              loading="lazy"
            />
            <div className="box"></div>
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ltsl2qj2_expires_30_days.png"
              }
              className="image18"
              alt="Azure logo"
              loading="lazy"
            />
          </div>
          <div className="row-view17">
            <span className="text57">{"Support"}</span>
            <span className="text58">{"Privacy"}</span>
            <span className="text59">{"Terms of Use"}</span>
            <span className="text60">{"License"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementLight;