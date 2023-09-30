import "./TripStyles.css";
import TripData from "./TripData";

import Trip1 from "../assets/GreeceImage.jpg";
import Trip2 from "../assets/FranceImage.jpg";
import Trip3 from "../assets/JapanImage.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Greece"
          text="Visitors have been exploring the ancient wonders of Athens, where the Parthenon stands as a symbol of Greece's rich history. The charming islands of Santorini and Mykonos have continued to captivate with their iconic blue-domed churches and pristine beaches, offering a blend of relaxation and vibrant nightlife. Adventurous souls have ventured into the rugged landscapes of Crete, hiking its gorges and discovering its distinct culinary delights. Throughout the journey, the warmth of Greek hospitality, the flavors of local cuisine, and the beauty of the Mediterranean have left indelible impressions on those who have had the privilege to explore this remarkable country."
        />

        <TripData
          image={Trip2}
          heading="Trip in France"
          text="Travelers have been enchanted by the timeless allure of this picturesque country. From strolling along the Seine River in Paris, gazing at the illuminated Eiffel Tower, to savoring the culinary delights of regional cuisine in cozy bistros, the essence of French culture and charm continues to captivate visitors. Exploring the historic châteaux of the Loire Valley, sipping fine wines in Bordeaux, or wandering the lavender fields of Provence, each journey through France offers a tapestry of experiences, blending the old and the new, the classic and the contemporary, making it a destination that never ceases to inspire and delight."
        />

        <TripData
          image={Trip3}
          heading="Trip in Japan"
          text=" Japan has continued to be a sought-after destination for travelers from around the world. Tourists have been captivated by the country's rich cultural heritage, breathtaking natural beauty, and the seamless fusion of ancient traditions with cutting-edge modernity. Whether it's strolling through the historic streets of Kyoto, witnessing the enchanting cherry blossoms in full bloom, or savoring exquisite sushi in bustling Tokyo, Japan offers an unforgettable travel experience that leaves an indelible mark on the hearts of those fortunate enough to embark on its journey. Despite challenges posed by global events, the enduring allure of Japan remains undiminished, drawing visitors into a world of tradition, innovation, and endless exploration.





"
        />
      </div>
    </div>
  );
}

export default Trip;
