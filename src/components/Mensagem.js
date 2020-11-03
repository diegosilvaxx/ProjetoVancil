export const ModalClose = {
  title: "Atenção!",
  body: "Deseja realmente sair do sistema?",
  type: "Alert"
};
export const ModalWhats = telefone => {
  return {
    title: "Negocie com um colaborador",
    body: `Whatsapp - ${telefone}"`,
    type: "View"
  }
};