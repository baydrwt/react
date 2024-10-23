import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetUpDetail title={props.meetupData.title} image={props.meetupData.image} description={props.meetupData.description} address={props.meetupData.address} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://baydrwt:DpBcFd4nB5njVoNK@cluster0.m1c9y.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect("mongodb+srv://baydrwt:DpBcFd4nB5njVoNK@cluster0.m1c9y.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
