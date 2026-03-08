import { useState } from "react";

const values = [
  {
    id: 1,
    title: "Realização Profissional",
    icon: "✦",
    questions: [
      "O que, para você, significa ter sucesso no trabalho?",
      "Quais são os aspectos mais importantes de um ambiente de trabalho para você?"
    ]
  },
  {
    id: 2,
    title: "Relacionamento Íntimo / Família",
    icon: "♡",
    questions: [
      "Como você define uma relação familiar saudável?",
      "Quais gestos ou ações demonstram seu compromisso com a sua família ou parceiro(a)?"
    ]
  },
  {
    id: 3,
    title: "Amizades",
    icon: "◎",
    questions: [
      "O que torna uma amizade significativa para você?",
      "Quais são os comportamentos que você mais valoriza em um amigo?"
    ]
  },
  {
    id: 4,
    title: "Saúde Física",
    icon: "⟡",
    questions: [
      "Como você define um estilo de vida saudável?",
      "Como você integra seus valores de saúde nas escolhas diárias?"
    ]
  },
  {
    id: 5,
    title: "Diversão & Lazer",
    icon: "✿",
    questions: [
      "O que é divertido para você?",
      "Quais atividades você considera mais valiosas para o seu lazer?"
    ]
  },
  {
    id: 6,
    title: "Espiritualidade",
    icon: "⊹",
    questions: [
      "O que significa espiritualidade para você?",
      "Como você busca conexão espiritual no seu cotidiano?"
    ]
  },
  {
    id: 7,
    title: "Crescimento Pessoal",
    icon: "↑",
    questions: [
      "Como você busca aprender e se desenvolver continuamente?",
      "Quais valores orientam suas escolhas para o autodesenvolvimento?"
    ]
  },
  {
    id: 8,
    title: "Responsabilidade Social",
    icon: "⬡",
    questions: [
      "O que significa ser socialmente responsável para você?",
      "Quais causas ou questões sociais refletem seus valores?"
    ]
  },
  {
    id: 9,
    title: "Sucesso Financeiro",
    icon: "◇",
    questions: [
      "Como a ideia de sucesso financeiro influencia suas decisões diárias?",
      "Quais são seus valores fundamentais relacionados ao dinheiro e à estabilidade?"
    ]
  },
  {
    id: 10,
    title: "Aprovação dos Outros",
    icon: "∿",
    questions: [
      "Até que ponto a aprovação dos outros é importante para você?",
      "Já sentiu que sacrificou seus próprios valores para agradar alguém?"
    ]
  },
  {
    id: 11,
    title: "Bondade",
    icon: "❋",
    questions: [
      "Como a bondade se manifesta nas suas interações diárias?",
      "Quais são as principais barreiras que você enfrenta ao tentar ser mais bondoso(a)?"
    ]
  },
  {
    id: 12,
    title: "Liberdade Pessoal",
    icon: "≋",
    questions: [
      "Como você define liberdade pessoal em sua vida?",
      "Em que medida as expectativas dos outros afetam sua sensação de liberdade?"
    ]
  },
  {
    id: 13,
    title: "Amor",
    icon: "◉",
    questions: [
      "Quais são as formas específicas de amor que você valoriza nos seus relacionamentos?",
      "Como você expressa e recebe amor de forma que ressoa com quem você é?"
    ]
  },
  {
    id: 14,
    title: "Perdão",
    icon: "〜",
    questions: [
      "Como você lida com situações que exigem perdão?",
      "Qual é a importância do perdão na sua vida?"
    ]
  }
];

