import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';

function Widgets() {

const newsArticles = (heading, subtitle) => { return (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecord/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
);}

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div> 
            {newsArticles("Lorem ipsum","Top news - 1697 readers")}
            {newsArticles("Covid news","Top news - 564 readers")}
            {newsArticles("Big TEch","Business & Tech - 786 readers")}
            {newsArticles("BTC all time low","Crypto - 869 readers")}
            {newsArticles("New JS framework","Web Tech - 971 readers")}
            {newsArticles("Tesla news","Cars and auto - 867 readers")}
        </div>
    );
}

export default Widgets
