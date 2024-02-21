import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { useRef, useEffect } from "preact/hooks";
import { fetchCurrentJobs, currentJobs } from "@stores/store";
import "./menus-styles.css";

function AnnouncementsMenu() {

  useEffect(() => {
    fetchCurrentJobs()
  }, []);

  const $currentJobs = useStore(currentJobs)
  const numberOfJobs = $currentJobs.length

  return (
    <>
      <details class="header-details news-details">
        <summary class="news-summary">
          <p>News</p> <p class="number">{numberOfJobs}</p>
        </summary>
        <div className="content content-news">
          <ul>
            <li>
              <a href="/announcements/job-opportunities">
                Jobs: {numberOfJobs}
              </a>
            </li>
            <li>
              <a href="/announcements/bids">
                Bids: 0
              </a>
            </li>
          </ul>
        </div>
      </details>
    </>
  );
}

export default AnnouncementsMenu;
