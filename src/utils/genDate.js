export default function genDate() {
  let giorno, mese;
  const d = new Date();

  if (d.getDate() < 10) {
    giorno = "0" + d.getDate().toString();
  } else {
    giorno = d.getDate().toString();
  }
  if (d.getMonth() < 10) {
    mese = "0" + d.getMonth().toString();
  } else {
    mese = d.getMonth().toString();
  }
  return giorno + "/" + mese + "/" + d.getFullYear().toString();
}
