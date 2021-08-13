import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';

import "../../styles/CreateModal.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    height: 290,

    backgroundColor: theme.palette.background.paper,

    outline: "none",
    borderRadius: "15px",
  },
}));

export default function OpenModal({ open }) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    open(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modalinput">
        <form className="forminput">
        <ClearIcon  onClick={()=>{
        handleClose()
      }}/>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="location"
            variant="outlined"
            type="password"
            style={{ display: "flex", marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="caption"
            variant="outlined"
            type="password"
            style={{ display: "flex", marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="story"
            variant="outlined"
            type="password"
            style={{ display: "flex", marginTop: "10px" }}
          />
          <Button
            variant="contained"
            disabled
            style={{ display: "flex", marginTop: "10px", width: "62%" }}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
