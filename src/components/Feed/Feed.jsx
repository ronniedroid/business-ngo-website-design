import { h } from "preact";
import "./feed-styles.css";

function Feed() {
  const facebookPosts = [
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2Fpfbid0aKjEU2ZyZyKX9WfJ4WzqrwPirY35G1JJ5f1g9hkqYGnev6Uyr3wooM7t1xjCoqfNl&show_text=true&width=350",
      height: 727,
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2F2414835832001925&width=350&show_text=true&height=727&appId",
      height: 727,
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2F2418855841599924&width=350&show_text=true&height=631&appId",
      height: 631,
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2F2425838154235026&width=350&show_text=true&height=688&appId",
      height: 688,
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2F2429872340498274&width=350&show_text=true&height=611&appId",
      height: 611,
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2Fposts%2F2393940027424839&width=350&show_text=true&height=694&appId",
      height: 649,
    },
  ];

  return (
    <div class="wrap surface1">
      <div class="title">
        <svg class="rss-icon" viewBox="0 0 800 800">
          <path d="M493 652H392c0-134-111-244-244-244V307c189 0 345 156 345 345zm71 0c0-228-188-416-416-416V132c285 0 520 235 520 520z" />
          <circle cx="219" cy="581" r="71" />
        </svg>
        <h2 class="title__text">Feed</h2>
      </div>
      <div class="content">
        {facebookPosts.map((post) => (
          <iframe
            title="facebook post"
            src={post.url}
            width="350"
            height={post.height}
            style="border: none; overflow: hidden"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default Feed;
