const preguntas=[
 {q:"¿Puede ocurrir un embarazo en la primera relación sexual?",o:["Sí, si existe posibilidad de fecundación y no hay protección eficaz.","No, nunca.","Solo durante la menstruación."],a:0,exp:"Sí. La primera relación sexual no elimina el riesgo de embarazo."},
 {q:"¿Cuál opción ayuda a reducir el riesgo de muchas ITS?",o:["Usar dos condones a la vez.","Usar correctamente un condón.","Tomar anticonceptivos hormonales."],a:1,exp:"El condón reduce el riesgo de muchas ITS y también puede prevenir embarazos."},
 {q:"¿Qué significa consentimiento?",o:["Aceptar por miedo o presión.","Dar permiso libremente y poder cambiar de opinión.","No decir nada."],a:1,exp:"El consentimiento debe ser libre y puede retirarse en cualquier momento."},
 {q:"¿Qué debes hacer si tienes una duda de salud sexual?",o:["Confiar en cualquier publicación.","Evitar preguntar.","Consultar fuentes confiables o personal de salud."],a:2,exp:"Las fuentes confiables y el personal de salud pueden orientar de forma adecuada."},
 {q:"¿Las pastillas anticonceptivas protegen contra las ITS?",o:["Sí, contra todas.","No, previenen embarazo pero no protegen contra ITS.","Solo con antibióticos."],a:1,exp:"Los anticonceptivos hormonales no protegen contra las ITS."},
 {q:"¿Qué es correcto sobre las ITS?",o:["Todas producen síntomas visibles.","Una persona puede tener una ITS sin notarlo.","No existen pruebas para detectarlas."],a:1,exp:"Muchas ITS pueden ser asintomáticas; el personal de salud puede orientar sobre pruebas."},
 {q:"¿Usar dos condones al mismo tiempo es más seguro?",o:["Sí, siempre.","No; puede aumentar la fricción y provocar roturas.","Depende del color."],a:1,exp:"Se recomienda usar un solo condón correctamente cada vez."},
 {q:"¿Quién comparte la responsabilidad de prevenir un embarazo?",o:["Solo una persona.","Solo el personal médico.","Las personas involucradas."],a:2,exp:"La prevención se conversa y se comparte entre las personas involucradas."}
];
const quizBox=document.getElementById("quiz-box");
function dibujarPreguntas(){
 quizBox.replaceChildren();
 preguntas.forEach((p,i)=>{
  const field=document.createElement("fieldset");field.className="quiz-question";
  const legend=document.createElement("legend");legend.textContent=`${i+1}. ${p.q}`;field.append(legend);
  p.o.forEach((op,j)=>{
   const label=document.createElement("label");label.className="quiz-option";
   const input=document.createElement("input");input.className="form-check-input";input.type="radio";input.name=`q${i}`;input.value=j;input.required=true;
   const span=document.createElement("span");span.textContent=op;label.append(input,span);field.append(label);
  });quizBox.append(field);
 });
}
dibujarPreguntas();
document.getElementById("quiz-form").addEventListener("submit",e=>{
 e.preventDefault();let score=0;const feedback=[];
 preguntas.forEach((p,i)=>{const selected=document.querySelector(`input[name="q${i}"]:checked`);if(selected&&Number(selected.value)===p.a)score++;feedback.push(`${i+1}. ${selected&&Number(selected.value)===p.a?"Correcto":"Repasa"}: ${p.exp}`);});
 const out=document.getElementById("quiz-resultado");out.classList.remove("d-none");out.textContent=`Resultado: ${score} de ${preguntas.length} (${Math.round(score/preguntas.length*100)}%).\n\n${feedback.join("\n")}`;
});
document.getElementById("quiz-reset").addEventListener("click",()=>{document.getElementById("quiz-form").reset();const out=document.getElementById("quiz-resultado");out.classList.add("d-none");out.textContent="";});
document.getElementById("aprendizaje-form").addEventListener("submit",e=>{
 e.preventDefault();const datos=[["Lo que aprendí",document.getElementById("aprendi").value],["Tema que quiero comprender mejor",document.getElementById("duda").value],["Cómo usaré esta información",document.getElementById("aplicacion").value]];
 const out=document.getElementById("aprendizaje-resultado");out.classList.remove("d-none");out.textContent="Tu reflexión :\n\n"+datos.map(([a,b])=>a+": "+b).join("\n\n");
});