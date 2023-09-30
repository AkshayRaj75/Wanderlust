import Image1 from "../assets/VeniceImage1.jpg";
import Image2 from "../assets/VeniceImage2.jpg";
import Image3 from "../assets/QueensTown2.jpg";
import Image4 from "../assets/QueensTown1.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oportinity to see a lot, Within a time frame.</p>

      <DestinationData
        className="first-des"
        heading=" Venice, Italy"
        text="Venice, often referred to as the City of Canals, is one of the most romantic and enchanting cities in the world. Built on a network of 118 small islands connected by over 400 bridges, Venice is famous for its picturesque canals, historic architecture, and artistic heritage. The Grand Canal, lined with stunning palaces, is a sight to behold as it winds its way through the city. Visitors can explore iconic landmarks like St. Mark's Basilica, the Doge's Palace, and the Rialto Bridge. Strolling through narrow, winding streets, known as 'calli,' provides a glimpse into local life, while a gondola ride offers a unique perspective of the city's waterways. Venice's rich cultural heritage, sumptuous cuisine, and vibrant arts scene make it a destination like no other."
        img1={Image1}
        img2={Image2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Queenstown, New Zealand"
        text="For those seeking adventure amidst awe-inspiring natural landscapes, Queenstown in New Zealand is the ultimate destination. Nestled on the shores of Lake Wakatipu, surrounded by the Southern Alps, this resort town is a mecca for outdoor enthusiasts. Queenstown offers an array of adrenaline-pumping activities, from bungee jumping off the historic Kawarau Bridge to jet boating in the Shotover Canyon. Hiking and skiing opportunities are abundant in the nearby Fiordland National Park and Remarkables Range. For a more relaxed experience, take a leisurely cruise on Milford Sound or simply soak in the breathtaking scenery while sipping New Zealand's famous wines. With its dramatic landscapes and a vibrant blend of adventure and tranquility, Queenstown is a must-visit destination for nature lovers and thrill-seekers alike."
        img1={Image3}
        img2={Image4}
      />
    </div>
  );
};

export default Destination;
