import { h, Fragment } from "preact";
import styles from "./styles.module.css";

function Feed() {
  return (
    <Fragment>
      <div class={styles.smAndUp}>
        <iframe
          title="facebook feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="500"
          height="500"
          style="border:none;overflow:hidden"
          frameborder="0"
          allowfullscreen="true"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div class={styles.smAndDown}>
        <iframe
          title="facebook feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHarikar2004%2F&width=350&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="350"
          height="200"
          style="border:none;overflow:hidden"
          frameborder="0"
          allowfullscreen="true"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Fragment>
  );
}

export default Feed;
