import Mountain1 from "../assets/103.jpg";
import Mountain2 from "../assets/104.jpg";
import Mountain3 from "../assets/106.jpg";
import Mountain4 from "../assets/105.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Mahabalipuram (or Mamallapuram), India
      "
        text="Mahabalipuram (or Mamallapuram) is a historic coastal town near Chennai, Tamil Nadu, known for its ancient temples and rock-cut sculptures. It's a UNESCO World Heritage Site and features iconic landmarks such as the Shore Temple, Pancha Rathas (Five Rathas), Arjuna’s Penance, and several cave temples. The town also boasts a serene beach, making it a perfect blend of history and natural beauty.For travelers, Mahabalipuram offers historical sightseeing, cultural experiences like the annual dance festival, and opportunities for relaxation on the beach. It's an excellent destination for a day trip or weekend getaway from Chennai."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Kyoto, Japan
      "
        text="Kyoto, Japan, is a city steeped in history and culture, known for its ancient temples, shrines, and traditional districts. Key attractions include the iconic Kinkaku-ji (Golden Pavilion), Fushimi Inari Taisha with its red torii gates, and the scenic Arashiyama Bamboo Grove. The city is also famous for its cultural experiences like the tea ceremony and kimono rentals. Best visited in spring for cherry blossoms or autumn for stunning foliage, Kyoto is also home to exceptional food, particularly kaiseki (multi-course meals) and matcha treats. Conveniently accessible by train, it also offers day trips to nearby places like Nara and Uji. Whether you're exploring historical sites or enjoying local delicacies, Kyoto is a blend of tradition and natural beauty."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
