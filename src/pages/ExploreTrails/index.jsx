import Card from "../../components/Card";
import Hero from "../../components/Hero";
import TrailsAPI from "../../utils/trailsAPI";

function ExploreTrailsPage() {
  const trails = TrailsAPI();
  return (
    <>
      <Hero showElement={false} title={"Explore trilhas incríveis"} />
      {trails.map((trail, index) => (
        <Card
          key={index}
          trailName={trail.trail_name} // Corrigido para acessar o nome da trilha corretamente
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
