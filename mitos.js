const mitos = [
["En la primera relación sexual no hay riesgo de embarazo.","El embarazo puede ocurrir en cualquier relación sexual con posibilidad de fecundación sin protección, incluida la primera vez."],
["Usar doble condón ofrece el doble de protección.","Usar dos condones a la vez puede aumentar la fricción y hacer que se rompan. Se utiliza uno correctamente cada vez."],
["No puedes quedar embarazada si tienes relaciones durante la menstruación.","Aunque la probabilidad puede variar, sí puede ocurrir un embarazo; los ciclos y la ovulación cambian."],
["Retirarse antes de eyacular siempre evita el embarazo.","El coito interrumpido no es un método muy confiable y no protege contra infecciones de transmisión sexual."],
["La anticoncepción de emergencia es lo mismo que un aborto.","La anticoncepción de emergencia busca prevenir un embarazo después de una relación sin protección; no interrumpe un embarazo establecido."],
["La pastilla anticonceptiva protege contra las ITS.","La mayoría de los métodos hormonales previenen embarazos, pero no protegen contra infecciones de transmisión sexual. El condón reduce el riesgo."],
["Si una persona parece sana, no puede tener una ITS.","Muchas ITS no presentan síntomas. Las pruebas y la orientación de profesionales ayudan a conocer el estado de salud."],
["Hablar de consentimiento una vez significa que siempre existe.","El consentimiento debe ser libre, claro y puede retirarse en cualquier momento. El silencio o la presión no equivalen a consentimiento."],
["Todas las personas adolescentes tienen que iniciar su vida sexual.","Cada persona decide si quiere tener relaciones y cuándo. No existe obligación ni una edad única en la que todas deban hacerlo."],
["Los anticonceptivos siempre causan infertilidad permanente.","Los métodos anticonceptivos habituales no causan infertilidad permanente; los efectos y el retorno de la fertilidad dependen del método."],
["Solo las mujeres deben responsabilizarse de prevenir un embarazo.","La prevención es una responsabilidad compartida: las personas involucradas pueden informarse, dialogar y acordar medidas de protección."],
["Una prueba de embarazo puede hacerse inmediatamente después de la relación y siempre será exacta.","Hacerla demasiado pronto puede dar un falso negativo. Sigue las indicaciones de la prueba o consulta a personal de salud sobre el momento adecuado."]
];
const lista = document.getElementById("mitos-lista");
mitos.forEach(([mito, realidad], i) => {
  const col = document.createElement("div"); col.className = "col-12 col-lg-6";
  const article = document.createElement("article"); article.className = "myth-card";
  const p1 = document.createElement("p"); p1.className = "myth";
  const s1 = document.createElement("strong"); s1.textContent = `❌ Mito ${i+1}: `;
  p1.append(s1, document.createTextNode(`“${mito}”`));
  const p2 = document.createElement("p"); p2.className = "reality";
  const s2 = document.createElement("strong"); s2.textContent = "✅ Realidad: ";
  p2.append(s2, document.createTextNode(realidad)); article.append(p1,p2); col.append(article); lista.append(col);
});