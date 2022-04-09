import './sidebar.scss';
import {  ArrowLeft, Dashboard, Flare, Home, MoveToInbox, Settings} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <div className="head">
          <div className="rising">  
            <Flare  /> Rising  
          </div>
          <ArrowLeft  className="btn" />
        </div>
        <li>
          <Dashboard className="icon" />
          <span>Dashboard</span>
        </li>
          <p className="title">Main</p>
        <li>
          <Home className="icon" />
          <span>Home</span>
        </li>
        <li>
          <MoveToInbox className="icon" />
          <span>Inbox</span>
        </li>
        <li>
          <Settings className="icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;