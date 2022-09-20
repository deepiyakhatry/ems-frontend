import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {
                    return(
                    <div className="navbar">
                          <div className="wrapper">
                             <div className="search">
                                    <LanguageIcon className="icon"/>
                                     English
                             </div>
                             <div className="items">
                                  <div className="item">
                                     <DarkModeIcon className="icon"/>
                                  </div>
                                  <div className="item">
                                     <FullscreenIcon className="icon"/>
                                  </div>
                                  <div className="item">
                                      <NotificationsNoneIcon className="icon"/>
                                      <div className="counter">1</div>
                                  </div>
                                  <div className="item">
                                      <ChatBubbleOutlineIcon className="icon"/>
                                      <div className="counter">2</div>
                                  </div>
                                  <div className="item">
                                      <ReorderIcon className="icon"/>
                                  </div>
                             </div>
                          </div>
                    </div>
            )}
export default Navbar;