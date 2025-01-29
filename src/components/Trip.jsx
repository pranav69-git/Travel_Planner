import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/100.jpg";
import Trip2 from "../assets/102.jpg";
import Trip3 from "../assets/101.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Trendy Places</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Italy"
          text="Discover the magic of Venice, Italy—where canals, history, and romance come alive. Glide through the Grand Canal, visit St. Mark’s Basilica, and cross the iconic Rialto Bridge. Stroll through charming alleys, savor authentic Italian cuisine, and enjoy stunning views from St. Mark’s Square. Take a Vaporetto to Burano’s colorful houses or Murano’s glass-making workshops. Venice offers an unforgettable journey through timeless beauty and rich culture."
        />

        <TripData
          image={Trip2}
          heading="Trip to Norway"
          text="Norway is a dream destination for nature lovers and those seeking adventure, relaxation, and a deep cultural experience. With its spectacular landscapes, including stunning fjords, snow-capped mountains, pristine lakes, and the northern lights, it’s a country that offers breathtaking scenery at every turn. Whether you're hiking in the rugged terrain, cruising along scenic coastlines, or exploring vibrant cities, Norway promises an unforgettable experience."
        />

        <TripData
          image={Trip3}
          heading="Trip to France"
          text="France—a land of timeless beauty, rich history, and unmatched charm. From the romantic streets of Paris, where the Eiffel Tower sparkles at night, to the sun-kissed beaches of the French Riviera, this country offers a captivating blend of culture, cuisine, and adventure."
        />
      </div>
    </div>
  );
}

export default Trip;
