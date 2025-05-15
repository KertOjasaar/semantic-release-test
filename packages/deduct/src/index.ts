export default function deduct(a: number, b: number): number {
  const result = a - b;

  if (result < 0){
    return 0;
  }
  return result;
}
