import { h } from "preact";
import { useState, useRef } from "preact/hooks";
import "./expertise-styles.css";

function ExpertiseList() {
  const expertiseDetails = [
    {
      title: "General Protection",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "GBV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Legal Assistance",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Livelihood",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "PSEA Trainings",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "WASH",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Reproductive Health",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Child Protection",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Green Houses",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Awarness raising",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "PSS",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
    {
      title: "Case managment",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam sint ea illum magni aliquid ut quasi, praesentium reiciendis commodi debitis possimus? Sint, sunt repellendus.",
    },
  ];

  const [currentExp, setCurrentExp] = useState({
    title: "title",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis quidem unde, libero error voluptate vero qui, corrupti, officiis atque officia! Velit dicta consequuntur culpa?",
  });

  const expertiseDialog = useRef(null);

  function handleClick(item) {
    setCurrentExp(item)
    expertiseDialog.current.showModal()
  }

  function closeExpertiseDialog() {
    expertiseDialog.current.close();
  }

  return (
    <>
      <dialog ref={expertiseDialog} class="expertise-menu">
        <h2 class="expertise-menu-title">{currentExp.title}</h2>
        <p class="expertise-menu-content">{currentExp.desc}</p>
        <button onClick={closeExpertiseDialog} class="expertise-close-btn">
          Close
        </button>
      </dialog>
      <div class="expertise-container">
        {expertiseDetails.map((item) => (
          <button class="expertise-item" onClick={() => handleClick(item)}>{item.title}</button>
        ))}
      </div>
    </>
  );
}

export default ExpertiseList;
