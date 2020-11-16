import ContactListItem from "../components/ContactListItem";
import { connectToDatabase } from "../util/mongodb";

export default function Specialists({ specialists }) {
  return (
    <div>
      <h1> Meet Our Specialists!</h1>
      
      <div>
        {specialists.map((specialist) => (
           <ContactListItem {...specialist} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const specialists = await db
    .collection("specialists")
    .find({})
    .sort({ metacritic: 1 })
    .limit(20)
    .toArray();

  return {
    props: {
      specialists: JSON.parse(JSON.stringify(specialists)),
    },
  };
}