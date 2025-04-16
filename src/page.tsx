import React, { useState } from "react";
import "./index.css";
import "./App.css";

export interface ElementLightProps {
  // 필요한 경우 props 타입 정의
}

export const ElementLight: React.FC<ElementLightProps> = () => {
  const [input1, setInput1] = useState<string>("");

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="view">
          <div className="row-view">
            <div className="row-view2">
              <span className="text">{"Docs"}</span>
              <span className="text2">{"Updates"}</span>
              <span className="text">{"Blog"}</span>
              <span className="text2">{"API"}</span>
              <div className="column">
                <span className="text">{"Extensions"}</span>
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
            />
            <div className="row-view3">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/77qe7xx5_expires_30_days.png"
                }
                className="image2"
                alt="Search icon"
              />
              <input
                placeholder={"Search Docs"}
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
                className="input"
              />
            </div>
            <button
              className="button"
              onClick={() => alert("Pressed!")}
            >
              <span className="text5">{"Download"}</span>
            </button>
          </div>
        </div>
        <div className="row-view4">
          <span className="text6">{"Join us for"}</span>
          <span className="text7">{"VS Code Live: Agent Mode Day"}</span>
          <span className="text8">{"on April 16th!"}</span>
          <span className="text9">{"×"}</span>
        </div>
        <div className="column2">
          <span className="text10">
            {"Your code editor.\nRedefined with AI."}
          </span>
          <div className="view3">
            <div className="column3">
              <div className="row-view5">
                <button
                  className="button2"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text11">{"Download for Windows"}</span>
                </button>
                <button
                  className="button3"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text12">{"Try agent mode"}</span>
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
          />
          <div className="view4">
            <span className="text17">{"Pause"}</span>
          </div>
        </div>
        <div className="row-view7">
          <button
            className="button-column"
            onClick={() => alert("Pressed!")}
          >
            <span className="text18">{"Any model for any team"}</span>
            <span className="text19">
              {
                "Use AI models like Claude Sonnet out of the\nbox, or bring your own key to access models\nfrom Azure, Anthropic, Google, Ollama,\nOpenAI, and OpenRouter."
              }
            </span>
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
              }
              className="image4"
              alt="AI models"
            />
          </button>
          <div className="column4">
            <span className="text20">{"An expert on your codebase"}</span>
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
            />
          </div>
          <button
            className="button-column2"
            onClick={() => alert("Pressed!")}
          >
            <span className="text22">
              {"AI that works the way your team\ndoes"}
            </span>
            <span className="text23">
              {
                "Personalize interactions using custom\ninstructions and reusable prompt files tailored\nto your workflows, tools, and projects."
              }
            </span>
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3b9g6uic_expires_30_days.png"
              }
              className="image6"
              alt="Team workflow"
            />
          </button>
        </div>
        <div className="column5">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/pquoo7c3_expires_30_days.png"
            }
            className="image7"
            alt="Agent mode banner"
          />
          <div className="row-view8">
            <div className="column6">
              <span className="text24">{"Agent mode"}</span>
              <span className="text25">
                {
                  "Tackle complex, multi-step tasks. Agent mode\nreads your codebase, suggests edits across files,\nruns terminal commands, and responds to compile\nor test failures — all in a loop until the job is done.\nFurther refine agent mode to fit your team's\nworkflows with VS Code extensions and Model\nContext Protocol (MCP) servers."
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
            />
          </div>
        </div>
        <div className="row-view9">
          <div className="column7">
            <span className="text27">{"Next Edit Suggestions"}</span>
            <span className="text28">
              {
                "VS Code predicts your next move as you code.\nUse the Tab key to accept AI-powered suggestions\nright in your editor. It intelligently recommends\nwhat to change — and where — based on the\nedits you're already making."
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
          />
        </div>
        <div className="row-view10">
          <div className="column8">
            <span className="text29">{"Code with extensions"}</span>
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
        <div className="row-view12">
          <div className="column12">
            <span className="text27">{"Code in any language"}</span>
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
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/npej1gbo_expires_30_days.png"
              }
              className="image10"
              alt="C#"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/galis5mx_expires_30_days.png"
              }
              className="image10"
              alt="Java"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/uytjnj36_expires_30_days.png"
              }
              className="image11"
              alt="Markdown"
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
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/4mjhjt4e_expires_30_days.png"
              }
              className="image10"
              alt="C++"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/rn1gdr2s_expires_30_days.png"
              }
              className="image10"
              alt="JSON"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3dotlvo_expires_30_days.png"
              }
              className="image11"
              alt="Powershell"
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
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ledfdddn_expires_30_days.png"
              }
              className="image10"
              alt="HTML"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/h3cm93tt_expires_30_days.png"
              }
              className="image10"
              alt="PHP"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/n0pdqox3_expires_30_days.png"
              }
              className="image11"
              alt="YAML"
            />
          </div>
          <div className="column15">
            <span className="text36">{"Python"}</span>
            <span className="text36">{"HTML"}</span>
            <span className="text36">{"PHP"}</span>
            <span className="text37">{"YAML"}</span>
          </div>
        </div>
        <div className="row-view13">
          <div className="column16">
            <span className="text38">{"Fully customizable"}</span>
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
          />
        </div>
        <div className="row-view13">
          <div className="column18">
            <span className="text38">{"Code anywhere"}</span>
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
          />
        </div>
        <div className="column20">
          <div className="column21">
            <span className="text51">{"Code with rich features"}</span>
            <span className="text52">
              {
                "There's a lot more to an editor. Whether it's using built-in features or\nrich extensions, there's something for everyone."
              }
            </span>
          </div>
          <div className="column22">
            <div className="row-view14">
              <div className="column23">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jn6dhmj5_expires_30_days.png"
                  }
                  className="image14"
                  alt="Integrated terminal"
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
              <div className="column25">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/gicfrmnw_expires_30_days.png"
                  }
                  className="image14"
                  alt="Local history"
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
        <div className="column26">
          <div className="row-view16">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3ronyp9z_expires_30_days.png"
              }
              className="image15"
              alt="GitHub logo"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/j1m2e4c1_expires_30_days.png"
              }
              className="image16"
              alt="Microsoft logo"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/06gvyj3x_expires_30_days.png"
              }
              className="image17"
              alt="Visual Studio logo"
            />
            <div className="box"></div>
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ltsl2qj2_expires_30_days.png"
              }
              className="image18"
              alt="Azure logo"
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