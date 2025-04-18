import React from 'react';
import { FeatureItem } from '../common/FeatureItem';

const CodeAnywhereSection: React.FC = () => {
  return (
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
  );
};

CodeAnywhereSection.displayName = 'CodeAnywhereSection';

export default CodeAnywhereSection;