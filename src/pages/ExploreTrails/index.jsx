import Card from "../../components/Card";
import Hero from "../../components/Hero";

function ExploreTrailsPage() {
  return (
    <>
      <Hero showElement={false} title={"Explore trilhas incríveis"} />
      <Card
        trailName={"Trilha da Costa da Lagoa"}
        location={"Florianópolis/SC"}
        timeInMinutes={"131"}
        routeSize={"7"}
        level={"Intermediário"}
        type={""}
        authorname={"Vanessa Hasckel"}
        imageURL={""}
      />
    </>
  );
}

export default ExploreTrailsPage;
