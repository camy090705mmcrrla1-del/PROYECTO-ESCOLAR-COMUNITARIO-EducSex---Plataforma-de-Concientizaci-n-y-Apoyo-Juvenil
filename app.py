import os
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
app = Flask(__name__, static_folder=".", static_url_path="")
key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=key) if key else None
MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini")

@app.get("/")
def home():
    return send_from_directory(".", "index.html")

@app.post("/api/chat")
def chat():
    data = request.get_json(silent=True) or {}
    message = str(data.get("message", "")).strip()
    if not message or len(message) > 1000:
        return jsonify({"reply": "Escribe una pregunta de hasta 1000 caracteres."}), 400
    if client is None:
        return jsonify({"reply": "La IA no está configurada. Añade OPENAI_API_KEY en .env y reinicia el servidor."}), 503
    try:
        response = client.responses.create(
            model=MODEL,
            instructions=(
                "Eres EducSex, un asistente educativo en español para adolescentes. "
                "Explica de forma clara, respetuosa y no juzgadora temas generales de salud sexual, "
                "prevención del embarazo, anticoncepción, ITS y consentimiento. No diagnostiques ni "
                "sustituyas a profesionales de salud. No solicites datos personales. Para dudas médicas "
                "individuales, recomienda consultar a personal de salud. Ante peligro inmediato, abuso "
                "o coerción, recomienda buscar apoyo de una persona adulta de confianza y servicios locales "
                "de emergencia. Usa lenguaje apropiado para adolescentes."
            ),
            input=message,
            max_output_tokens=450,
        )
        return jsonify({"reply": response.output_text.strip() or "No pude generar una respuesta."})
    except Exception:
        app.logger.exception("Error del proveedor de IA")
        return jsonify({"reply": "El servicio de orientación no está disponible en este momento. Inténtalo más tarde o consulta a personal de salud."}), 502

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
