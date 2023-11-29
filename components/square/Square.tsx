import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@/components/buttons/icons/CloseIcon";
import styles from "./Square.module.css";

const Square  = ({ backgroundColor, hoverBackgroundColor , deleteSquare }) => {
  const boxStyle = {
    width: 300,
    height: 300,
    backgroundColor: backgroundColor,
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
      opacity: [0.9, 0.8, 0.7],
    },
  };

  const removeSquare = () => {
    if (deleteSquare) {
        deleteSquare();
    }
  };

  return (
    <div className={styles["interview-box-container"]}>
      <Box sx={boxStyle} />
      <Button variant="contained" startIcon={<CloseIcon />} onClick={removeSquare} >
        Delete
      </Button>
    </div>
  );
};

export default Square;