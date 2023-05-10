import { h } from "preact";
import "./feed-styles.css";

function Feed() {
  return (
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2F&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
      width="400"
      height="500"
      style="border:none;overflow:hidden"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
}

export default Feed;
