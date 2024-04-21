import { difficulties, types, states } from "../../utils/trailOptions";
import { useForm } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";
import Button from "../Button";
import InputField from "../InputField";

import styles from "./styles.module.css";

function Teste({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.section}>
      <h1>Cadastro de nova trilha</h1>

      <div
        className={`${styles.flexColumn} ${styles.gap1em} ${styles.container}`}
      >
        <InputField
          name="trail_name"
          label="Nome da trilha"
          validationRules={{
            required: "O nome da trilha é obrigatório.",
            minLength: {
              value: 3,
              message: "O nome deve ter pelo menos 3 caracteres.",
            },
            maxLength: {
              value: 50,
              message: "O nome não pode exceder 50 caracteres.",
            },
          }}
          register={register}
          errors={errors}
        />

        <div className={`${styles.flexRowBetween} ${styles.gap1em}`}>
          <div
            className={`${styles.left} ${styles.flexColumn} ${styles.gap1em}`}
          >
            <InputField
              name="duration"
              label="Duração estimada (min)"
              type="number"
              validationRules={{
                required: "A duração é obrigatória.",
                valueAsNumber: true,
                min: { value: 10, message: "A duração mínima é 10 minutos." },
                max: { value: 600, message: "A duração máxima é 600 minutos." },
              }}
              register={register}
              errors={errors}
            />
            <InputField
              name="city"
              label="Cidade"
              validationRules={{
                required: "A cidade é obrigatória.",
                minLength: {
                  value: 3,
                  message: "A cidade deve ter pelo menos 3 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message: "A cidade não pode exceder 50 caracteres.",
                },
              }}
              register={register}
              errors={errors}
            />

            <InputField
              name="trail_creator_name"
              label="Nome completo do usuário"
              validationRules={{
                required: "O nome do criador é obrigatório.",
                minLength: {
                  value: 3,
                  message: "O nome deve ter pelo menos 3 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message: "O nome não pode exceder 100 caracteres.",
                },
              }}
              register={register}
              errors={errors}
            />
          </div>

          <div
            className={`${styles.right} ${styles.flexColumn} ${styles.gap1em}`}
          >
            <InputField
              name="trail_length"
              label="Trajeto (km)"
              type="number"
              validationRules={{
                required: "O trajeto é obrigatório.",
                valueAsNumber: true,
                min: { value: 1, message: "O trajeto mínimo é 1 km." },
                max: { value: 100, message: "O trajeto máximo é 100 km." },
              }}
              register={register}
              errors={errors}
            />
            <TextField
              {...register("state", { required: "O estado é obrigatório." })}
              id="outlined-select-state"
              select
              label="Estado"
              error={!!errors.state}
              helperText={errors.state ? "Por favor, escolha um estado." : ""}
            >
              {states.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("trail_difficulty", {
                required: "A dificuldade é obrigatória.",
              })}
              id="outlined-select-difficulty"
              select
              label="Dificuldade"
              error={!!errors.trail_difficulty}
              helperText={
                errors.trail_difficulty
                  ? "Por favor, escolha uma dificuldade."
                  : ""
              }
            >
              {difficulties.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <TextField
          {...register("trail_type", { required: "O tipo é obrigatório." })}
          id="outlined-select-type"
          select
          label="Tipo"
          error={!!errors.trail_type}
          helperText={errors.trail_type ? "Por favor, escolha um tipo." : ""}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <InputField
          name="image_url"
          label="URL da imagem"
          validationRules={{
            required: "A URL da imagem é obrigatória.",
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: "Por favor, insira uma URL válida.",
            },
          }}
          register={register}
          errors={errors}
        />

        <div className={styles.btn}>
          <Button type={"submit"} text={"Cadastrar"} />
        </div>
      </div>
    </form>
  );
}

export default Teste;
