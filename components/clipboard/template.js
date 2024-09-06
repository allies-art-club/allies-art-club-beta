"use client";

import React, { useState, useEffect } from "react";
import notClipboard from "../../utils/notClipboard";
import { usePathname } from "next/navigation";

import {
  ClipboardContainer,
  ClipboardWrapper,
  Content,
} from "../Styled/clipboard.styled.js";
const Clipboard = (props) => {
  const [route, setRoute] = useState("/");
  const newRoute = usePathname();
  useEffect(() => {
    setRoute(newRoute);
  }, [newRoute]);
  return (
    <>
      {route && notClipboard.every((el) => route !== el) ? (
        <ClipboardContainer id="clipboard">
          <ClipboardWrapper id="clipboardWrap">
            <Content>{props.children}</Content>
          </ClipboardWrapper>
        </ClipboardContainer>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default Clipboard;
