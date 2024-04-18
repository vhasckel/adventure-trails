import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./styles.module.css";
import SelectInput from "../../components/SelectInput";

function RegisterTrailPage() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const difficulty = watch("trailDifficulty", "");
  const type = watch("trailType", "");

  const handleChange = (event, fieldName) => {
    setValue(fieldName, event.target.value);
  };

  const difficulties = [
    { value: "Fácil", label: "Fácil" },
    { value: "Moderado", label: "Moderado" },
    { value: "Difícil", label: "Difícil" },
  ];

  const types = [
    { value: "Ida e volta", label: "Ida e volta" },
    { value: "Ponto a ponto", label: "Ponto a ponto" },
  ];

  const renderInput = (name, label, step, type = "text") => (
    <Input
      {...register(name)}
      name={name}
      onChange={(event) => handleChange(event, name)}
      id={`outlined-${name}`}
      label={label}
      type={type}
      step={0.01}
    />
  );

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={styles.section}
    >
      <h1>Cadastro de nova trilha</h1>

      <div
        className={`${styles.flexColumn} ${styles.gap1em} ${styles.container}`}
      >
        {renderInput("trailName", "Nome da trilha")}

        <div className={`${styles.flexRowBetween} ${styles.gap1em}`}>
          <div
            className={`${styles.left} ${styles.flexColumn} ${styles.gap1em}`}
          >
            {renderInput("duration", "Duração estimada (min)", "number")}
            {renderInput("city", "Cidade")}
            {renderInput("completeUserName", "Nome completo usuário")}
          </div>
          <div
            className={`${styles.right} ${styles.flexColumn} ${styles.gap1em}`}
          >
            {renderInput("trailLength", "Trajeto (km)", "number")}
            {renderInput("state", "Estado")}

            <SelectInput
              {...register("trailDifficulty")}
              id={"outlined-select-difficulty"}
              label={"Dificuldade"}
              value={difficulty}
              onChange={(event) => handleChange(event, "trailDifficulty")}
              options={difficulties}
            />
          </div>
        </div>

        <SelectInput
          {...register("trailType")}
          id={"outlined-select-difficulty"}
          label={"Tipo"}
          value={type}
          onChange={(event) => handleChange(event, "trailType")}
          options={types}
        />

        {renderInput("trailUrlImage", "URL imagem da trilha")}

        <div className={styles.btn}>
          <Button type={"submit"} text={"Cadastrar"} />
          <Button text={"Voltar"} />
        </div>
      </div>
    </form>
  );
}

export default RegisterTrailPage;
