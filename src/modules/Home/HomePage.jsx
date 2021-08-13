import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { Avatar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import OpenModal from "../modal/OpenModal";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/HomePage.css";
import Stories from "../../helper/Stories";
import PostItems from "../../components/PostsItems";
import PostData from "../../helper/PostData";
import { getHomeList } from "../../store/Home/HomeAction";
// y folder delete ka h jb hmny redux ky through delete krwana hota h tu phir hm jo hmara main folder hota h jhan pr hm apni sari list show krwa rhy hoty h map ky through
// ya kisi bi r chez ky through tu hm sb sy phly jo list get kr rhy hoty hn us ko import krwaty hn like this import { getHomeList } from "../../store/Home/HomeAction";
//r hm dispatch krwaty hn like this  const dispatch = useDispatch(); r hm store create krty hn like this const { homeListStore, loading } = useSelector(({ home }) => home);
// r useeffect mn bi new list ko show kryn gy like this  useEffect(() => { dispatch(getHomeList());  }, []);
// q ky hm ub delete kr ky list ko show kryn gy means new list show kryn gy tu hm log jhan map ho rha h whan hm is tareeky sy show kryn gy like this {homeListStore.map((p) => (
// y homeliststore wo list h jis mn hm apni puri array ly rhy hn homereducer ki file mn
function HomePage() {
  const dispatch = useDispatch();
  const { homeListStore, loading } = useSelector(({ home }) => home);
  // const { homeListStore, loading } = useSelector(({ home }) => home); is store line mn homeliststore hmari state  h
  // r jo hmny {home } likha h y hmysha hm log jo index.js ki file mn  like this const reducers = combineReducers({   home: HomeReducer,
  // banaty hn hmysha in curly brackets mn woi likhty hn jo reducer ki file mn likhty hn
  //state

  const [pictures, setPictures] = useState(Stories);
  //agr hmny const [pictures, setPictures] = useState(Stories); y state banani h tu phir hmysha (in round brackets mn ) file ka name dyn gy
  // taky us file ko get kr sakyn  r agr state ni banan h tu phir hm direct import ki huwi file ko map krwayn gy ya according to
  // condition chalyn gy
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // console.log("pictures :>> ", pictures);

  const handleClose = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    dispatch(getHomeList());
  }, []);

  return (
    <>
      <div className="instagaramhomepage">
        <div className="navbar">
          <div className="instagramlogo">
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              style={{ display: "flex", padding: "15px 20px 0px 0px " }}
            />
          </div>
          {/* <SearchIcon /> */}
          <TextField
            id="outlined-basic"
            label="search"
            variant="outlined"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "100%",
              padding: "20px 0px",
              alignItems: "center",
              // backgroundColor: "rgba(250,250,250,255)",
            }}
          />
          <div className="navbarsvgs">
            <svg
              aria-label="Home"
              class="_8-yf5 "
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
            </svg>
            <svg
              aria-label="Direct"
              class="_8-yf5 "
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
            </svg>

            <svg
              aria-label="Find People"
              class="_8-yf5 "
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path
                clip-rule="evenodd"
                d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-label="Activity Feed"
              class="_8-yf5 "
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
            <div className="profilepicture">
              <img
                className="logo"
                alt="aqsa_choudhary1224's profile picture"
                // class="_6q-tv"
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                src="images.jpg"
                onClick={() => {
                  setMenuOpen(true);
                }}
              ></img>
              <Menu
                style={{ position: "absolute", top: "0" }}
                id="simple-menu"
                menuOpen={menuOpen}
                keepMounted
                open={Boolean(menuOpen)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>settings</MenuItem>
                <MenuItem onClick={handleClose}>switchAccount</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="maininstabody">
        <div className="postsides">
          <div className="storiesdiv">
            {Stories.map((p) => (
              <>
                <div className="storiesimg">
                  <img
                    src={p.img}
                    style={{
                      display: "flex",
                      borderRadius: "50px",
                      width: "54px",
                      height: "54px",
                      padding: "2px 2px",
                      border: "2px solid rgba(222,66,132,255)",
                    }}
                  />
                  <p>{p.name}</p>
                </div>
              </>
            ))}
          </div>
          <div>
            {homeListStore.map((p) => (
              // delete r edit krny kaliy hmysha id chahiy hoti h
              <PostItems
                id={p.id}
                img={p.img}
                title={p.title}
                img={p.img}
                Likes={p.Likes}
                discription={p.discription}
              />

              // console.log("PostItems :>> ", PostItems);
            ))}
          </div>
        </div>
        <div className="suggestionside">
          <div className="suggestionpicture">
            <Avatar
              src="images.jpg"
              style={{
                borderRadius: "34px",
                border: "1px solid rgba(250,250,250,255) ",

                objectFit: "cover",
                width: "59px",
                height: "59px",
              }}
            />
            <div className="title">
              <p>aqsa_choudhary1224</p>
              <p style={{ marginTop: "-5px" }}>Aqsa Choudhary</p>
            </div>
            <p style={{ color: "rgba(49,169,247,255)" }}>switch</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
