import { useState, useEffect } from "preact/hooks";
import FacebookEmbed from "./FacebookEmbed";
import "./feed-styles.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  function sortByDate(arr) {
    return arr
      .sort(function compare(a, b) {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      })
      .reverse();
  }
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
    script.async = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    fetch("https:harikar-reports-api.cyclic.app/v2/social")
      .then((response) => response.json())
      .then((data) => data.filter((post) => post.platform === "fb"))
      .then((data) => sortByDate(data))
      .then((data) => setPosts(data));
  }, []);

  return (
    <div class="container">
      <div class="title">
        <h1 class="title__text">Feed</h1>
      </div>
      <div class="content">
        {posts.map((item) => (
          <FacebookEmbed id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
