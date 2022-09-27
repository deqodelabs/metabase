/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { t } from "ttag";

import _ from "underscore";

import cx from "classnames";

export default class Description extends Component {
  constructor(props) {
    super(props);
  }

  static uiName = t`Description`;
  static identifier = "description";
  static iconName = "description";

  static isSensible(data) {
    return data.length;
  }

  static checkRenderable(data) {
    return data;
  }

  render() {
    const {
      series: [
        {
          data: { rows },
        },
      ],
    } = this.props;

    const value = rows[0] && typeof rows[0][0] === "string" ? rows[0][0] : 0;

    return (
      <div className={cx(this.props.className, "flex layout-centered")}>
        <div
          className="flex-full full-height flex flex-column justify-center"
          style={{ padding: 10, paddingTop: 0 }}
        >
          <div
            ref={this.containerRef}
            className="relative text-bold text-medium"
            style={{ height: 150 }}
          >
            <div
              ref={this.labelRef}
              style={{
                position: "absolute",
                fontWeight: "600",
                color: "#4C5773",
                fontSize: 18,
              }}
            >
              {value}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
