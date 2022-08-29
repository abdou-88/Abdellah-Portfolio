import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaArrowsAlt, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Modal from "@material-ui/core/Modal/";


import { ThemeContext } from "../../../contexts/ThemeContext";

import placeholder from "../../../assets/img/ComingS.jpg";


import "./SingleProject.css";


function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const { setHandlePopUp } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  

  const handlePopUpOpen = () => {    
    setOpen(true);
    setHandlePopUp();
  };

  const handlePopUpClose = () => {
    setOpen(false);
    setHandlePopUp();
  };

  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,

      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
    MuiModal: {
      width: "11em",
      fontFamily: " var(--primaryFont)",
      fontStyle: " normal",
      fontWeight: " normal",
      fontSize: " 24px",
      background: theme.secondary,
      overflow: "hidden",
      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
     
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Fade bottom>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: theme.primary400 }}
        >
          <div className="projectContent">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: theme.tertiary }}
            >
              {name}
            </h2>
            <img
              style={{ width: "" }}
              src={image ? image : placeholder}
              alt={name}
            />
            <div className="project--showcaseBtn">
              <a
                href={() => false}
                onClick={handlePopUpOpen}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-demo`}
              >
                <FaArrowsAlt
                  id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                  className={classes.icon}
                  aria-label="FullScreen"
                />
              </a>
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-code`}
              >
                <FaCode
                  id={`${name.replace(" ", "-").toLowerCase()}-code`}
                  className={classes.icon}
                  aria-label="Code"
                />
              </a>
            </div>
          </div>
          <p
            className="project--desc"
            style={{
              background: theme.secondary,
              color: theme.tertiary,
            }}
          >
            {desc}
          </p>
          <div
            className="project--lang"
            style={{
              background: theme.secondary,
              color: theme.tertiary80,
            }}
          >
            {tags.map((tag, id) => (
              <span key={id}>{tag}</span>
            ))}
          </div>
        </div>
      </Fade>

      {/* /////////////////////////////////// */}

      <Modal open={open} className="popupProg" onClose={handlePopUpClose}>
        <div className="popupProgBox">
          <img
            style={{ width: "100%", height: "100%" }}
            src={demo}
            alt={name}
          />
        </div>
      </Modal>
    </>
  );
}

export default SingleProject;
