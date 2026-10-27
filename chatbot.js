const chatForm=document.getElementById("chat-form");
const chatBox=document.getElementById("chat-box");
const chatInput=document.getElementById("userInput");
const chatStatus=document.getElementById("chat-status");
const sendButton=document.getElementById("chat-send");
function agregarMensaje(texto,tipo){
 const div=document.createElement("div");div.className=`chat-message ${tipo==="user"?"user-message":"bot-message"}`;
 const strong=document.createElement("strong");strong.textContent=tipo==="user"?"Tú: ":"EducSex Bot: ";
 div.append(strong,document.createTextNode(texto));chatBox.append(div);chatBox.scrollTop=chatBox.scrollHeight;
}
chatForm.addEventListener("submit",async e=>{
 e.preventDefault();const texto=chatInput.value.trim();if(!texto)return;
 agregarMensaje(texto,"user");chatInput.value="";sendButton.disabled=true;
 try{
  const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:texto})});
  if(!r.ok)throw new Error("IA no configurada");
  const data=await r.json();agregarMensaje(data.reply||"No pude generar una respuesta.","bot");
  chatStatus.textContent="Respuesta generada. Evita compartir datos personales.";
 }catch(err){
  agregarMensaje(respuestaBasica(texto),"bot");
  chatStatus.textContent="Modo básico activo. Para conectar IA sigue README.md.";
 }finally{sendButton.disabled=false;chatInput.focus();}
});
function respuestaBasica(texto){
 const t=texto.toLowerCase();
 if(/cond[oó]n|anticoncept|embaraz|pastilla/.test(t))return "Existen distintos métodos para prevenir el embarazo. El condón, utilizado correctamente, también reduce el riesgo de muchas ITS. Consulta a personal de salud para conocer opciones adecuadas para ti.";
 if(/consent|presi[oó]n|oblig|violencia/.test(t))return "El consentimiento debe ser libre y sin presión, y puede retirarse en cualquier momento. Si te sientes en peligro o alguien te presiona, busca apoyo de una persona adulta de confianza o de un servicio profesional.";
 if(/its|infecci[oó]n|vih|prueba/.test(t))return "Muchas infecciones de transmisión sexual pueden no presentar síntomas. Las pruebas y la orientación de personal de salud ayudan a prevenirlas y detectarlas.";
 if(/menstru|regla|ciclo/.test(t))return "Los ciclos menstruales pueden variar. Si tienes dudas, dolor intenso o preocupación por un posible embarazo, consulta a un profesional de salud.";
 return "Puedo brindar información general sobre anticoncepción, prevención del embarazo, ITS y consentimiento. Consulta a profesionales para dudas individuales. No incluyas datos personales.";
}