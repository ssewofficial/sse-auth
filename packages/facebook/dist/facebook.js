import { __extends } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from "react";
// import styles from "../styles/facebook.scss";
// interface FacebookLoginProps {
//   callback: (response: any) => void;
//   appId: string;
//   xfbml?: boolean;
//   cookie?: boolean;
//   scope?: string;
//   textButton?: string;
//   autoLoad?: boolean;
//   size?: string;
//   fields?: string;
//   cssClass?: string;
//   version?: string;
//   icon?: string;
//   language?: string;
// }
// class FacebookLogin extends React.Component<FacebookLoginProps> {
//   static defaultProps = {
//     textButton: "Login with Facebook",
//     scope: "public_profile,email",
//     xfbml: false,
//     cookie: false,
//     size: "metro",
//     fields: "name",
//     cssClass: "kep-login-facebook",
//     version: "2.3",
//     language: "en_US",
//   };
//   constructor(props: FacebookLoginProps) {
//     super(props);
//   }
//   componentDidMount() {
//     const { appId, xfbml, cookie, version, autoLoad, language } = this.props;
//     const fbRoot = document.createElement("div");
//     fbRoot.id = "fb-root";
//     document.body.appendChild(fbRoot);
//     window.fbAsyncInit = () => {
//       window.FB.init({
//         version: `v${version}`,
//         appId,
//         xfbml: xfbml as boolean,
//         cookie: cookie as boolean,
//       });
//       if (autoLoad || window.location.search.includes("facebookdirect")) {
//         window.FB.getLoginStatus(this.checkLoginState);
//       }
//     };
//     // Load the SDK asynchronously
//     ((d, s, id) => {
//       const element = d.getElementsByTagName(s)[0];
//       const fjs = element;
//       // let js = element;
//       let js: HTMLScriptElement;
//       if (d.getElementById(id)) {
//         return;
//       }
//       js = d.createElement(s) as HTMLScriptElement;
//       js.id = id;
//       js.src = `//connect.facebook.net/${language}/all.js`;
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   }
//   responseApi = (authResponse: any) => {
//     window.FB.api("/me", { fields: this.props.fields as string }, (me: any) => {
//       Object.assign(me, authResponse);
//       this.props.callback(me);
//     });
//   };
//   checkLoginState = (response: any) => {
//     if (response.authResponse) {
//       this.responseApi(response.authResponse);
//     } else {
//       if (this.props.callback) {
//         this.props.callback({ status: response.status });
//       }
//     }
//   };
//   click = () => {
//     const { scope = "public_profile,email", appId } = this.props;
//     if (navigator.userAgent.match("CriOS")) {
//       window.location.href = `https://www.facebook.com/dialog/oauth?client_id=${appId}&redirect_uri=${window.location.href}&state=facebookdirect&${scope}`;
//     } else {
//       window.FB.login(this.checkLoginState, { scope });
//     }
//   };
//   renderWithFontAwesome() {
//     const { cssClass, size, icon, textButton } = this.props;
//     return (
//       <span>
//         <link
//           rel="stylesheet"
//           href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
//         />
//         <button className={`${cssClass} ${size}`} onClick={this.click}>
//           <i className={`fa ${icon}`}></i> {textButton}
//         </button>
//         <style dangerouslySetInnerHTML={{ __html: styles }}></style>
//       </span>
//     );
//   }
//   render() {
//     const { cssClass, size, icon, textButton } = this.props;
//     if (icon) {
//       return this.renderWithFontAwesome();
//     }
//     return (
//       <span>
//         <button className={`${cssClass} ${size}`} onClick={this.click}>
//           {textButton}
//         </button>
//         <style dangerouslySetInnerHTML={{ __html: styles }}></style>
//       </span>
//     );
//   }
// }
// export default FacebookLogin;
import React from "react";
import styles from "../styles/facebook.scss";
var FacebookLogin = /** @class */ (function (_super) {
    __extends(FacebookLogin, _super);
    function FacebookLogin(props) {
        var _this = _super.call(this, props) || this;
        _this.responseApi = function (authResponse) {
            window.FB.api("/me", { fields: _this.props.fields }, function (me) {
                Object.assign(me, authResponse);
                _this.props.callback(me);
            });
        };
        _this.checkLoginState = function (response) {
            if (response.authResponse) {
                _this.responseApi(response.authResponse);
            }
            else {
                if (_this.props.callback) {
                    _this.props.callback({ status: response.status });
                }
            }
        };
        _this.click = function () {
            var _a = _this.props, scope = _a.scope, appId = _a.appId;
            if (navigator.userAgent.match("CriOS")) {
                window.location.href = "https://www.facebook.com/dialog/oauth?client_id=".concat(appId, "&redirect_uri=").concat(window.location.href, "&state=facebookdirect&").concat(scope);
            }
            else {
                window.FB.login(_this.checkLoginState, { scope: scope });
            }
        };
        return _this;
    }
    FacebookLogin.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, appId = _a.appId, xfbml = _a.xfbml, cookie = _a.cookie, version = _a.version, autoLoad = _a.autoLoad, language = _a.language;
        var fbRoot = document.createElement("div");
        fbRoot.id = "fb-root";
        document.body.appendChild(fbRoot);
        window.fbAsyncInit = function () {
            window.FB.init({
                version: "v".concat(version),
                appId: appId,
                xfbml: xfbml,
                cookie: cookie,
            });
            if (autoLoad || window.location.search.includes("facebookdirect")) {
                window.FB.getLoginStatus(_this.checkLoginState);
            }
        };
        // Load the SDK asynchronously
        (function (d, s, id) {
            var element = d.getElementsByTagName(s)[0];
            var fjs = element;
            var js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.setAttribute("src", "//connect.facebook.net/".concat(language, "/all.js"));
            if (fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        })(document, "script", "facebook-jssdk");
    };
    FacebookLogin.prototype.renderWithFontAwesome = function () {
        var _a = this.props, cssClass = _a.cssClass, size = _a.size, icon = _a.icon, textButton = _a.textButton;
        return (_jsxs("span", { children: [_jsx("link", { rel: "stylesheet", href: "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" }), _jsxs("button", { className: "".concat(cssClass, " ").concat(size), onClick: this.click, children: [_jsx("i", { className: "fa ".concat(icon) }), " ", textButton] }), _jsx("style", { dangerouslySetInnerHTML: { __html: styles } })] }));
    };
    FacebookLogin.prototype.render = function () {
        var _a = this.props, cssClass = _a.cssClass, size = _a.size, icon = _a.icon, textButton = _a.textButton;
        if (icon) {
            return this.renderWithFontAwesome();
        }
        return (_jsxs("span", { children: [_jsx("button", { className: "".concat(cssClass, " ").concat(size), onClick: this.click, children: textButton }), _jsx("style", { dangerouslySetInnerHTML: { __html: styles } })] }));
    };
    FacebookLogin.defaultProps = {
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
    return FacebookLogin;
}(React.Component));
export default FacebookLogin;
//# sourceMappingURL=facebook.js.map