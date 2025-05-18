import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SectionJavascript from "./SectionJavascript.js";


import styles from "../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div>
     

      <div className={classNames(classes.main, classes.mainRaised)}>
   
        <SectionJavascript />
      
      </div>
      </div>
  );
}
