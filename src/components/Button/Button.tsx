/*
 * @Author: Vir
 * @Date: 2021-06-26 20:02:09
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-28 16:09:02
 */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({ children, type, ...props }) => {
  const contained = css`
    background-color: rgb(95, 95, 95);
    color: white;
  `;
  const vmdcBtn = css`
    border-radius: 4px;
    padding: 8px 22px;
    font-size: 12px;
    border: 1px solid transparent;
    box-shadow: none;
    transition: all 0.3s;
    background-color: white;
    border-color: #d9d9d9;
    cursor: pointer;
    ${type === "contained" ? contained : ""}
  `;
  return (
    <button type="button" css={vmdcBtn}>
      {children}
    </button>
  );
};
