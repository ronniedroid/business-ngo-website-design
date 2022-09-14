<template>
  <div class="notification" @click="dropMenu">
    <svg width="25" height="25" viewbox="0 0 166 197">
      <path
        d="M82.8652955,196.898522 C97.8853137,196.898522 110.154225,184.733014 110.154225,169.792619 L55.4909279,169.792619 C55.4909279,184.733014 67.8452774,196.898522 82.8652955,196.898522 L82.8652955,196.898522 Z"
        class="notification--bellClapper"
      ></path>
      <path
        d="M146.189736,135.093562 L146.189736,82.040478 C146.189736,52.1121695 125.723173,27.9861651 97.4598237,21.2550099 L97.4598237,14.4635396 C97.4598237,6.74321823 90.6498186,0 82.8530327,0 C75.0440643,0 68.2462416,6.74321823 68.2462416,14.4635396 L68.2462416,21.2550099 C39.9707102,27.9861651 19.5163297,52.1121695 19.5163297,82.040478 L19.5163297,135.093562 L0,154.418491 L0,164.080956 L165.706065,164.080956 L165.706065,154.418491 L146.189736,135.093562 Z"
        class="notification--bell"
      ></path>
    </svg>
    <div class="notification--num">5</div>
    <div class="menu" :class="{ dropped: drop }">
      <p class="menu-title">Jobs and Bids</p>
      <div class="menu-items">
        <a href="/announcements/job-opportunities" class="menu-item">
          <svg heigth="20" width="20" viewBox="0 0 32 32">
    <title>Briefcase</title>
    <g id="Briefcase">
      <path
        d="M29,12a5.006,5.006,0,0,0-5-5H21V6a3,3,0,0,0-3-3H14a3,3,0,0,0-3,3V7H8a5.006,5.006,0,0,0-5,5v1.613a4.973,4.973,0,0,0,1,2.979V24a5.006,5.006,0,0,0,5,5H23a5.006,5.006,0,0,0,5-5V16.592a4.973,4.973,0,0,0,1-2.979ZM13,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H13ZM5,12A3,3,0,0,1,8,9H24a3,3,0,0,1,3,3v1.613a2.991,2.991,0,0,1-2.507,2.959l-4.614.768A2,2,0,0,0,18,16H14a2,2,0,0,0-1.879,1.34l-4.614-.768A2.991,2.991,0,0,1,5,13.613Zm13,6v2H14V18Zm5,9H9a3,3,0,0,1-3-3V18.178a5.04,5.04,0,0,0,1.179.367l4.821.8V20a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2v-.653l4.821-.8A5.04,5.04,0,0,0,26,18.178V24A3,3,0,0,1,23,27Z"
      />
    </g>
  </svg>
          <p>Jobs: 0</p>
        </a>
        <a href="/announcements/bids" class="menu-item">
          <svg viewBox="0 0 32 32" width="20" height="20">
    <title>Contract</title>
    <g id="_11-20" data-name="11-20">
      <g id="Contract">
        <path
          d="M29.5,9.132a1,1,0,0,0-1.364.372L27,11.485V9.657a4.966,4.966,0,0,0-1.464-3.535L22.878,3.464A4.966,4.966,0,0,0,19.343,2H10A5.006,5.006,0,0,0,5,7V25a5.006,5.006,0,0,0,5,5H22a5.006,5.006,0,0,0,5-5V15.515L29.868,10.5A1,1,0,0,0,29.5,9.132Zm-5.374-1.6A3.047,3.047,0,0,1,24.5,8H22a1,1,0,0,1-1-1V4.5a3.047,3.047,0,0,1,.464.377ZM25,25a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3h9V7a3,3,0,0,0,3,3h3v4.985L20.132,23.5a1,1,0,0,0,.372,1.364A.988.988,0,0,0,21,25a1,1,0,0,0,.869-.5L25,19.015Z"
        />
        <path d="M10,10h6a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z" />
        <path d="M10,14H20a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z" />
        <path d="M21,17a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2H20A1,1,0,0,0,21,17Z" />
        <path
          d="M16.3,22.29a2.732,2.732,0,0,1-1.2.7c-.1-.068-.251-.209-.36-.307a2.9,2.9,0,0,0-2.283-1,3.424,3.424,0,0,0-2.285,1.763,1,1,0,0,0,1.664,1.11c.561-.841.863-.888.866-.888.125-.021.51.331.694.5A2.429,2.429,0,0,0,15,25a4.392,4.392,0,0,0,2.707-1.293A1,1,0,0,0,16.3,22.29Z"
        />
      </g>
    </g>
  </svg>
          <p>Bids: 0</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const drop = ref(false);

const dropMenu = () => {
  drop.value = !drop.value;
};
</script>

<style scoped>
.notification {
  position: relative;
  cursor: pointer;
}

.menu {
  position: absolute;
  left: -5.8rem;
  top: calc(100% + 1.4rem);
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  justify-items: center;
  background: var(--surface3);
  padding: var(--size-3);
  border-radius: var(--radius-2);
  max-width: 10rem;
  box-shadow: var(--shadow-3);
  transform: translateY(-1em);
  opacity: 0;
  transition: opacity 150ms var(--ease-out-1), transform 150ms var(--ease-out-1);
  pointer-events: none;
}

.dropped {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
  cursor: default;
}

.menu::before {
  position: absolute;
  top: -1em;
  right: 0.8em;
  content: "";
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid var(--surface3);
}

.menu-title {
  font-size: var(--font-size-1);
  width: max-content;
}

.menu-items {
  display: grid;
  gap: var(--size-2);
}

.menu-item {
  display: flex;
  justify-items: center;
  gap: var(--size-3);
  text-decoration: none;
}

.menu-item > p {
  color: var(--text2);
}

.menu-item > p:hover {
  color: var(--brand);
}

.menu-item > p {
  font-size: var(--font-size-1);
}

.notification svg > path {
  fill: var(--text2);
}
.notification svg > path:hover {
  fill: var(--text1);
}
.notification--bell {
  animation: bell 2.2s linear;
  transform-origin: 50% 0%;
}
.notification--bellClapper {
  animation: bellClapper 1.5s 0.1s linear;
}
.notification--num {
  position: absolute;
  top: 0%;
  left: 70%;
  font-size: var(--font-size-0);
  border-radius: var(--radius-2);
  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--red-4);
  color: var(--text1);
  text-align: center;
  display: grid;
  place-content: center;
  animation: notification 2s ease;
}

@keyframes bell {
  0%,
  25%,
  75%,
  100% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(2deg);
  }
  45% {
    transform: rotate(-2deg);
  }
  55% {
    transform: rotate(1deg);
  }
  60% {
    transform: rotate(-1deg);
  }
}
@keyframes bellClapper {
  0%,
  25%,
  75%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-0.15em);
  }
  45% {
    transform: translateX(0.15em);
  }
  55% {
    transform: translateX(-0.1em);
  }
  60% {
    transform: translateX(0.1em);
  }
}
@keyframes notification {
  0%,
  25%,
  75%,
  100% {
    opacity: 1;
  }
  30%,
  70% {
    opacity: 0;
  }
}

#Briefcase {
  fill: var(--text1);
  stroke: none;
}

#Contract > path {
  fill: var(--text1);
  stroke: none;
}
</style>
