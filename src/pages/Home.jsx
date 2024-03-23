import { useEffect, useState } from "react";
import appwriteService from "../appwrite/configg";
import { Container, Logo, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center ">
        <Container>
          <div className="flex flex-wrap">
            <div>
              <img src="" alt="" />
            </div>
            <div className=" grid grid-flow-row mb-4 md:mb-0 md:grid-cols-2   p-2 w-full ">
              <div>
                <blockquote className=" text-slate-600 font-semibold italic text-3xl  md:text-4xl lg:texr-5xl font-serif ">
                  &ldquo;Fuel Your
                  <span className=" text-orange-700"> Passion</span>,
                  <br />
                  Share Your Knowledge,
                  <br />
                  Inspiring the Next Generation of Coders&rdquo;
                </blockquote>
              </div>
              <div className=" flex justify-center md:justify-end ">
                <img
                  width={400}
                  height={400}
                  className=" rounded-lg  "
                  src="https://img.freepik.com/free-vector/editing-body-text-concept-illustration_114360-5791.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
