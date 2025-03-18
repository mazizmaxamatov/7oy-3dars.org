import axios from "axios";
import { useEffect, useState } from "react";
import AddPosts from "../components/AddPosts";

export const Comment = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  async function getPosts() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/posts`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setPosts(posts?.data);
  }




  const [userMe, setuserMe] = useState(null);
  async function getMe() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/auth`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setuserMe(posts?.data?._id);
  }



  console.log(userMe);

  useEffect(() => {
    getPosts();
    getMe();
  }, []);



  function handleDelete(id) {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(() => {
        getPosts();
      });
  }


  async function like(id) {
    await axios.put(
      `https://nt-devconnector.onrender.com/api/posts/like/${id}`,
      {},
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
  }


  return (
    <div className="w-[1200px] mx-auto">
      <AddPosts getPosts={getPosts} />
      {posts.map((post) => {
        return (
          <div className="border my-2 p-2 flex gap-[250px] text-[20px] text-[lightseagreen] font-bold" key={post._id}>

              
            <h2 className="w-[100px] mt-[100px] ml-[100px]">{post.name}</h2>

            <div className="">
              <p className="text-[black] mt-[20px] ">{post.text}</p>
              <h4 className="text-[#666666] text-[15px] mt-[30px]">{post.date}</h4>

              <div className="flex gap-[15px] mt-[10px]">
                <button onClick={() => like(post?._id)}>like {post?.likes.length}</button>
                <button>Unlike</button>

                {post?.user === userMe && (
                  <button className="w-[100px] h-[30px] bg-blue-500 text-[#ffffff]" onClick={() => handleDelete(post._id)}>Delete</button>
                )}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
