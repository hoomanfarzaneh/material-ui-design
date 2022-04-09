import { Avatar, Button } from '@material-ui/core';
import { AttachMoney, Autorenew, BarChart, BeenhereSharp, Inbox, MapSharp, Markunread, MergeTypeSharp, Money, NoteAdd, NotificationImportant, PostAdd, Timelapse, ViewWeek } from '@material-ui/icons';
import './post.scss';
import {itemdata} from './data';

export default function testimonials() {

return <>
<div className="main">
  {itemdata.map((d) =>(
  <div className="card">
    <div className="top">
        <Avatar /> 
        <h3>{d.name}</h3>
        <Button size='small' className='masterbtn'> master analyst </Button>
        <Button size='small' className='masterbtn'> master trader </Button>
        <Button className="followbtn" variant="contained"> follow </Button>
    </div>
    <hr />
    <div className="topnote">
        <p>73m Follower</p>
        <p>98% Winrate</p>
        <p>2713 Signals</p>
        <p>75355 Point</p>
    </div>
    <div className="overviewtab">
        <p className='tab1'>Overview</p>
        <p className='tab2'>Full Analysis</p>
    </div>
    <div className="overview">
        <div className="leftover">
            <p className="overicon" ><AttachMoney className='icon' /> AnalysisType: {d.analysisType}</p>
            <p className="overicon" ><BarChart className='icon'/> BTCUSDT: {d.BTCUSDT}</p>
            <p className="overicon" ><Money className='icon'/> Exchange: {d.exchange}</p>
            <p className="overicon" ><Timelapse className='icon'/>TimeFrame: {d.timeFrame}</p>
            <p className="overicon" ><Markunread className='icon'/>Market: {d.market}</p>
            <p className="overicon" ><MergeTypeSharp className='icon'/>Method: {d.method}</p>
            <p className="overicon" ><PostAdd className='icon'/>Position: {d.position}</p>
            <p className="overicon" ><Autorenew className='icon'/>Leverage: {d.leverage}</p>
        </div>
        <div className='rightover'>
            <h1 className="rightovericon"><BeenhereSharp /> </h1>
            <h2 className="rightovertitle">Premium Analysis</h2>
            <h1 className="profit">{d.profit}</h1>
            <p className="desc">{d.desc}</p>
            <Button className='overbuy'>Buy Now</Button> 
        </div>
    </div>
    <div className="footer">
        <div className="descfooter">
            <p className='descitem'><ViewWeek className="descicon"/>{d.view}</p>
            <p className='descitem'><MapSharp className="descicon"/>{d.buy}</p>
            <p className='descitem'><span className="descicon">Published in: {d.date}</span></p>
            <p className='descitem'>{d.time}</p>
        </div>
        <div className="iconfooter">
        <NoteAdd className='icon' />
        <NotificationImportant className='icon' />
        <Inbox className='icon' />
        </div>
    </div>
  </div>
  ))}
</div>
</>;
}