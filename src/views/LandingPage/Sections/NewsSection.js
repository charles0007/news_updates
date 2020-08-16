import React, { useState,useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from 'react-infinite-scroll-component';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import axios from 'axios'
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { colors } from "@material-ui/core";
// import { async } from "q";


const useStyles = makeStyles(styles);

export default function NewsSection(props) {
    const classes = useStyles();
    const [new_data, setNewData] = useState(true);
    const [NativeId, setNativeId] = useState(1);
    const [highestNativeId, setHighestNativeId] = useState(1);
    const [notificationValue, setNotificationValue] = useState(0);

    const [items, setItems] = useState([]);
    const baseUrl = "http://localhost:91";
    useEffect(() => {
    console.log(notificationValue);
    props.notification_value(notificationValue);
    });




    //    [{ image:team1,
    //     topic:"Gigi Hadid",
    //     title:"Model",
    //     description:`You can write here details abojkjjjjut one of your team members. You
    //                can give more details about what they do. Feel free to add
    //                some <a href="#pablo">links</a> for people to be able to
    //                follow them outside the site.`,
    //    link:"http://fac.com"

    // },{ image:team1,
    //     topic:"Gigi Hadid",
    //     title:"Model",
    //     description:`You can write here details abojkjjjjut one of your team members. You
    //                can give more details about what they do. Feel free to add
    //                some <a href="#pablo">links</a> for people to be able to
    //                follow them outside the site.`,
    //    link:"http://fac.com"

    // },{ image:team1,
    //     topic:"Gigi Hadid",
    //     title:"Model",
    //     description:`You can write here details abojkjjjjut one of your team members. You
    //                can give more details about what they do. Feel free to add
    //                some <a href="#pablo">links</a> for people to be able to
    //                follow them outside the site.`,
    //    link:"http://fac.com"

    // }]  

    // const notifyData = async () => {
    //     // async function fetchMoreData() {
    //     // a fake async api call like which sends
    //     // 20 more records in 1.5 secs
    //     console.log("start");
    //     var response = '';
    setTimeout(async () => {
        var response = await axios.post(baseUrl + "/notify", { NativeId: highestNativeId }, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);
        console.log(response.data.notificationValue);
        // if (response.data.status) {

        if (response.data.notificationValue > 0) {
            console.log("true");
            setNotificationValue(response.data.notificationValue);
        }

        // }

    }, 15000);
    // };



    const refreshData = async () => {

        var response = '';

        response = await axios.post(baseUrl + "/refresh_news", { NativeId: highestNativeId }, {
            headers: { 'Content-Type': 'application/json' }
        });


        if (response.data.status) {
            var highestDat = await response.data.data[0];
            setHighestNativeId(highestDat.NativeId);

            setItems(
                items.unshift(
                    response.data.data
                )
            );
        }


    };

    const fetchMoreData = async () => {
        // async function fetchMoreData() {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        console.log("start");
        var response = '';
        setTimeout(async () => {
            response = await axios.post(baseUrl + "/get_news", { new_data, NativeId }, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response.data);
            if (response.data.status && response.data.data.length > 0) {

                await setItems(
                    items.concat(
                        response.data.data
                    )
                );
                if (new_data) {
                    var highestData = await response.data.data[0];
                    setHighestNativeId(highestData.NativeId);
                }
                setNewData(false);
                var lastData = await response.data.data[response.data.data.length - 1];
                setNativeId(lastData.NativeId);
            }

        }, 15000);
    };

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Here are the Latest News</h2>
            <div>

                {/* { items.map((item, index) => (
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={item.image } alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                {item.topic}
                <br />
                                <small className={classes.smallTitle}>{item.title}</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                {item.description}
                </p>
                <div className={classes.center}> click here to &nbsp;
                                    <a href={item.link}
                                        target="_blank"
                                    >
                                        read more
                                    </a>{" "}
                                    
                                    </div>
                            </CardBody> */}


                {/* <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                                    
                            </CardFooter> */}
                {/* </Card>
                    </GridItem>
                    )
                    )
} */}
                {/* GridItem */}

                <InfiniteScroll
                    dataLength={items.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4 style={{ color: '#000' }}>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center', color: '#000' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }

                    // below props only if you need pull down functionality
                    refreshFunction={refreshData}
                    pullDownToRefresh={true}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center', color: '#000' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center', color: '#000' }}>&#8593; Release to refresh</h3>
                    }

                >
                    <GridContainer>
                        {items.map((item, index) => (
                            <GridItem xs={12} sm={12} md={4} key={index}>
                                <Card plain>
                                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                        <img src={item.image} alt="..." className={imageClasses} />
                                    </GridItem>
                                    <h4 className={classes.cardTitle}>
                                        {item.topic}
                                        <br />
                                        <small className={classes.smallTitle}>{item.title}</small>
                                    </h4>
                                    <CardBody>
                                        <p className={classes.description}>
                                            {item.description}
                                            <br></br>
                                            <span>{item.news_date != "" ? new Date(item.news_date).toDateString()
                                                : new Date()}</span>
                                        </p>
                                        <div className={classes.center}> click here to &nbsp;
                                    <a href={item.link}
                                                target="_blank"
                                            >
                                                read more
                                    </a>{" "}

                                        </div>
                                    </CardBody>

                                </Card>
                            </GridItem>
                        )
                        )
                        }
                    </GridContainer>
                </InfiniteScroll>

            </div>
        </div>
    );
}
