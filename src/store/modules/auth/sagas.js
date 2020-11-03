import { all, takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import history from "services/history";
import api from "~/services/api";
import { signInSuccess, signFailure } from "./actions";
import { SIGN_IN_REQUEST, SIGN_OUT, SIGN_REGISTER } from './actionTypes';

export function* signIn({ payload }) {
  const { usuario, password } = payload;

  try {
    const result = yield call(api.post, `Login`, {
      Email: usuario,
      Password: password
    });

    const payloadLogin = {
      token: result.data.data.accessToken,
      codigo: result.data.data.user.id,
      email: result.data.data.user.email
    };

    yield put(signInSuccess(payloadLogin));
    history.push("/dashboard");

  } catch (error) {
    toast.error("Email ou senha incorreto, verifique seus dados!");
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export function* signRegister({ payload }) {
  try {
    yield call(api.post, `register`, {
      Email: payload.email,
      Password: payload.password,
      ConfirmPassword: payload.confirmPassword
    });

    toast.success("Cadastrado com sucesso!");
    history.push("/");

  } catch (error) {
    toast.error("Email ja cadastrado!");
    history.push("/register");
  }
}

export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_OUT, signOut),
  takeLatest(SIGN_REGISTER, signRegister),
]);
