import { useContext } from "react";
import { TrailsContext } from "../../context/trailsContext";
import Card from "../../components/Card";
import Hero from "../../components/Hero";

function ExploreTrailsPage() {
  const { trails } = useContext(TrailsContext);

  return (
    <>
      <Hero showElement={false} title={"Explore trilhas incríveis"} />
      {Array.isArray(trails) &&
        trails.map((trail, index) => (
          <Card
            key={index}
            trailName={trail.trail_name}
            city={trail.city}
            state={trail.state}
            timeInMinutes={trail.duration}
            routeSize={trail.trail_length}
            level={trail.route}
            type={trail.trail_type}
            authorname={trail.trail_creator_name}
            imageURL={trail.image_url}
          />
        ))}
    </>
  );
}

export default ExploreTrailsPage;
