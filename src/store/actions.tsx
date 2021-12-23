export const ADD_INCRIMENT = "ADD_INCRIMENT";
export const RESET_INCRIMENT = "RESET_INCRIMENT";

export function addIncriment(payload: number) {
  return { type: ADD_INCRIMENT, payload }
}
export function resetIncriment(payload: number) {
  return { type: RESET_INCRIMENT, payload }
}