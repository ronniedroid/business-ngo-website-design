import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { useRef, useEffect } from "preact/hooks";
import { fetchCurrentJobs, currentJobs } from "@stores/store";
import "./modal-styles.css";

function AnnouncementsMenu() {

  useEffect(() => {
    fetchCurrentJobs()
  }, []);

  const $currentJobs = useStore(currentJobs)
  const numberOfJobs = $currentJobs.length

  const modal = useRef(null);

  function openModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  return (
    <>
      <button onClick={openModal} class="modal-open-btn">
        Announcements <sup class="number">{numberOfJobs}</sup>
      </button>
      <dialog ref={modal} class="modal-menu">
        <h2 class="modal-menu-title">Announcements</h2>
        <ul class="modal-menu-items">
          <li class="modal-menu-item">
            <a href="/announcements/job-opportunities">
              <svg height="25" width="25" viewBox="0 0 32 32" fill="#4b60a5">
                <title>Briefcase</title>
                <g id="Briefcase">
                  <path d="M29,12a5.006,5.006,0,0,0-5-5H21V6a3,3,0,0,0-3-3H14a3,3,0,0,0-3,3V7H8a5.006,5.006,0,0,0-5,5v1.613a4.973,4.973,0,0,0,1,2.979V24a5.006,5.006,0,0,0,5,5H23a5.006,5.006,0,0,0,5-5V16.592a4.973,4.973,0,0,0,1-2.979ZM13,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H13ZM5,12A3,3,0,0,1,8,9H24a3,3,0,0,1,3,3v1.613a2.991,2.991,0,0,1-2.507,2.959l-4.614.768A2,2,0,0,0,18,16H14a2,2,0,0,0-1.879,1.34l-4.614-.768A2.991,2.991,0,0,1,5,13.613Zm13,6v2H14V18Zm5,9H9a3,3,0,0,1-3-3V18.178a5.04,5.04,0,0,0,1.179.367l4.821.8V20a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2v-.653l4.821-.8A5.04,5.04,0,0,0,26,18.178V24A3,3,0,0,1,23,27Z"></path>
                </g>
              </svg>
              Jobs: {numberOfJobs}
            </a>
          </li>
          <li class="modal-menu-item">
            <a href="/announcements/bids">
              <svg viewBox="0 0 32 32" width="25" height="25" fill="#4b60a5">
                <title>Contract</title>
                <g id="_11-20" data-name="11-20">
                  <g id="Contract">
                    <path d="M29.5,9.132a1,1,0,0,0-1.364.372L27,11.485V9.657a4.966,4.966,0,0,0-1.464-3.535L22.878,3.464A4.966,4.966,0,0,0,19.343,2H10A5.006,5.006,0,0,0,5,7V25a5.006,5.006,0,0,0,5,5H22a5.006,5.006,0,0,0,5-5V15.515L29.868,10.5A1,1,0,0,0,29.5,9.132Zm-5.374-1.6A3.047,3.047,0,0,1,24.5,8H22a1,1,0,0,1-1-1V4.5a3.047,3.047,0,0,1,.464.377ZM25,25a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3h9V7a3,3,0,0,0,3,3h3v4.985L20.132,23.5a1,1,0,0,0,.372,1.364A.988.988,0,0,0,21,25a1,1,0,0,0,.869-.5L25,19.015Z"></path>
                    <path d="M10,10h6a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z"></path>
                    <path d="M10,14H20a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z"></path>
                    <path d="M21,17a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2H20A1,1,0,0,0,21,17Z"></path>
                    <path d="M16.3,22.29a2.732,2.732,0,0,1-1.2.7c-.1-.068-.251-.209-.36-.307a2.9,2.9,0,0,0-2.283-1,3.424,3.424,0,0,0-2.285,1.763,1,1,0,0,0,1.664,1.11c.561-.841.863-.888.866-.888.125-.021.51.331.694.5A2.429,2.429,0,0,0,15,25a4.392,4.392,0,0,0,2.707-1.293A1,1,0,0,0,16.3,22.29Z"></path>
                  </g>
                </g>
              </svg>
              Bids: 0
            </a>
          </li>
        </ul>
        <button onClick={closeModal} class="modal-close-btn">
          Close
        </button>
      </dialog>
    </>
  );
}

export default AnnouncementsMenu;
