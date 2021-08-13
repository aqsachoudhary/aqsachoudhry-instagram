import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

import "../../styles/OptionModal.css";
import DeleteModal from "../modal/DeleteModal";
import CreateModal from "../modal/CreateModal";

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

    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // border: "none",
    outline: "none",
    borderRadius: "15px",
  },
}));

export default function OpenModal({ open, id }) {
  //   console.log("hheb ajge img>>", img);
  const [deleteModal, setDeleteModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    open(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="crud">
        <div className="cruds">
          <p className="paragraph">Report</p>
          <p className="paragraph">unfollow</p>
          <p
            className="paragraphs"
            onClick={() => {
              setCreateModal(true);
            }}
          >
            create
          </p>
          <p className="paragraphs">Edit</p>
          <p
            className="paragraphs"
            onClick={() => {
              setDeleteModal(true);
            }}
          >
            Delete
          </p>
          <p></p>
        </div>
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

      {deleteModal && <DeleteModal open={setDeleteModal} id={id} />}
      {createModal && <CreateModal open={setCreateModal} />}
    </div>
  );
  //  {deleteModal && <DeleteModal open={setDeleteModal} id={id} />} is mn hm function ki calling krty hn jin nin pr hmny
  // apny actions perform krny hoty hn forexample img chahiy tu img ki calling kryn gy like this img={img} jo chez function bana
  // ya use krni ho us ko as a argument must snd krty hn like this ({id, img,open })
}
