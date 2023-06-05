import React, { useState } from "react";
import axios from "axios";

const WineRegistration = () => {
  const [wineInfo, setWineInfo] = useState({
    comment: "",
    wine_name: "",
    winery: "",
    wine_type: "",
    wine_image: "",
    wine_country: "",
    wine_url: "",
    one_word: "",
    english_wine_name: "",
    years: "",
    producer: "",
    breed: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setWineInfo({
      ...wineInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/newPost.php", wineInfo)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const {
    comment,
    wine_name,
    winery,
    wine_type,
    wine_image,
    wine_country,
    wine_url,
    one_word,
    english_wine_name,
    years,
    producer,
    breed,
    capacity,
  } = wineInfo;

  return (
		<div>
				<h2>New Wine Registration</h2>
				<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Comment" value={comment} onChange={e => setWineInfo({...wineInfo, comment: e.target.value})} />
						<input type="text" placeholder="Wine Name" value={wine_name} onChange={e => setWineInfo({...wineInfo, wine_name: e.target.value})} />
						<input type="text" placeholder="Winery" value={winery} onChange={e => setWineInfo({...wineInfo, winery: e.target.value})} />
						<input type="text" placeholder="Wine Type" value={wine_type} onChange={e => setWineInfo({...wineInfo, wine_type: e.target.value})} />
						<input type="text" placeholder="Wine Image" value={wine_image} onChange={e => setWineInfo({...wineInfo, wine_image: e.target.value})} />
						<input type="text" placeholder="Wine Country" value={wine_country} onChange={e => setWineInfo({...wineInfo, wine_country: e.target.value})} />
						<input type="text" placeholder="Wine URL" value={wine_url} onChange={e => setWineInfo({...wineInfo, wine_url: e.target.value})} />
						<input type="text" placeholder="One Word" value={one_word} onChange={e => setWineInfo({...wineInfo, one_word: e.target.value})} />
						<input type="text" placeholder="English Wine Name" value={english_wine_name} onChange={e => setWineInfo({...wineInfo, english_wine_name: e.target.value})} />
						<input type="text" placeholder="Years" value={years} onChange={e => setWineInfo({...wineInfo, years: e.target.value})} />
						<input type="text" placeholder="Producer" value={producer} onChange={e => setWineInfo({...wineInfo, producer: e.target.value})} />
						<input type="text" placeholder="Breed" value={breed} onChange={e => setWineInfo({...wineInfo, breed: e.target.value})} />
						<input type="text" placeholder="Capacity" value={capacity} onChange={e => setWineInfo({...wineInfo, capacity: e.target.value})} />
						<button type="submit">Register Wine</button>
				</form>
		</div>
);
}

export default WineRegistration;
