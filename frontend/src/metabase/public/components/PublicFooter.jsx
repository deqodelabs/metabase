/* eslint-disable react/prop-types */

import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import "./PublicFooter.css";
import Link from "metabase/core/components/Link";
import ExternalLink from "metabase/core/components/ExternalLink";
import LogoIcon from "metabase/components/LogoIcon";

const footers = [
  {
    title: "Learn",
    items: [
      {
        label: "Insights",
        url: "#",
      },
      {
        label: "Docs",
        url: "#",
      },
      {
        label: "Tutorials",
        url: "#",
      },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        label: "Projects Analytics",
        url: "#",
      },
      {
        label: "Chains Analytics",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        label: "Why NFTRover",
        url: "#",
      },
      {
        label: "News",
        url: "#",
      },
      {
        label: "Write for Us",
        url: "#",
      },
      {
        label: "Contact Us",
        url: "mailto:analytics@NFTRover.network",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Discord",
        url: "#",
      },
      {
        label: "Telegram",
        url: "#",
      },
      {
        label: "Twitter",
        url: "#",
      },
      {
        label: "Medium",
        url: "#",
      },
      {
        label: "Youtube",
        url: "#",
      },
    ],
  },
];

const PublicFooter = props => {
  // const { user, onChangeLocation } = props;
  // const emailRef = React.createRef();

  return (
    <footer className="home-footer-container footprint-primary-text">
      <div className="home-footer">
        <div className="home-footer-left">
          <LogoIcon height={28} />
          <span data-nosnippet>
            NFTRover is a powerful yet easy-to-use analytics tool to uncover and
            visualize blockchain data. The product puts user experience first
            whether you’re an analyst, data scientist, developer, student,
            teacher, or executive. It provides an intuitive, drag-and-drop
            interface for interactive data queries.
          </span>
          <span data-nosnippet>
            Disclaimer: All data and articles on NFTRover Analytics are for
            informational purposes only, and do not constitute any investment
            advice.
          </span>
          {/* {!user && (
            <div className="home-footer-left-email">
              <input
                ref={emailRef}
                type="text"
                name="email"
                placeholder="Sign up for our newsletter"
              />
              <div
                onClick={() => {
                  const email = emailRef.current.value;
                  let path;
                  if (isDefi360()) {
                    path = `/defi360/loginModal?loginState=signUp&from=home_footer_signup&email=${email}&redirect=/defi360/protocol-dashboard&project=defi360&disableCheckLogin=true`;
                  } else {
                    path = `/loginModal?loginState=signUp&from=home_footer_signup&email=${email}`;
                  }
                  onChangeLocation(path);
                }}
              >
                Sign up
              </div>
            </div>
          )} */}
        </div>
        <div className="home-footer-right">
          {footers.map(n => (
            <div key={n.title} className="home-footer-right-section">
              <span className=" footprint-title2">{n.title}</span>
              <ul
                role="list"
                itemScope
                itemType="http://www.schema.org/SiteNavigationElement"
              >
                {n.items.map(item => (
                  <li key={item.label} itemProp="name">
                    {item.url.startsWith("mailto") ? (
                      <ExternalLink className="_" href={item.url}>
                        {item.label}
                      </ExternalLink>
                    ) : (
                      <Link
                        itemProp="url"
                        to={item.url}
                        target={
                          item.url.startsWith("http") ||
                          item.url.includes("defi360")
                            ? "_blank"
                            : ""
                        }
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "none" }}>
        keywords：
        <a
          href="https://www.NFTRover.network/sitemap.html"
          title="footprint"
          rel="noreferrer"
          target="_blank"
        >
          <strong>nftrover</strong>
        </a>
        <a
          href="https://www.NFTRover.network/sitemap.xml"
          title="footprint"
          rel="noreferrer"
          target="_blank"
        >
          <strong>nftrover</strong>
        </a>
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser,
  };
};

const mapDispatchToProps = {
  onChangeLocation: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicFooter);
