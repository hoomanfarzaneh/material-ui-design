import './feed.scss';
import {Button} from "@material-ui/core";
import { FilterBAndW, Sort, Warning } from '@material-ui/icons';
import Post from './Post';
 const Feed = () => {
  
  return (
    <div className="container">
      <div className="message">
        <Warning />
        <p>You can view your purchased or saved analytics here.</p>
      </div>
      <div className="btnbar">
        <div>
          <Button className="btnleft" >All Inbox</Button>
          <Button className="btnleft" >Crypto Inbox</Button>
          <Button className="btnleft" >Forex Inbox</Button>
          <Button className="btnleft" >Stock Inbox</Button>
        </div>
        <div >
          <Button className="btnright" variant="outlined" color="primary">Sort By <Sort className='icon'/></Button>
          <Button className="btnright" variant="outlined" color="primary">Filter  <FilterBAndW className='icon'/></Button>

        </div>
      </div>
      <hr />
      <div>
        <Post />
      </div>
    </div>
  )
}
export default Feed;
