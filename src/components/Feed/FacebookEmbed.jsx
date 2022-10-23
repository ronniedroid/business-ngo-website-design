import { h } from "preact";
import "./feed-styles.css";

function FacebookEmbed({ id }) {
  return (
    <div class="embed">
      <div
        class="fb-post"
        data-href={id}
        data-width="350"
        data-show-text="true"
        data-lazy="true"
      ></div>
    </div>
  );
}

export default FacebookEmbed;
