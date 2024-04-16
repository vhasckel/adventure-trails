import { useContext } from "react";
import { TrailsContext } from "../../context/trailsContext";
import Card from "../../components/Card";
import Hero from "../../components/Hero";

function ExploreTrailsPage() {
  const { trails, isLoading } = useContext(TrailsContext);

  return (
    <>
      <Hero showElement={false} title={"Explore trilhas incríveis"} />
      {Array.isArray(trails) && !isLoading ? (
        trails.map((trail, index) => (
          <Card
            key={index}
            trailName={trail.trail_name}
            location={trail.city_and_state}
            timeInMinutes={trail.duration}
            routeSize={trail.trail_length}
            level={trail.route}
            type={trail.trail_type}
            authorname={trail.trail_creator_name}
            imageURL={trail.image_url}
          />
        ))
      ) : (
        <span>não há dados disponíveis</span>
      )}
    </>
  );
}

export default ExploreTrailsPage;
