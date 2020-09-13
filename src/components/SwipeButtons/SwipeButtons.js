import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarsIcon from "@material-ui/icons/Stars";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipButtons">
      <IconButton className="swipButtons__repeat swipButtons__icon">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipButtons__left swipButtons__icon">
        <HighlightOffIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipButtons__star swipButtons__icon">
        <StarsIcon fontSize="large"/>
      </IconButton>
      <IconButton className="swipButtons__right swipButtons__icon">
        <FavoriteBorderIcon  fontSize="large"/>
      </IconButton>
      <IconButton className="swipButtons__lighting swipButtons__icon">
        <FlashOnIcon  fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
