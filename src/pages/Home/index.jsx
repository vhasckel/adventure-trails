import Content from "../../components/Content";
import Form from "../../components/Form";
import Hero from "../../components/Hero";

function HomePage() {
  return (
    <>
      <Hero
        title={"Que tal aproveitar um tempo com a natureza?"}
        paragraph={
          "Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!"
        }
        showElement={true}
      />
    </>
  );
}

export default HomePage;
