import Episode from "./Episode";

const episodes = [
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 1",
    description: "Episode 1 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 2",
    description: "Episode 2 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 3",
    description: "Episode 3 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 4",
    description: "Episode 4 description",
  },
];

function EpisodesList() {
  return (
  <div className="d-flex p-5">{episodes.map((episode, i) => (
    <Episode
        key={i}
        img={episode.img}
        title={episode.title}
        description={episode.description}
      />
  ))}
  </div>
  );
}

export default EpisodesList;
