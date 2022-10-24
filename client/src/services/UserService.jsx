import Constant from '../Constant.jsx';
import sha1 from 'sha1'
const RESTDB_API = '6216bed234fd621565858972'


function getIdFromEmail(email) {
  return sha1(email)
}

async function GetUserProfile(credentials) {

    var id = getIdFromEmail(credentials.email)
    const res = await fetch(Constant.TEST_API_DETAIL_URL + `/${id}`,{
      method: 'GET',
      headers: {
        'X-Amz-Invocation-Type': 'Event',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
      }
    });
    const result = await res.json();
    return result;
}

async function SaveUser(data) {
    
    data['id'] = getIdFromEmail(data.email)
    const res = await fetch(Constant.TEST_API_DETAIL_URL,{
        method: 'POST',
        headers: {
          'X-Amz-Invocation-Type': 'Event',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        },
        body: JSON.stringify(data)
    });
    const result = res.json();
    return result.id;
}

async function UpdateUser(id, data) {

    data['id'] = getIdFromEmail(data.email)
    await fetch(Constant.TEST_API_DETAIL_URL,{
      method: 'POST',
      headers: {
        'X-Amz-Invocation-Type': 'Event',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
      },

      body: JSON.stringify(data)
    });

    return id;
}


export { GetUserProfile, SaveUser, UpdateUser };