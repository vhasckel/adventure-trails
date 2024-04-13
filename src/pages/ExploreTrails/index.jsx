import Card from "../../components/Card";
import Hero from "../../components/Hero";
import useTrailsAPI from "../../utils/useFetch";

function ExploreTrailsPage() {
  const trails = useTrailsAPI("./api.json");

  return (
    <>
      <Hero showElement={false} title={"Explore trilhas incríveis"} />
      {trails.map((trail, index) => (
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
      ))}
    </>
  );
}

export default ExploreTrailsPage;
