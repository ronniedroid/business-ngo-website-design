import { h } from "preact";

function LocationMap() {
  return (
    <iframe
      title="Harikar Location on the map"
      width="100%"
      height="100%"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=42.94779360294343%2C36.850114363968906%2C42.95675218105316%2C36.85401198673348&layer=mapnik&marker=36.852063200192035%2C42.95227289199829"
      style="border: 0; border-radius: var(--radius-3);"
      loading="lazy"
    ></iframe>
  );
}

export default LocationMap;
