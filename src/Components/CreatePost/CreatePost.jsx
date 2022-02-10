import React, { useState, useRef } from "react";
import cn from "classnames";
import "./styles.css";

const INITIAL_HEIGHT = 46;

const CommentBox = () => {
  const [isExpanded, setIsExpanded] = useState(false); //boolean to expand box
  const [commentValue, setCommentValue] = useState(""); // stores comment input

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  return ();
};

export default CommentBox;