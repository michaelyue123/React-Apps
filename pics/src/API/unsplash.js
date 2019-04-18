import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 636de7204ddb9a29161286e294e19ba15b58ccbae03ad2ce9346e39138ace005'
  }
});