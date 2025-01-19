import Post from "../components/Post";
import { useEffect, useState } from "react";


// Renomear a interface para evitar conflitos
interface PostData {
  Title: string;
  Body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);

  async function GetPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Erro ao conectar ao servidor");
      }
      const json = await res.json();

      // Filtrando os campos necessários
      const formattedPosts = json.map((post: any) => ({
        Title: post.title,
        Body: post.body,
      }));

      setPosts(formattedPosts);
      console.log("Sucesso ao conectar");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div className="PostsLists">
      {posts.map((p, i) => (
        <div key={i} className="Post">
          <Post Body={p.Body} Title={p.Title} />
        </div>
      ))}
    </div>
  );
  
}
