export default function guardrail(mathFunction) {
  const queue = [];
  let res;
  try {
    res = mathFunction();
  } catch (error) {
    res = error.toString();
  }

  queue.push(res);
  queue.push(res, 'Guardrail was processe');

  return queue;
}
