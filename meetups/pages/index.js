import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Lorem ipsum dolor sit amet" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// Good for reevaluate for every request data that coming so without revalidate
// export async function getServerSideProps(context) {
//   const res = context.res;
//   const req = context.req;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

// for better performance
export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://baydrwt:DpBcFd4nB5njVoNK@cluster0.m1c9y.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
