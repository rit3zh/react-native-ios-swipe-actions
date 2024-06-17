import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Title } from "./components/Title/Title";

const config: DocsThemeConfig = {
  logo: (
    <React.Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Playwrite+FR+Moderne:wght@100..400&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://i.ibb.co/YDJ0jgw/Black-and-White-Collection-5-3.png"
          style={{
            width: 60,
            height: 60,
          }}
        />
        <p
          style={{
            fontFamily: "Playwrite FR Moderne",
            fontWeight: "bold",
          }}
          className="logo-text"
        >
          Swipe Actions
        </p>
      </div>
    </React.Fragment>
  ),

  project: {
    link: "https://github.com/rit3zh",
  },
  chat: {
    link: "http://discordapp.com/users/755101874268536893",
  },
  docsRepositoryBase:
    "https://github.com/rit3zh/react-native-ios-swipe-actions",

  // banner: { dismissible: true, key: "banner_", text: "" },
  footer: {
    component: (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginBottom: 0,
          height: 100,
          flexDirection: "column",
          backgroundColor: "#181818",
        }}
      >
        <h1 style={{ marginBottom: 5 }}>Made with ❤️</h1>
        <h1>Copyright © 2024 rit3zh</h1>
      </div>
    ),
  },
  logoLink: "https://i.ibb.co/YDJ0jgw/Black-and-White-Collection-5-3.png",
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 5,
    toggleButton: true,
    titleComponent: ({ title, route, type }) => {
      return <Title title={title} route={route} type={type} />;
    },
  },

  navbar: {
    extraContent: (
      <>
        <a href="https://www.paypal.com/paypalme/RiteshFNU">
          <img
            src="https://static-00.iconduck.com/assets.00/paypal-icon-434x512-xm1a28m0.png"
            width={20}
            height={1000}
            style={{ marginLeft: 10 }}
          />
        </a>
        <a href="https://ko-fi.com/rit3zh#paypalModal" target="_blank">
          <img
            width={45}
            height={1000}
            style={{ marginLeft: 10 }}
            src="https://assets-global.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69e9f4_ko-fi_logo_01-p-500.png"
            alt="Ko Fi"
          />
        </a>
        <a href="https://cash.app/$riteshxf" target="_blank">
          <img
            width={58}
            height={1000}
            style={{ marginLeft: -10 }}
            src="https://i.ibb.co/308Hy6W/cashappwhite.png"
            alt="CashApp"
          />
        </a>
      </>
    ),
  },
};

export default config;
