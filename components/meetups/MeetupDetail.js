import { Fragment } from "react";
import classes from './MeetupDetail.module.css'
import Image from 'next/image';

export default function Meetupdetail(props) {
  return(
  <section className={classes.detail}>
    <Image alt='image' src={props.image} />
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </section>);
}
