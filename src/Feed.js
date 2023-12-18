import { useState, useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase'
// import firebase from 'firebase';

const Feed = () => {

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const collectionRef = db.collection('posts');
  //       const querySnapshot = await collectionRef.get();

  //       const newData = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));

  //       setPosts(newData);
  //     } catch (error) {
  //       console.error('Error getting documents: ', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      await db.collection("posts").onSnapshot((snapshot) => {
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
      })
    };

    fetchData();
  }, []);

  const sendPost = e => {
    e.preventDefault();
    db.collection('posts').add({
        name: 'raphking',
        description: 'this is a text',
        message: 'input',
        // photoUrl: '',
        // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className='flex-[0.6] m-[0 20px]'>
      <div className='bg-white p-2.5 pb-5 rounded-md mb-5'>
        <div className='border-2 border-gray-300 rounded-3xl flex p-2.5 text-gray-400 pl-[15px]'>
            <CreateIcon />
            <form className='flex w-full'>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} className='border-[none] flex-[1] ml-2.5 outline-0 font-semobld'/>
                <button onclick={sendPost} type="submit" className='hidden'>Send</button>
            </form>
        </div>
        <div className='flex justify-evenly'>
           <InputOption Icon={ImageIcon} title="photo" color="blue"/>
           <InputOption Icon={SubscriptionsIcon} title="Video" color="blue"/>
           <InputOption Icon={EventNoteIcon} title="Event" color="blue"/>
           <InputOption Icon={CalendarViewDayIcon} title="Write article" color="blue"/>
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message }}) => {
        return <Post
           key={id}
           name={name}
           description={description}
           message={message}
        //    photoUrl={photoUrl}
         />
      })}
    </div>
  )
}

export default Feed
