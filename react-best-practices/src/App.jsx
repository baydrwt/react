import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/Search/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./components/Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why working with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="lorem" className="accordion-item">
            <Accordion.Title className="accordion-item-title">Lorem Ipsum Dolor Sit amet 1</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque dignissimos maiores impedit suscipit voluptatibus eligendi mollitia fugiat expedita numquam.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="lorem 1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">Lorem Ipsum Dolor Sit amet 2</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque dignissimos maiores impedit suscipit voluptatibus eligendi mollitia fugiat expedita numquam.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["ITEMS 1", "ITEMS 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
