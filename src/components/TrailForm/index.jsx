import { useForm } from "react-hook-form";
import { difficulties, types } from "../../utils/trailOptions";
import InputField from "../InputField";
import SelectInput from "../SelectInput";
import Button from "../Button";
import validationMessages from "../../utils/validationMessages.json";
import styles from "./styles.module.css";

const TrailForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const difficulty = watch("rail_difficulty", "");
  const type = watch("trail_type", "");

  const handleChange = (event, fieldName) => {
    setValue(fieldName, event.target.value);
  };

  const renderInput = (name, label, type = "text", rules = {}) => (
    <InputField
      {...register(name, rules)}
      name={name}
      onChange={(event) => handleChange(event, name)}
      id={`outlined-${name}`}
      label={label}
      type={type}
      step={type === "number" ? 0.01 : undefined}
      error={errors[name] ? validationMessages.errors[name] : null}
    />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.section}>
      <h1>Cadastro de nova trilha</h1>

      <div
        className={`${styles.flexColumn} ${styles.gap1em} ${styles.container}`}
      >
        {renderInput("trail_name", "Nome da trilha", "text", {
          minLength: {
            value: 3,
            message: validationMessages.errors.trail_name.minLength, // Mensagem do JSON
          },
          maxLength: {
            value: 50,
            message: validationMessages.errors.trail_name.maxLength, // Mensagem do JSON
          },
        })}

        <div className={`${styles.flexRowBetween} ${styles.gap1em}`}>
          <div
            className={`${styles.left} ${styles.flexColumn} ${styles.gap1em}`}
          >
            {renderInput("duration", "Duração estimada (min)", "number", {
              required: validationMessages.errors.duration.required, // Mensagem do JSON
              min: {
                value: 0,
                message: validationMessages.errors.duration.min,
              },
            })}
            {renderInput("city", "Cidade", {
              required: validationMessages.errors.city.required,
            })}
            {renderInput("trail_creator_name", "Nome completo do usuário", {
              required: validationMessages.errors.trail_creator_name.required,
            })}
          </div>

          <div
            className={`${styles.right} ${styles.flexColumn} ${styles.gap1em}`}
          >
            {renderInput("trail_length", "Trajeto (km)", "number", {
              required: validationMessages.errors.trail_length.required,
              min: {
                value: 0,
                message: validationMessages.errors.trail_length.min,
              },
            })}
            {renderInput("state", "Estado", {
              required: validationMessages.errors.state.required,
            })}
            <SelectInput
              {...register("rail_difficulty")}
              id={"outlined-select-difficulty"}
              label={"Dificuldade"}
              value={difficulty}
              onChange={(event) => handleChange(event, "rail_difficulty")}
              options={difficulties}
            />
          </div>
        </div>

        <SelectInput
          {...register("trail_type")}
          id={"outlined-select-type"}
          label={"Tipo"}
          value={type}
          onChange={(event) => handleChange(event, "trail_type")}
          options={types}
        />

        {renderInput("image_url", "URL da imagem da trilha", {
          required: validationMessages.errors.image_url.required,
          pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, // Padrão para URLs
            message: validationMessages.errors.image_url.pattern,
          },
        })}

        <div className={styles.btn}>
          <Button type={"submit"} text={"Cadastrar"} />
          <Button type={"button"} text={"Voltar"} />
        </div>
      </div>
    </form>
  );
};

export default TrailForm;
