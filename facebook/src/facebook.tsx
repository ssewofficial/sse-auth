import React from "react";
import styles from "./styles";

interface FacebookLoginProps {
  callback: (response: any) => void;
  appId: string;
  xfbml?: boolean;
  cookie?: boolean;
  scope?: string;
  textButton?: string;
  autoLoad?: boolean;
  size?: string;
  fields?: string;
  cssClass?: string;
  version?: string;
  icon?: string;
  language?: string;
}

class FacebookLogin extends React.Component<FacebookLoginProps> {
  static defaultProps = {
    textButton: "Login with Facebook",
    scope: "public_profile,email",
    xfbml: false,
    cookie: false,
    size: "metro",
    fields: "name",
    cssClass: "kep-login-facebook",
    version: "2.0.0",
    language: "en_US",
  };

  constructor(props: FacebookLoginProps) {
    super(props);
  }

  componentDidMount() {
    const { appId, xfbml, cookie, version, autoLoad, language } = this.props;
    const fbRoot = document.createElement("div");
    fbRoot.id = "fb-root";

    document.body.appendChild(fbRoot);

    (window as any).fbAsyncInit = () => {
      (window as any).FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie,
      });

      if (autoLoad || window.location.search.includes("facebookdirect")) {
        (window as any).FB.getLoginStatus(this.checkLoginState);
      }
    };
    // Load the SDK asynchronously
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.setAttribute("src", `//connect.facebook.net/${language}/all.js`);
      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }

  fetchUser = (authResponse: any, callback: (response: any) => void) => {
    (window as any).FB.api("/me", { fields: this.props.fields }, (me: any) => {
      Object.assign(me, authResponse);
      callback(me);
    });
  };

  responseApi = (authResponse: any) => {
    this.fetchUser(authResponse, this.props.callback);
  };

  checkLoginState = (response: any) => {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.callback) {
        this.props.callback({ status: response.status });
      }
    }
  };

  click = () => {
    const { scope, appId } = this.props;
    if (navigator.userAgent.match("CriOS")) {
      window.location.href = `https://www.facebook.com/dialog/oauth?client_id=${appId}&redirect_uri=${window.location.href}&state=facebookdirect&${scope}`;
    } else {
      (window as any).FB.login(this.checkLoginState, { scope });
    }
  };

  renderWithFontAwesome() {
    const { cssClass, size, icon, textButton } = this.props;
    return (
      <span>
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <button className={`${cssClass} ${size}`} onClick={this.click}>
          <i className={`fa ${icon}`}></i> {textButton}
        </button>
        <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      </span>
    );
  }

  render() {
    const { cssClass, size, icon, textButton } = this.props;
    if (icon) {
      return this.renderWithFontAwesome();
    }

    return (
      <span>
        <button className={`${cssClass} ${size}`} onClick={this.click}>
          {textButton}
        </button>
        <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      </span>
    );
  }
}

export default FacebookLogin;
