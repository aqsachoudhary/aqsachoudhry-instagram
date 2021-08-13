import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from '@material-ui/icons/Clear';

import "../../styles/DeleteModal.css";
import PostData from "../../helper/PostData";
import { getHomeList, deleteHomeList } from "../../store/Home/HomeAction";
import { useHistory } from "react-router-dom";

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
    width: 250,
    height: 180,

    backgroundColor: theme.palette.background.paper,

    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // border: "none",
    outline: "none",
    borderRadius: "15px",
  },
}));

export default function OpenModal({ open, id }) {
  //   console.log("hheb ajge img>>", img);
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();
  const { homeListStore, loading } = useSelector(({ home }) => home);
  console.log("hello i   homeListStore>>", homeListStore);

  const [openDelete, setOpenDeleteModal] = useState(false);
  const [employess, setEmployess] = useState([]);
  
  const handleClose = () => {
    open(false);
  };

  useEffect(() => {
    dispatch(getHomeList());
  }, []);
  useEffect(() => {
    // console.log(`customersList`, customersList);
    if (!homeListStore) {
      dispatch(getHomeList());
    }
    setEmployess(homeListStore);
  }, [homeListStore]);
  useEffect(() => {
    setEmployess(PostData);
  }, []);
  const history = useHistory();
  const onDelete = (id) => {
    console.log("id hello", id);
    dispatch(deleteHomeList(id));
  };
  const handleDelete = () => {
    onDelete(id);
    setOpenDeleteModal(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* <div className="buttons"> */}
      <ClearIcon  onClick={()=>{
        handleClose()
      }}/>
      <p className="delete">Are u sure u want to delete?</p>
      <div className="button">
        <Button variant="contained" onClick={handleClose}>
          cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          // onClick={() => {
          //   onDelete(id);
          //   setDeleteId(id);
          //   setOpenDeleteModal(true);
          //   onClick = { deleteBtnClick };
          // }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
    // </div>
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
