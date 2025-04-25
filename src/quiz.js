import { useState } from "react";

const questions = [{'question': 'Las fuentes potenciales (causa) de riesgos se encuentran en los elementos o actividades que tienen la potencialidad de generar eventos o sucesos no deseados.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'El riesgo residual es el riesgo que permanece después del tratamiento de riesgos a través del proceso de selección y puesta en operación de medidas para abordar el riesgo.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'El riesgo residual siempre coincide con el nivel de riesgo que una entidad está dispuesta a aceptar (apetito de riesgo) en el logro de sus estrategias y objetivos corporativos.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'FALSA'}, {'question': 'Dentro de los elementos del control del grupo de control tiene como misión detectar e informar desvíos (por ejemplo, ante incumplimiento normativo) para que el grupo actuante realice alguna corrección en el sistema operante.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'Los controles preventivos actúan sobre la causa de los riesgos con el fin de disminuir la probabilidad de ocurrencia del evento no deseado.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'En entidades financieras ante cualquier situación que no se pueda cumplir con los requisitos mínimos establecidos en el marco normativo se pueden diseñar o implementar controles compensatorios.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'El Riesgo Operacional incluye:', 'options': ['Riesgo Legal', 'Riesgo Tecnológico', 'Riesgo de Fraude Interno y Externo', 'Todas son correctas'], 'answer': 'Todas son correctas'}, {'question': 'El análisis de riesgos operacional es un primer paso para:', 'options': ['Calificar clientes', 'Decidir nuevas inversiones', 'Mejorar procesos y soluciones tecnológicas', 'Diseñar nuevos productos y servicios'], 'answer': 'Mejorar procesos y soluciones tecnológicas'}, {'question': 'El apetito al riesgo es...', 'options': ['La sumatoria de todos los riesgos de la Organización', 'El nivel de aceptación que tiene la Organización sobre los peligros propios del Negocio.', 'La valoración general de un proceso', 'Aquellos riesgos que la Organización no está dispuesta asumir'], 'answer': 'El nivel de aceptación que tiene la Organización sobre los peligros propios del Negocio.'}, {'question': 'El directorio o autoridad equivalente (por ejemplo, consejo de administración) desempeña una función de supervisión de la gestión de riesgos que ayuda a apoyar la creación de valor en una entidad y a evitar su declive.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'La dependencia de la auditoría interna de la Dirección asegura que su labor esté libre de obstáculos y sesgos en la planificación y realización de su trabajo. Debe haber una interacción regular entre la auditoría interna y la Dirección para garantizar que la labor de la auditoría interna se alinee a lo requerido por la organización.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'FALSA'}, {'question': '¿Cuál de las siguientes funciones no es responsabilidad de las primeras líneas de la organización en materia de tecnología y seguridad?', 'options': ['Identificación de los riesgos inherentes', 'Aplicación de controles periódicos sobre los riesgos residuales', 'Seguimiento para el cumplimiento de los planes de acción sobre los riesgos residuales significativos', 'Informar la identificación de riesgos nuevos durante el año'], 'answer': 'Seguimiento para el cumplimiento de los planes de acción sobre los riesgos residuales significativos'}, {'question': 'El área de Seguridad Informática debe contar con un Comité, el cual deberá reunirse periódicamente para garantizar el seguimiento de las acciones del área, junto a los controles y proyectos realizados, que permitan entender la situación actual del área.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'El Directorio (o autoridad equivalente) tiene entre sus funciones:', 'options': ['Dirigir las funciones de las áreas de Tecnología Informática y Seguridad de la Información', 'Definir nuevas tecnologías a utilizar por las áreas y establecer cambios de seguridad', 'Monitorear el desempeño del gobierno de tecnología y seguridad de la información, para cumplir con las metas y objetivos establecidos', 'Todas las anteriores'], 'answer': 'Todas las anteriores'}, {'question': "Según el marco COSO ('Gestión del Riesgo Empresarial Integrando Estrategia y Desempeño') únicamente se debe contemplar el riesgo respecto a una estrategia elegida. Bajo este framework, no es relevante evaluar la posibilidad de que una estrategia no esté alineada con la misión, visión y valores clave de una organización.", 'options': ['VERDADERA', 'FALSA'], 'answer': 'FALSA'}, {'question': 'El proceso de gestión de Riesgo Operacional abarca:', 'options': ['El seguimiento de los riesgos identificados', 'La ponderación de las debilidades operacionales', 'La aplicación de medidas de mitigación', 'Todas son correctas'], 'answer': 'Todas son correctas'}, {'question': 'En la gestión de riesgos es necesario identificar y evaluar aquellos riesgos que pueden afectar a la consecución de los objetivos estratégicos y de negocio. Los riesgos se priorizan en función de su gravedad en el contexto del apetito al riesgo.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}, {'question': 'El apetito al riesgo es:', 'options': ['La brecha entre los riesgos identificados y los existentes', 'El nivel de aceptación que tiene la organización sobre los peligros del Negocio', 'Aquellos riesgos máximos que la organización no está dispuesta a asumir', 'La valoración general de un proceso de negocio'], 'answer': 'El nivel de aceptación que tiene la organización sobre los peligros del Negocio'}, {'question': 'La gestión del riesgo operacional y tecnológico se ubica en la:', 'options': ['Primera línea de defensa', 'Segunda línea de defensa', 'Tercera línea de defensa'], 'answer': 'Segunda línea de defensa'}, {'question': 'En el caso de interacción entre los roles de cada una de las 3 líneas:', 'options': ['Debe existir comunicación fluida entre los sectores de la primera y segunda línea', 'Debe existir independencia entre el rol de la tercera y primera línea', 'La tercera línea puede interactuar con la segunda, pero debe tener reporte directo al órgano de gobierno', 'Todas son correctas'], 'answer': 'Todas son correctas'}, {'question': 'La auditoría interna deberá realizar su propio análisis de riesgos para evaluar la efectividad de los controles mitigantes en una organización. Para ello, se podrá basar en los informes realizados por el área de Gestión de Riesgos (segunda línea) debido a que es el área experta en la materia.', 'options': ['VERDADERA', 'FALSA'], 'answer': 'VERDADERA'}];


export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, current]);
    }
  };

  const nextQuestion = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Quiz Seguridad - Lote 2</h1>
      {showResult ? (
        <div>
          <p>Obtuviste {score} de {questions.length} correctas.</p>
          {wrongAnswers.length > 0 && (
            <div>
              <h3>Preguntas incorrectas:</h3>
              <ul>
                {wrongAnswers.map(index => (
                  <li key={index}>
                    <strong>{questions[index].question}</strong><br />
                    Respuesta correcta: <em>{questions[index].answer}</em>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', fontSize: '16px' }}>{questions[current].question}</p>
          {questions[current].options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={selected !== null}
              style={{
                display: 'block',
                width: '100%',
                margin: '8px 0',
                padding: '10px',
                backgroundColor: selected
                  ? option === questions[current].answer
                    ? 'green'
                    : option === selected
                    ? 'red'
                    : '#ccc'
                  : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              {option}
            </button>
          ))}
          {selected && <button onClick={nextQuestion}>Siguiente</button>}
        </div>
      )}
    </div>
  );
}
