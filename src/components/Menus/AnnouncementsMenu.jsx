import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { useRef, useEffect } from "preact/hooks";
import { fetchCurrentJobs, currentJobs } from "@stores/store";
import styles from "./styles.module.css"

function AnnouncementsMenu() {

  useEffect(() => {
    fetchCurrentJobs()
  }, []);

  const $currentJobs = useStore(currentJobs)
  const numberOfJobs = $currentJobs.length

  return (
    <>
      <details>
        <summary>
          <p>News</p> <p class={styles.number}>{numberOfJobs}</p>
        </summary>
        <div class={styles.content}>
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
