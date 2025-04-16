import React from "react";
import './index.css';
import './App.css';

// 임시 컴포넌트 생성
const Background = () => <div className="background"></div>;
const BackgroundBorderWrapper = () => <div className="background-border-wrapper"></div>;
const Div = () => <div className="div-component"></div>;
const DivWrapper = () => <div className="div-wrapper"></div>;
const Footer = () => <footer className="footer"></footer>;
const Section = () => <section className="section"></section>;
const Section1 = () => <section className="section-1"></section>;
const Section2 = () => <section className="section-2"></section>;
const Section3 = () => <section className="section-3"></section>;
const SectionComponentNode = () => <div className="section-component-node"></div>;
const SectionWrapper = () => <div className="section-wrapper"></div>;

// 임시 SVG 데이터
const searchSvgData = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiPjwvY2lyY2xlPjxsaW5lIHgxPSIyMSIgeTE9IjIxIiB4Mj0iMTYuNjUiIHkyPSIxNi42NSI+PC9saW5lPjwvc3ZnPg==";
const themeDarkSvgData = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMSAxMi43OUE5IDkgMCAxIDEgMTEuMjEgMyA3IDcgMCAwIDAgMjEgMTIuNzl6Ij48L3BhdGg+PC9zdmc+";

export const ElementLight = (): React.ReactElement => {
  return (
    <div className="element-light">
      <Background />
      <div className="overlap-6">
        <Section />
        <BackgroundBorderWrapper />
      </div>

      <SectionWrapper />
      <DivWrapper />
      <Div />
      <SectionComponentNode />
      <Section1 />
      <Section2 />
      <div className="overlap-7">
        <Section3 />
        <Footer />
      </div>

      <div className="background-border-2">
        <div className="overlap-8">
          <div className="text-wrapper-22">Join us for</div>

          <div className="link-20">
            <p className="text-wrapper-23">VS Code Live: Agent Mode Day</p>
          </div>
        </div>

        <div className="on-april"> on April 16th!</div>

        <button className="button-2">
          <div className="text-wrapper-24">×</div>
        </button>
      </div>

      <div className="navigation-top-level-wrapper">
        <div className="navigation-top-level">
          <div className="overlap-9">
            <div className="link-21">
              <div className="text-wrapper-25">Visual Studio Code</div>
            </div>

            <div className="container-10">
              <div className="list-3">
                <div className="item-link-3">
                  <div className="text-wrapper-26">Docs</div>
                </div>

                <div className="item-link-4">
                  <div className="text-wrapper-26">Updates</div>
                </div>

                <div className="item-link-5">
                  <div className="text-wrapper-26">Blog</div>
                </div>

                <div className="item-link-6">
                  <div className="text-wrapper-26">API</div>
                </div>

                <div className="item-link-7">
                  <div className="text-wrapper-26">Extensions</div>
                </div>

                <div className="item-link-8">
                  <div className="text-wrapper-26">FAQ</div>
                </div>

                <div className="item-link-9">
                  <div className="text-wrapper-27">GitHub Copilot</div>
                </div>
              </div>

              <div className="item-button">
                <div className="switch-to-the-light">
                  <div className="theme-dark-svg-fill">
                    <img
                      className="theme-dark-svg"
                      alt="Theme dark svg"
                      src={themeDarkSvgData}
                    />
                  </div>
                </div>
              </div>

              <div className="search-search">
                <div className="overlap-group-5">
                  <div className="input-search-text">
                    <div className="container-11">
                      <div className="text-wrapper-28">Search Docs</div>
                    </div>
                  </div>

                  <div className="button-search">
                    <div className="search">
                      <div className="search-svg-fill">
                        <img
                          className="search-svg"
                          alt="Search svg"
                          src={searchSvgData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-link-10">
                <div className="text-wrapper-29">Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementLight;