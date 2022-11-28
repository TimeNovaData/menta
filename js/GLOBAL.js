const GLOBAL = {

  testPattern: {

    date: (v) =>
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(v),
    email: (v) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
    tel: (v) => /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/.test(v),
    name: (v) => v && v.length > 3,
  },

  validaAi({ currentTarget }) {
    const value = currentTarget.value;
    const tipo = currentTarget.getAttribute("data-tipo");
    const valido = GLOBAL.testPattern[tipo](value);
    const wrapper = currentTarget.closest(".input-field");

    if (!wrapper) return;

    if (valido) {
      wrapper.classList.add("valido");
      wrapper.classList.remove("invalido");
    } else {
      wrapper.classList.remove("valido");
      wrapper.classList.add("invalido");

      currentTarget.addEventListener("keyup", GLOBAL.validaAi);
      currentTarget.removeEventListener("change", GLOBAL.validaAi);
    }
  },
};
