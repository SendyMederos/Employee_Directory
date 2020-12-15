//  $.ajax({
//      url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const PARAM = "?results=25&nat=us&inc=name,email,location,cell&noinfo?";
//eslint-disable-next-line
export default {
  search: function() {
    return axios.get(BASEURL + PARAM);
  }
};