import './navbar.scss';
import {  KeyboardArrowDown, NightsStayOutlined, NotificationsNoneOutlined, SearchOutlined } from "@material-ui/icons";
import {Avatar, Button} from '@material-ui/core';
 const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1>Signal Inbox</h1>
        <div className="search">
          <SearchOutlined  />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">
            <h4 className="balance">Balance:$2,895,102</h4>
            <span className="line" />
          </div>
          <div className="item">
            <Button size="small" variant="contained" color="primary" className="btn">Connect wallet</Button>
            <span className="line" />
          </div>
          <div className="item">
            <NightsStayOutlined className='background'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='background' />
            <div className="counter"></div>
          </div>
          <div className="item">
            <Avatar
              src=""
              alt=""
              className="avatar"
            />
            <b>Juxtyn Henry</b>
            <KeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
