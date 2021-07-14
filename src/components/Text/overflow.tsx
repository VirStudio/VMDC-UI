/*
 * @Author: Vir
 * @Date: 2021-07-05 17:40:33
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-11 20:33:03
 */

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { TextOverflowProps } from "./interface";

const Overflow: React.FC<TextOverflowProps> = ({
  element = "p",
  row = 1,
  children,
  ...props
}) => {
  const TextOverflowBaseCss = css`
    width: 100%;
  `;
  const TextOverflowContentCss = css`
    width: inherit;
    display: -webkit-box;
    -webkit-line-clamp: ${row};
    -webkit-box-orient: vertical;
    text-align: justify;
    overflow: ellipsis;
    > * {
      width: inherit;
    }
  `;
  return (
    <div css={TextOverflowBaseCss}>
      <div css={TextOverflowContentCss}>
        {React.createElement(element, {}, children)}
      </div>
    </div>
  );
};

export default Overflow;
