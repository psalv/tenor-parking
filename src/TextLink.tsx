import { colors } from "./colors";
import React from "react";
import styled from "styled-components";

export const TextLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

const StyledLink = styled.a`
color: ${colors.text.brandPrimary.default} !important;
  text-decoration-line: underline;
  text-decoration-thickness: 1.5px;
  position: relative;
  width: fit-content;
  cursor: pointer;
  text-decoration-color: ${colors.border.brandPrimary.default};
  text-underline-offset: 4px;

  &:hover {
    text-decoration-thickness: 2.5px;
  }
`;
