export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res, 'Guardrail was processe');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardrail was processe');
  }

  return queue;
}
