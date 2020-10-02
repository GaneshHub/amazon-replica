import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/replica-3c544/us-central1/api'
  //  baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api' 
    //=. cloud function needed to deploy to firebase
});

export default instance;