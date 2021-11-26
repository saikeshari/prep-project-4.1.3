import React, {useState} from 'react';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Navbar from '../../components/Navbar';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

function Restaurants() {

    const [inputDate, setInputDate] = useState(null);

    const [sourceItems,setSourceItems] = useState([]);
    const [destItems,setDestItems] = useState([]);



    const [inputSource,setInputSource] = useState();
    const [inputDest,setInputDest] = useState();

    const [source,setSource] = useState();
    const [dest,setDest] = useState();

    const autocompleteSource = (item) => {
        setInputSource(item)
        const url =
        "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
        const host = "travel-advisor.p.rapidapi.com;"

        if (inputSource !== "") {

            fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=12.91285&longitude=100.87808&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "8c0ed262e2mshfd1746f6f6e767dp19a531jsnfeef72c8d4b6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
               
        }
      }


  
    return (
        <>
        
            <div class="main">
                <h1>Restaurants near me</h1>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=11"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=14"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"/></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Restaurants
