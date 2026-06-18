import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from './Post';
import { SideBar } from '../Sidebar';
import axios from 'axios';
import { Comments } from '../comment/Comments';

const RelatedPost = ({ setModal, isLoggedIn }) => {
  const { postId } = useParams();

  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);

  const token = localStorage.getItem('token');

  const fetchComments = async () => {
    const res = await axios.get(
<<<<<<< HEAD
      `${import.meta.env.VITE_API_URL}/comments/${postId}`,
=======
      `https://knowledge-flow-backend.onrender.com/comments/${postId}`,
>>>>>>> ad6ca4ff6a2b52b5f5c5be6486353950604113b6
      {
        headers: {
          Authorization: token,
        },
      },
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [comments]);

  const fetchData = async () => {
    const res = await axios.get(
<<<<<<< HEAD
      `${import.meta.env.VITE_API_URL}/post/${postId}`,
=======
      `https://knowledge-flow-backend.onrender.com/post/${postId}`,
>>>>>>> ad6ca4ff6a2b52b5f5c5be6486353950604113b6
    );
    setPost(res.data);
  };
  return (
    <div>
      <SideBar />
      <div className='pt-20 lg:ml-56 h-screen bg-[#191A21] '>
        {post && (
          <div className='bg-[#191A21] '>
            <Post
              post={post}
              setModal={setModal}
              isLoggedIn={isLoggedIn}
              fetchData={fetchData}
            />
            <Comments
              setModal={setModal}
              comments={comments}
              setComments={setComments}
              fetchComments={fetchComments}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default RelatedPost;