const SCREENS = { INTRO: "intro", RANKING: "ranking", EXPLORE: "explore", SUMMARY: "summary" };

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Karla:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #F5F0E8;
    --warm-white: #FAF7F2;
    --terracotta: #C17A5B;
    --burgundy: #8B3A52;
    --deep: #2C2420;
    --muted: #8A7E78;
    --sage: #7A8C72;
    --sand: #D4C5A9;
    --light-sand: #EDE5D0;
  }

  html, body { height: 100%; }
  body { background: var(--warm-white); color: var(--deep); font-family: 'Karla', sans-serif; -webkit-font-smoothing: antialiased; }

  .app {
    min-height: 100vh;
    background: var(--warm-white);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ---- INTRO ---- */
  .intro {
    min-height: 100vh;
    width: 100%;
    max-width: 680px;
    padding: 64px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeUp 0.8s ease both;
  }

  .intro-eyebrow {
    font-family: 'Karla', sans-serif;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 24px;
  }

  .intro-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(44px, 8vw, 76px);
    font-weight: 300;
    line-height: 1.05;
    color: var(--deep);
    margin-bottom: 8px;
  }

  .intro-title em {
    font-style: italic;
    color: var(--burgundy);
  }

  .intro-divider {
    width: 48px;
    height: 1px;
    background: var(--terracotta);
    margin: 28px 0;
  }

  .intro-body {
    font-size: 16px;
    line-height: 1.8;
    color: var(--muted);
    font-weight: 300;
    max-width: 480px;
    margin-bottom: 18px;
  }

  .intro-note {
    font-size: 13px;
    color: var(--sand);
    font-style: italic;
    margin-bottom: 52px;
    font-family: 'Cormorant Garamond', serif;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--burgundy);
    color: var(--cream);
    border: none;
    padding: 16px 36px;
    font-family: 'Karla', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-primary:hover { background: var(--deep); transform: translateY(-1px); }
  .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }

  .btn-ghost {
    background: transparent;
    border: 1px solid var(--sand);
    color: var(--muted);
    padding: 12px 28px;
    font-family: 'Karla', sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s;
  }

  .btn-ghost:hover { border-color: var(--terracotta); color: var(--terracotta); }

  /* ---- RANKING ---- */
  .ranking-screen {
    width: 100%;
    max-width: 820px;
    padding: 48px 24px 72px;
    animation: fadeUp 0.6s ease both;
  }

  .screen-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .screen-step {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 12px;
  }

  .screen-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(30px, 5vw, 48px);
    font-weight: 300;
    color: var(--deep);
    margin-bottom: 12px;
  }

  .screen-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.65;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 40px;
  }

  .value-card {
    background: var(--cream);
    border: 1.5px solid transparent;
    padding: 16px 18px;
    cursor: pointer;
    transition: all 0.22s ease;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    user-select: none;
  }

  .value-card:hover { border-color: var(--terracotta); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
  .value-card.selected { border-color: var(--burgundy); background: #F5ECF0; }

  .value-rank-badge {
    width: 26px;
    height: 26px;
    min-width: 26px;
    border-radius: 50%;
    background: var(--burgundy);
    color: white;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
  }

  .value-icon-unselected {
    width: 26px;
    height: 26px;
    min-width: 26px;
    border: 1px solid var(--sand);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--muted);
  }

  .value-card-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--deep);
    line-height: 1.35;
    padding-top: 4px;
  }

  .value-card-questions {
    font-size: 11px;
    color: var(--muted);
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    line-height: 1.5;
    margin-top: 6px;
    font-weight: 300;
  }

  .value-card-questions li {
    list-style: none;
    padding: 2px 0;
  }

  .ranking-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .ranking-progress {
    font-size: 14px;
    color: var(--muted);
  }

  .ranking-progress strong {
    color: var(--burgundy);
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 400;
  }

  .ranking-hint {
    font-size: 12px;
    color: var(--sand);
    margin-top: 4px;
  }

  /* ---- EXPLORE ---- */
  .explore-screen {
    width: 100%;
    max-width: 680px;
    padding: 40px 24px 80px;
    animation: fadeUp 0.5s ease both;
  }

  .explore-progress-bar {
    width: 100%;
    height: 2px;
    background: var(--light-sand);
    margin-bottom: 36px;
  }

  .explore-progress-fill {
    height: 100%;
    background: var(--terracotta);
    transition: width 0.5s ease;
  }

  .explore-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  .explore-back {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--muted);
    font-family: 'Karla', sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
    padding: 0;
  }

  .explore-back:hover { color: var(--deep); }

  .explore-counter {
    font-size: 12px;
    color: var(--sand);
    letter-spacing: 1px;
  }

  .value-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 36px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--light-sand);
  }

  .value-big-icon {
    font-size: 44px;
    color: var(--terracotta);
    font-family: 'Cormorant Garamond', serif;
    line-height: 1;
    margin-top: 6px;
    opacity: 0.8;
  }

  .value-order-label {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 8px;
  }

  .value-big-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 300;
    color: var(--deep);
    line-height: 1.1;
  }

  .questions-label {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }

  .question-item {
    display: flex;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--light-sand);
  }

  .question-item:last-child { border-bottom: none; }

  .q-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    color: var(--sand);
    min-width: 22px;
    line-height: 1.4;
  }

  .q-text {
    font-size: 15px;
    line-height: 1.7;
    color: var(--deep);
    font-weight: 300;
  }

  .reflection-block {
    background: var(--cream);
    padding: 24px;
    margin: 28px 0 32px;
  }

  .reflection-label {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 14px;
  }

  .reflection-textarea {
    width: 100%;
    min-height: 120px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--sand);
    font-family: 'Karla', sans-serif;
    font-size: 15px;
    color: var(--deep);
    resize: none;
    outline: none;
    line-height: 1.75;
    font-weight: 300;
    padding-bottom: 8px;
  }

  .reflection-textarea::placeholder { color: var(--sand); font-style: italic; font-family: 'Cormorant Garamond', serif; font-size: 16px; }

  .explore-actions {
    display: flex;
    justify-content: flex-end;
  }

  /* ---- SUMMARY ---- */
  .summary-screen {
    width: 100%;
    max-width: 680px;
    padding: 48px 24px 80px;
    animation: fadeUp 0.7s ease both;
  }

  .summary-symbol {
    font-size: 36px;
    color: var(--terracotta);
    font-family: 'Cormorant Garamond', serif;
    margin-bottom: 20px;
    text-align: center;
  }

  .summary-item {
    display: flex;
    gap: 20px;
    padding: 22px 0;
    border-bottom: 1px solid var(--light-sand);
    animation: fadeUp 0.4s ease both;
  }

  .summary-rank {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px;
    font-weight: 300;
    color: var(--sand);
    min-width: 48px;
    line-height: 1;
    padding-top: 4px;
  }

  .summary-rank.top3 { color: var(--terracotta); }

  .summary-content { flex: 1; }

  .summary-value-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 400;
    color: var(--deep);
    margin-bottom: 6px;
  }

  .summary-reflection {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.7;
    font-style: italic;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
  }

  .summary-reflection.empty {
    color: var(--sand);
    font-size: 13px;
    font-family: 'Karla', sans-serif;
    font-style: normal;
  }

  .summary-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-top: 52px;
  }

  .restart-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Karla', sans-serif;
    font-size: 12px;
    color: var(--muted);
    text-decoration: underline;
    text-underline-offset: 3px;
    padding: 8px;
    letter-spacing: 1px;
    transition: color 0.2s;
  }

  .restart-btn:hover { color: var(--deep); }

  .copy-feedback {
    font-size: 12px;
    color: var(--sage);
    text-align: center;
    margin-top: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .copy-feedback.visible { opacity: 1; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 520px) {
    .values-grid { grid-template-columns: 1fr 1fr; }
    .intro { padding: 48px 24px; }
    .ranking-screen { padding: 36px 16px 60px; }
  }
`;

export default function App() {
  const [screen, setScreen] = useState(SCREENS.INTRO);
  const [ranking, setRanking] = useState([]);
  const [exploreIndex, setExploreIndex] = useState(0);
  const [reflections, setReflections] = useState({});
  const [copied, setCopied] = useState(false);

  const handleRankingToggle = (valueId) => {
    setRanking(prev => {
      if (prev.includes(valueId)) return prev.filter(id => id !== valueId);
      if (prev.length < 14) return [...prev, valueId];
      return prev;
    });
  };

  const currentValue = values.find(v => v.id === ranking[exploreIndex]);

  const handleNextExplore = () => {
    if (exploreIndex < ranking.length - 1) {
      setExploreIndex(i => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setScreen(SCREENS.SUMMARY);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    setScreen(SCREENS.INTRO);
    setRanking([]);
    setExploreIndex(0);
    setReflections({});
    setCopied(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = () => {
    const text = ranking.map((id, i) => {
      const v = values.find(v => v.id === id);
      const ref = reflections[id];
      return `${i + 1}. ${v.title}${ref ? `\n   "${ref}"` : ""}`;
    }).join("\n\n");
    const full = `✦ Meu Mapa de Valores\n${"─".repeat(32)}\n\n${text}\n\n${"─".repeat(32)}\nFeito em identificandomeusvalores.vercel.app`;
    navigator.clipboard?.writeText(full).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="app">
      <style>{styles}</style>

      {screen === SCREENS.INTRO && (
        <div className="intro">
          <div className="intro-eyebrow">Exercício de Autoconhecimento</div>
          <h1 className="intro-title">
            Identificando<br /><em>meus valores</em>
          </h1>
          <div className="intro-divider" />
          <p className="intro-body">
            Valores são como uma bússola — não apontam para o sucesso,
            mas para quem você realmente é. Este exercício convida você
            a olhar para dentro e descobrir o que mais importa na sua vida.
          </p>
          <p className="intro-body">
            Você vai <strong>priorizar 14 áreas da vida</strong>, refletir sobre cada
            uma com perguntas guiadas e, ao final, terá um retrato claro
            dos seus valores mais profundos.
          </p>
          <p className="intro-note">
            Baseado em técnicas de Terapia Cognitivo-Comportamental (Leahy, 2019)
          </p>
          <button className="btn-primary" onClick={() => setScreen(SCREENS.RANKING)}>
            Começar agora →
          </button>
        </div>
      )}

      {screen === SCREENS.RANKING && (
        <div className="ranking-screen">
          <div className="screen-header">
            <div className="screen-step">Passo 1 de 2</div>
            <h2 className="screen-title">Ordene por importância</h2>
            <p className="screen-sub">
              Toque nas áreas abaixo na ordem do que mais importa para você —
              do mais importante ao menos importante. Selecione todas as 14.
            </p>
          </div>

          <div className="values-grid">
            {values.map(v => {
              const rank = ranking.indexOf(v.id);
              const isSelected = rank >= 0;
              return (
                <div
                  key={v.id}
                  className={`value-card ${isSelected ? "selected" : ""}`}
                  onClick={() => handleRankingToggle(v.id)}
                >
                  {isSelected
                    ? <div className="value-rank-badge">{rank + 1}</div>
                    : <div className="value-icon-unselected">{v.icon}</div>
                  }
                  <div className="value-card-name">{v.title}</div>
                  <ul className="value-card-questions">
                    {v.questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="ranking-footer">
            <div>
              <div className="ranking-progress">
                <strong>{ranking.length}</strong> / 14 selecionados
              </div>
              <div className="ranking-hint">
                {ranking.length < 14 ? `Selecione mais ${14 - ranking.length}` : "Tudo pronto! ✦"}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-ghost" onClick={handleRestart}>← Voltar</button>
              <button
                className="btn-primary"
                disabled={ranking.length < 14}
                onClick={() => { setExploreIndex(0); setScreen(SCREENS.EXPLORE); window.scrollTo({ top: 0 }); }}
              >
                Continuar →
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === SCREENS.EXPLORE && currentValue && (
        <div className="explore-screen">
          <div className="explore-progress-bar">
            <div
              className="explore-progress-fill"
              style={{ width: `${((exploreIndex + 1) / ranking.length) * 100}%` }}
            />
          </div>

          <div className="explore-nav">
            <button className="explore-back" onClick={() => {
              if (exploreIndex === 0) setScreen(SCREENS.RANKING);
              else { setExploreIndex(i => i - 1); window.scrollTo({ top: 0 }); }
            }}>
              ← anterior
            </button>
            <span className="explore-counter">{exploreIndex + 1} / {ranking.length}</span>
          </div>

          <div className="value-header">
            <div className="value-big-icon">{currentValue.icon}</div>
            <div>
              <div className="value-order-label">Prioridade #{exploreIndex + 1}</div>
              <h2 className="value-big-title">{currentValue.title}</h2>
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div className="questions-label">Perguntas para refletir</div>
            {currentValue.questions.map((q, i) => (
              <div key={i} className="question-item">
                <div className="q-num">{i + 1}</div>
                <div className="q-text">{q}</div>
              </div>
            ))}
          </div>

          <div className="reflection-block">
            <div className="reflection-label">Minha reflexão</div>
            <textarea
              className="reflection-textarea"
              placeholder="Escreva livremente o que vier à mente…"
              value={reflections[currentValue.id] || ""}
              onChange={e => setReflections(prev => ({ ...prev, [currentValue.id]: e.target.value }))}
            />
          </div>

          <div className="explore-actions">
            <button className="btn-primary" onClick={handleNextExplore}>
              {exploreIndex < ranking.length - 1 ? "Próximo →" : "Ver meu mapa →"}
            </button>
          </div>
        </div>
      )}

      {screen === SCREENS.SUMMARY && (
        <div className="summary-screen">
          <div className="summary-symbol">◉</div>
          <div className="screen-header">
            <div className="screen-step">Seu mapa de valores</div>
            <h2 className="screen-title">O que mais importa para você</h2>
            <p className="screen-sub">
              Este é o retrato dos seus valores, do mais ao menos prioritário.
              Guarde, reflita, e volte a ele quando precisar de direção.
            </p>
          </div>

          {ranking.map((id, i) => {
            const v = values.find(v => v.id === id);
            const ref = reflections[id];
            return (
              <div key={id} className="summary-item" style={{ animationDelay: `${i * 0.04}s` }}>
                <div className={`summary-rank ${i < 3 ? "top3" : ""}`}>{i + 1}</div>
                <div className="summary-content">
                  <div className="summary-value-name">{v.icon} {v.title}</div>
                  {ref
                    ? <div className="summary-reflection">"{ref}"</div>
                    : <div className="summary-reflection empty">Sem reflexão registrada</div>
                  }
                </div>
              </div>
            );
          })}

          <div className="summary-actions">
            <button className="btn-primary" onClick={handleCopy}>
              {copied ? "Copiado! ✓" : "Copiar resultado"}
            </button>
            <button className="restart-btn" onClick={handleRestart}>
              Refazer exercício
            </button>
          </div>
          <div className={`copy-feedback ${copied ? "visible" : ""}`}>
            Resultado copiado para a área de transferência 📋
          </div>
        </div>
      )}
    </div>
  );
}
