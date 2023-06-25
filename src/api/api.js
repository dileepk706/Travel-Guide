import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
 
 
  
export const getPlaces=async(se,ne)=>{
console.log('getplace called');

  console.log('se',se);
  console.log('ne',ne);
    try { 
        const {data} = await axios.get(URL,{
          params: {
            bl_latitude: se.lat,
            bl_longitude: se.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            currency: 'INR',
          },
            headers: {
              'X-RapidAPI-Key': 'c522fa8814mshbb2bc39b5fea4c9p199915jsn6976a0d6876d',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        console.log("response.data",data.data);
        return data.data
    } catch (error) {
        console.error(error);
    }
}