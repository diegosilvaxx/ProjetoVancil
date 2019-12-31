import React, { Component } from "react";
import { Input } from "@rocketseat/unform";
import { setContabilidade } from "~/store/modules/pedidoVenda/actions";
import { useDispatch } from "react-redux";
import store from "~/store";

const Contabilidade = () => {
  const dispatch = useDispatch();
  const statePedidoVenda = store.getState().pedidoVenda;

  async function handleForm() {
    let CondicoesPagamento = document.getElementById("CondicoesPagamento")
      .value;
    let FormaPagamento = document.getElementById("FormaPagamento").value;

    let data = {
      CondicoesPagamento: CondicoesPagamento,
      FormaPagamento: FormaPagamento
    };
    if (data != null) {
      dispatch(setContabilidade({ data }));
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Condições de pagamento
          </label>
          <Input
            id="CondicoesPagamento"
            name="CondicoesPagamento"
            type="text"
            placeholder="Condições de pagamento"
            onBlur={handleForm}
            value={statePedidoVenda.CondicoesPagamento}
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Forma de pagamento
          </label>
          <Input
            id="FormaPagamento"
            name="FormaPagamento"
            type="text"
            placeholder="Forma de pagamento"
            onBlur={handleForm}
            value={statePedidoVenda.FormaPagamento}
          />
        </div>
      </div>
    </>
  );
};

export default Contabilidade;
