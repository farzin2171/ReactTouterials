import Posts from '../components/Posts';
import {FETCH_POST,NEW_POST} from './types'

export  const fetchPosts=()=> dispatch=>{
        console.log('fecth')
         fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res=>res.json())
          .then(posts =>dispatch({
              type:FETCH_POST,
              payload:posts 
          }));
}

