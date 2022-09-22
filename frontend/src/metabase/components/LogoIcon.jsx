import React, { Component } from "react";
import PropTypes from "prop-types";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.0820312"
          y="9.66602"
          width="5.99245"
          height="5.99245"
          transform="rotate(-34 0.0820312 9.66602)"
          fill="white"
        />
        <rect
          x="7"
          y="17.2217"
          width="3.97299"
          height="3.97299"
          transform="rotate(-34 7 17.2217)"
          fill="white"
        />
        <rect
          x="15"
          y="5.22168"
          width="3.97299"
          height="3.97299"
          transform="rotate(-34 15 5.22168)"
          fill="white"
        />
        <rect
          x="2"
          y="17.6514"
          width="2.95343"
          height="3.3158"
          transform="rotate(-34 2 17.6514)"
          fill="white"
        />
        <rect
          x="12"
          y="23.6567"
          width="2.96308"
          height="2.96308"
          transform="rotate(-34 12 23.6567)"
          fill="white"
        />
        <rect x="3" y="21" width="8" height="10" fill="white" />
        <rect x="22" y="1" width="8" height="7" fill="white" />
        <rect x="22" y="10" width="8" height="21" fill="white" />
        <path d="M4.5 4.5L22 31V18.5V18V17.5L11.5 1H3V4.5H4.5Z" fill="white" />
      </svg>
    );
  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
