export const FormDefaultFields = {
  EMAIL: {
    label: { text: "E-mail" },
    name: "email",
    placeholder: "Insira seu e-mail",
    type: "email",
    rules: "required|email",
  },
  PASSWORD: {
    label: { text: "Senha" },
    name: "password",
    placeholder: "Insira sua senha",
    type: "password",
    maxlength: 50,
    rules: "required|min:8|max:50",
  },
  FULLNAME: {
    label: { text: "Nome completo" },
    name: "name",
    placeholder: "Digite seu nome",
    type: "text",
    rules: "required|alpha_spaces|fullname",
  },
};
