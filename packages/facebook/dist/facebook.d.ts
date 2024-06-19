import React from "react";
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
declare class FacebookLogin extends React.Component<FacebookLoginProps> {
    static defaultProps: {
        textButton: string;
        scope: string;
        xfbml: boolean;
        cookie: boolean;
        size: string;
        fields: string;
        cssClass: string;
        version: string;
        language: string;
    };
    constructor(props: FacebookLoginProps);
    componentDidMount(): void;
    responseApi: (authResponse: any) => void;
    checkLoginState: (response: any) => void;
    click: () => void;
    renderWithFontAwesome(): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default FacebookLogin;
