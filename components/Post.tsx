interface PostProps {
    Title: string;
    Body: string;
  }
  
  export default function Post({ Title, Body }: PostProps) {
    return (
      <div style={{ backgroundColor: "whitesmoke", border: "1px solid #dbdbdb", padding: "10px", borderRadius: "5px" }}>
         <p>{Title}</p>
         <p>{Body}</p>
      </div>
    );
  }
  