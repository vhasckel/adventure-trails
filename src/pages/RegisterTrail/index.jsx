import styles from "./styles.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

function RegisterTrailPage() {
  return (
    <section className={styles.section}>
      <h1>Cadastro de nova trilha</h1>
      <div
        className={`${styles.flexColumn} ${styles.gap1em} ${styles.container}`}
      >
        <Input label={"Nome da trilha"} />

        <div className={`${styles.flexRowBetween} ${styles.gap1em}`}>
          <div
            className={`${styles.left} ${styles.flexColumn} ${styles.gap1em}`}
          >
            <Input label={"Duração estimada (min)"} />
            <Input label={"Cidade"} />
            <Input label={"Nome completo usuário"} />
          </div>

          <div
            className={`${styles.right} ${styles.flexColumn} ${styles.gap1em}`}
          >
            <Input label={"Trajeto (km)"} />
            <Input label={"Estado"} />
            <Input label={"Dificuldade"} />
          </div>
        </div>

        <Input label={"Tipo de trilha"} />
        <Input label={"URL imagem da trilha"} />

        <div className={styles.btn}>
          <Button text={"Cadastrar"} />
          <Button text={"Voltar"} />
        </div>
      </div>
    </section>
  );
}

export default RegisterTrailPage;
