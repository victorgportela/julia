import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import officeImage from './assets/escritorio.jpeg'
import heroImage from './assets/juliahero.jpeg'
import logoImage from './assets/logo.png'

const services = [
  {
    title: 'Assessoria em divórcios com alto impacto patrimonial',
    description:
      'Empresas, imóveis, investimentos, participações societárias e holdings familiares.',
  },
  {
    title: 'Planejamento pré-divórcio e proteção patrimonial',
    description:
      'Estratégia anterior ao ajuizamento, com redução de exposição e organização jurídica.',
  },
  {
    title: 'Acordos de separação com participações societárias',
    description:
      'Estruturação de partilha envolvendo empresas familiares, quotas e ativos empresariais.',
  },
  {
    title: 'Dissolução de união estável com repercussão patrimonial',
    description:
      'Análise de risco, enquadramento jurídico e estratégia de proteção patrimonial.',
  },
  {
    title: 'Contratos e pactos antenupciais para empresários',
    description:
      'Consultoria preventiva para regimes de bens, estruturas patrimoniais e preservação de ativos.',
  },
  {
    title: 'Reorganização de estruturas societárias em separação',
    description:
      'Adequação jurídica de holdings, participações e estruturas empresariais em cenários sensíveis.',
  },
  {
    title: 'Negociações extrajudiciais de divórcio e partilha',
    description:
      'Condução estratégica de acordos com menor exposição e maior previsibilidade.',
  },
  {
    title: 'Guarda, alimentos e regulamentação de convivência',
    description:
      'Definição técnica de temas familiares conexos com equilíbrio, clareza e segurança jurídica.',
  },
  {
    title: 'Planejamento patrimonial e sucessório',
    description:
      'Organização de ativos e estruturas familiares com atenção à continuidade e ao legado.',
  },
  {
    title: 'Acordos pré-nupciais',
    description:
      'Instrumentos preventivos para alinhamento patrimonial e proteção de estruturas relevantes.',
  },
]

const faqItems = [
  {
    question: 'Tenho empresa e estou me separando. Como proteger minhas participações societárias?',
    answer:
      'Cada caso exige análise do regime de bens, da origem dos ativos e da estrutura societária envolvida. A atuação estratégica começa com o mapeamento patrimonial e a definição do caminho jurídico mais adequado para reduzir exposição e preservar a continuidade empresarial.',
  },
  {
    question:
      'Qual a diferença entre contratar um advogado de família comum e um especialista em divórcio patrimonial?',
    answer:
      'Quando a separação envolve patrimônio, empresas ou estruturas familiares já consolidadas, a condução precisa ir além do litígio familiar tradicional. É necessário compreender estruturas societárias, riscos de partilha, impactos na imagem do cliente e decisões que repercutem no médio e no longo prazo.',
  },
  {
    question: 'O que acontece com a holding familiar em caso de divórcio?',
    answer:
      'A existência de holding não elimina, por si só, discussões patrimoniais. A avaliação depende da composição societária, da forma de integralização, do regime de bens e da documentação existente. A estratégia jurídica deve ser construída a partir dessa arquitetura.',
  },
  {
    question: 'Atende clientes fora de Pelotas?',
    answer:
      'Sim. O escritório atende presencialmente em Pelotas e região, além de conduzir casos complexos de forma online para outras cidades e estados, mediante análise prévia.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'O primeiro contato é reservado e orientado à compreensão do contexto patrimonial, familiar e empresarial. A partir desse diagnóstico inicial, avaliamos a viabilidade da atuação e o desenho estratégico do caso.',
  },
  {
    question: 'O escritório aceita casos em que o casal quer um acordo?',
    answer:
      'Sim. Quando há espaço para composição, a negociação extrajudicial pode ser o caminho mais eficiente para preservar patrimônio, confidencialidade e previsibilidade, sem abrir mão do rigor técnico.',
  },
  {
    question: 'O que é o planejamento pré-divórcio e quando devo buscá-lo?',
    answer:
      'É a fase de análise e organização anterior ao conflito formalizado. Ele deve ser buscado assim que a ruptura se torna uma possibilidade concreta, especialmente quando existem empresas, imóveis, investimentos ou exposição reputacional relevante.',
  },
]

const testimonials = [
  {
    initials: 'AR',
    quote:
      'O diferencial esteve na leitura patrimonial do caso. Houve firmeza técnica, discrição e uma condução muito mais estratégica do que litigiosa.',
    signature: 'Empresário, Porto Alegre/RS',
  },
  {
    initials: 'MS',
    quote:
      'A atuação trouxe organização num momento sensível. O processo foi conduzido com clareza, reserva e atenção real às estruturas envolvidas.',
    signature: 'Executiva, Pelotas/RS',
  },
  {
    initials: 'LC',
    quote:
      'Buscávamos um acordo sem exposição desnecessária. A negociação foi precisa e preservou temas patrimoniais que exigiam cuidado.',
    signature: 'Profissional liberal, Rio Grande/RS',
  },
]

const qualificationItems = [
  {
    title: 'Empresários e sócios',
    text: 'Com empresas, holdings ou participações societárias em risco na separação.',
  },
  {
    title: 'Executivos e gestores',
    text: 'Com remuneração variável, bônus, stock options ou participações a proteger.',
  },
  {
    title: 'Profissionais liberais',
    text: 'Médicos, advogados e engenheiros com patrimônio imobiliário ou empresarial relevante.',
  },
]

const approachSteps = [
  {
    number: '1',
    title: 'Diagnóstico patrimonial completo',
    text: 'Mapeamento de empresas, imóveis, investimentos e pontos de exposição.',
  },
  {
    number: '2',
    title: 'Estratégia antes do processo',
    text: 'Planejamento para reduzir riscos e proteger estruturas com antecedência.',
  },
  {
    number: '3',
    title: 'Condução técnica e discreta',
    text: 'Rigor jurídico com atenção contínua à imagem e ao patrimônio do cliente.',
  },
  {
    number: '4',
    title: 'Visão de longo prazo',
    text: 'Acordos e decisões orientados à preservação do legado familiar e empresarial.',
  },
]

const officeHighlights = [
  'Postura boutique: poucos casos, dedicação total.',
  'Discrição e sigilo absoluto como pilares do atendimento.',
  'Estratégia patrimonial além do processo jurídico.',
  'Análise de risco, estrutura societária e exposição do cliente.',
  'Atendimento consultivo desde o primeiro contato.',
  'Linguagem clara com sofisticação jurídica adequada ao seu perfil.',
]

const contactOptions = [
  'Divórcio com impacto patrimonial',
  'Planejamento pré-divórcio',
  'Pacto antenupcial',
  'Guarda e alimentos',
  'Planejamento patrimonial e sucessório',
  'Outro',
]

const appStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');

  :root {
    --navy: #1B2A4A;
    --beige: #E8DFD0;
    --beige-bg: #F7F4F0;
    --gold-line: #B8A98A;
    --white: #FFFFFF;
    --text: #2C2C2C;
    --text-light: #6B6B6B;
    --container: 1180px;
    --shadow-soft: 0 18px 50px rgba(27, 42, 74, 0.08);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    background: var(--white);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  .page-shell {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(232, 223, 208, 0.45), transparent 28%),
      linear-gradient(180deg, rgba(247, 244, 240, 0.45) 0%, rgba(255, 255, 255, 0.88) 18%, #fff 100%);
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(184, 169, 138, 0.8);
  }

  .header-inner,
  .section-inner,
  .footer-inner {
    width: min(calc(100% - 2rem), var(--container));
    margin: 0 auto;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-height: 82px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.95rem;
    min-width: 0;
  }

  .brand-mark {
    width: 56px;
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .brand-mark img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .brand-text {
    min-width: 0;
  }

  .brand-title {
    margin: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.55rem;
    color: var(--navy);
    font-weight: 600;
    line-height: 1;
  }

  .brand-subtitle {
    margin: 0.2rem 0 0;
    color: var(--text-light);
    font-size: 0.76rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .nav-toggle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgba(27, 42, 74, 0.12);
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--navy);
    cursor: pointer;
  }

  .nav-toggle span,
  .nav-toggle::before,
  .nav-toggle::after {
    content: '';
    display: block;
    width: 18px;
    height: 1.5px;
    background: currentColor;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .nav-toggle {
    position: relative;
  }

  .nav-toggle::before {
    position: absolute;
    transform: translateY(-6px);
  }

  .nav-toggle::after {
    position: absolute;
    transform: translateY(6px);
  }

  .nav-toggle.is-open span {
    opacity: 0;
  }

  .nav-toggle.is-open::before {
    transform: rotate(45deg);
  }

  .nav-toggle.is-open::after {
    transform: rotate(-45deg);
  }

  .site-nav {
    position: absolute;
    inset: calc(100% + 1px) 1rem auto;
    padding: 1rem;
    border: 1px solid rgba(184, 169, 138, 0.5);
    background: rgba(255, 255, 255, 0.98);
    display: grid;
    gap: 0.5rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  .site-nav.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .site-nav a {
    color: var(--navy);
    font-size: 0.94rem;
  }

  .ghost-button,
  .primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 1.45rem;
    border-radius: 999px;
    border: 1px solid var(--navy);
    transition: background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
    cursor: pointer;
  }

  .primary-button {
    background: var(--navy);
    color: var(--white);
  }

  .ghost-button {
    background: transparent;
    color: var(--navy);
  }

  .ghost-button:hover,
  .primary-button:hover {
    transform: translateY(-1px);
  }

  .desktop-contact {
    display: none;
  }

  section {
    position: relative;
  }

  .hero-section {
    padding: 4.5rem 0 3.5rem;
  }

  .hero-grid,
  .office-grid,
  .contact-grid {
    display: grid;
    gap: 2rem;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: var(--gold-line);
    font-size: 0.76rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .hero-title,
  .section-title,
  .office-highlight,
  .qualification-title {
    font-family: 'Cormorant Garamond', serif;
    color: var(--navy);
    font-weight: 600;
    line-height: 0.98;
    margin: 0;
    text-wrap: balance;
  }

  .hero-title {
    font-size: clamp(3rem, 7vw, 5.6rem);
    max-width: 10ch;
  }

  .hero-text,
  .section-intro,
  .body-text,
  .approach-text,
  .service-description,
  .testimonial-quote,
  .contact-copy,
  .map-caption,
  .footer-note,
  .faq-answer {
    font-weight: 300;
    color: var(--text-light);
    line-height: 1.8;
  }

  .hero-text {
    margin: 1.5rem 0 0;
    max-width: 36rem;
    font-size: 1.05rem;
  }

  .hero-divider,
  .section-divider {
    width: 112px;
    height: 1px;
    background: rgba(184, 169, 138, 0.95);
  }

  .hero-divider {
    margin: 1.8rem 0 1.6rem;
  }

  .hero-media,
  .office-photo,
  .office-photo-secondary {
    position: relative;
    min-height: 420px;
    overflow: hidden;
  }

  .hero-portrait,
  .office-photo-card,
  .office-photo-secondary-card {
    position: relative;
    height: 100%;
    min-height: 420px;
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(27, 42, 74, 0.08), rgba(27, 42, 74, 0.3)),
      linear-gradient(135deg, #d8ccbc 0%, #f1e9de 48%, #cfc1af 100%);
    box-shadow: var(--shadow-soft);
  }

  .hero-portrait img,
  .office-photo-card img,
  .office-photo-secondary-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-portrait::before,
  .office-photo-card::before,
  .office-photo-secondary-card::before {
    content: '';
    position: absolute;
    inset: 1.15rem;
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 22px;
  }

  .portrait-caption,
  .photo-caption {
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 1.6rem;
    padding: 1.15rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(10, 14, 24, 0.42), rgba(10, 14, 24, 0.58));
    backdrop-filter: blur(8px);
    color: rgba(255, 255, 255, 0.94);
  }

  .portrait-caption strong,
  .photo-caption strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.65rem;
    font-weight: 500;
  }

  .portrait-caption span,
  .photo-caption span {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.82);
  }

  .section-block {
    padding: 5.5rem 0;
  }

  .navy-section {
    background: var(--navy);
  }

  .navy-section .section-title,
  .navy-section .qualification-title,
  .navy-section .section-intro,
  .navy-section .testimonial-quote,
  .navy-section .testimonial-signature,
  .navy-section .note-top,
  .navy-section .qualification-text {
    color: var(--white);
  }

  .navy-section .qualification-card {
    border-color: rgba(232, 223, 208, 0.25);
    background: rgba(255, 255, 255, 0.03);
  }

  .qualification-title {
    font-size: clamp(2.3rem, 6vw, 4rem);
    max-width: 100%;
    color: var(--white);
  }

  .title-break {
    display: block;
  }

  .section-title {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    margin-bottom: 1rem;
  }

  .section-intro {
    max-width: 44rem;
    font-size: 1rem;
  }

  .qualification-grid,
  .approach-grid,
  .testimonials-grid {
    display: grid;
    gap: 1rem;
    margin-top: 2.4rem;
  }

  .qualification-card,
  .approach-card,
  .testimonial-card {
    padding: 1.7rem;
    border: 1px solid rgba(184, 169, 138, 0.24);
    border-radius: 24px;
  }

  .qualification-card h3,
  .approach-card h3,
  .service-title,
  .faq-question,
  .contact-panel h3 {
    margin: 0;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: var(--navy);
  }

  .qualification-card h3 {
    color: var(--beige);
    font-size: 1.85rem;
    margin-bottom: 0.65rem;
  }

  .qualification-text {
    margin: 0;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.75;
  }

  .qualification-footer {
    margin: 2.4rem 0 0;
    color: var(--beige);
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.45rem;
  }

  .office-grid {
    align-items: start;
  }

  .office-highlight {
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 1.75rem 0 1.2rem;
    max-width: 22ch;
  }

  .body-text {
    margin: 0 0 1rem;
    max-width: 40rem;
  }

  .highlights-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;
    display: grid;
    gap: 0.8rem;
  }

  .highlights-list li {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(184, 169, 138, 0.32);
    color: var(--text);
  }

  .beige-section {
    background: var(--beige-bg);
  }

  .approach-grid {
    margin-top: 2.2rem;
  }

  .approach-card {
    background: rgba(255, 255, 255, 0.65);
  }

  .approach-number {
    display: inline-block;
    margin-bottom: 0.9rem;
    color: var(--gold-line);
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.15rem;
    font-weight: 600;
  }

  .approach-card h3 {
    font-size: 1.75rem;
    margin-bottom: 0.6rem;
  }

  .approach-text {
    margin: 0;
  }

  .services-grid {
    display: grid;
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .service-item {
    height: 100%;
    padding: 1.5rem;
    border: 1px solid rgba(184, 169, 138, 0.42);
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 244, 240, 0.92));
    box-shadow: 0 12px 28px rgba(27, 42, 74, 0.05);
  }

  .service-title {
    font-size: 1.8rem;
    margin-bottom: 0.65rem;
  }

  .service-description {
    margin: 0;
    max-width: none;
  }

  .service-note {
    margin-top: 1.4rem;
    color: var(--text-light);
    font-style: italic;
  }

  .note-top {
    display: inline-block;
    margin-bottom: 1rem;
    color: rgba(232, 223, 208, 0.82);
    font-size: 0.96rem;
  }

  .testimonials-grid {
    margin-top: 2rem;
  }

  .testimonial-card {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(232, 223, 208, 0.22);
  }

  .testimonial-header {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 1rem;
  }

  .testimonial-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(232, 223, 208, 0.12);
    color: var(--beige);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 600;
    border: 1px solid rgba(232, 223, 208, 0.25);
  }

  .testimonial-quote {
    margin: 0;
    color: var(--beige);
    font-size: 1rem;
  }

  .testimonial-signature {
    margin-top: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.92rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .faq-list {
    margin-top: 2rem;
    display: grid;
    gap: 0.9rem;
  }

  .faq-item {
    border-bottom: 1px solid rgba(184, 169, 138, 0.55);
  }

  .faq-trigger {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 1.1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-align: left;
    cursor: pointer;
  }

  .faq-question {
    font-size: 1.5rem;
  }

  .faq-icon {
    flex: none;
    color: var(--navy);
    font-size: 1.3rem;
    line-height: 1;
  }

  .faq-answer-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.24s ease;
  }

  .faq-answer-wrap.is-open {
    max-height: 260px;
  }

  .faq-answer {
    margin: 0 0 1.3rem;
    max-width: 52rem;
  }

  .contact-panel,
  .contact-details {
    border: 1px solid rgba(184, 169, 138, 0.45);
    border-radius: 28px;
    padding: 1.6rem;
    background: rgba(255, 255, 255, 0.92);
  }

  .contact-form {
    display: grid;
    gap: 1rem;
    margin-top: 1.7rem;
  }

  .field-grid {
    display: grid;
    gap: 1rem;
  }

  .field {
    display: grid;
    gap: 0.45rem;
  }

  .field span {
    color: var(--navy);
    font-size: 0.92rem;
  }

  .field input,
  .field select,
  .field textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(27, 42, 74, 0.16);
    border-radius: 18px;
    padding: 0.95rem 1rem;
    background: var(--white);
    color: var(--text);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .field input:focus,
  .field select:focus,
  .field textarea:focus {
    border-color: rgba(27, 42, 74, 0.4);
    box-shadow: 0 0 0 4px rgba(27, 42, 74, 0.05);
  }

  .field textarea {
    min-height: 140px;
    resize: vertical;
  }

  .field-error {
    color: #8b3f3f;
    font-size: 0.88rem;
  }

  .form-status {
    margin: 0;
    color: var(--navy);
    font-size: 0.95rem;
  }

  .contact-copy {
    margin: 0.4rem 0 0;
  }

  .contact-stack {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }

  .contact-item strong {
    display: block;
    color: var(--navy);
    margin-bottom: 0.2rem;
    font-size: 0.86rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .contact-item p,
  .contact-item a,
  .contact-note {
    margin: 0;
    color: var(--text-light);
    line-height: 1.8;
  }

  .contact-note {
    margin-top: 1.5rem;
    font-style: italic;
  }

  .map-frame {
    overflow: hidden;
    border-radius: 28px;
    border: 1px solid rgba(184, 169, 138, 0.45);
    margin-top: 1.8rem;
  }

  .map-frame iframe {
    display: block;
    width: 100%;
    min-height: 380px;
    border: 0;
    filter: grayscale(100%) saturate(0.55) contrast(1.02);
  }

  .map-caption {
    margin-top: 1rem;
  }

  .site-footer {
    background: var(--navy);
    color: rgba(255, 255, 255, 0.8);
    padding: 3rem 0 2.6rem;
  }

  .footer-inner {
    display: grid;
    gap: 1.5rem;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .footer-brand .brand-title,
  .footer-brand .brand-subtitle,
  .footer-nav a,
  .footer-contact a,
  .footer-contact p {
    color: rgba(255, 255, 255, 0.85);
  }

  .footer-nav,
  .footer-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.4rem;
  }

  .footer-note {
    color: rgba(255, 255, 255, 0.65);
    max-width: 56rem;
  }

  .floating-whatsapp {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 45;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: var(--navy);
    color: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 35px rgba(27, 42, 74, 0.2);
    opacity: 0;
    pointer-events: none;
    transform: translateY(16px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .floating-whatsapp.is-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .fade-section {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .fade-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (min-width: 768px) {
    .hero-grid,
    .office-grid,
    .contact-grid {
      grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
      gap: 3rem;
    }

    .qualification-grid,
    .approach-grid,
    .testimonials-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .approach-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .field-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .qualification-title {
      max-width: 30ch;
    }

    .office-highlight {
      max-width: 20ch;
    }
  }

  @media (min-width: 1024px) {
    .nav-toggle {
      display: none;
    }

    .site-nav {
      position: static;
      opacity: 1;
      pointer-events: auto;
      transform: none;
      border: 0;
      padding: 0;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .desktop-contact {
      display: inline-flex;
    }

    .site-nav .mobile-contact {
      display: none;
    }

    .qualification-title {
      max-width: 34ch;
    }

    .office-highlight {
      max-width: 26ch;
    }
  }

  @media (max-width: 767px) {
    .hero-section {
      padding-top: 3.2rem;
    }

    .hero-portrait,
    .office-photo-card,
    .office-photo-secondary-card {
      min-height: 360px;
    }

    .section-block {
      padding: 4.5rem 0;
    }
  }
`

type FormData = {
  name: string
  phone: string
  email: string
  situation: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  situation: contactOptions[0],
  message: '',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [showWhatsapp, setShowWhatsapp] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formStatus, setFormStatus] = useState('')

  const whatsappLink = useMemo(
    () =>
      'https://wa.me/5553991660883?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20conversa%20inicial.',
    [],
  )

  useEffect(() => {
    document.title = 'Julia Nunes Advocacia | Divórcio Patrimonial | Pelotas/RS'

    const metaDefinitions = [
      {
        selector: 'meta[name="description"]',
        attribute: 'name',
        attributeValue: 'description',
        content:
          'Advocacia estratégica especializada em divórcios com impacto patrimonial para empresários e executivos. Pelotas/RS e atendimento online.',
      },
      {
        selector: 'meta[property="og:title"]',
        attribute: 'property',
        attributeValue: 'og:title',
        content: 'Julia Nunes Advocacia | Divórcio Patrimonial | Pelotas/RS',
      },
      {
        selector: 'meta[property="og:description"]',
        attribute: 'property',
        attributeValue: 'og:description',
        content:
          'Advocacia estratégica especializada em divórcios com impacto patrimonial para empresários e executivos. Pelotas/RS e atendimento online.',
      },
      {
        selector: 'meta[property="og:image"]',
        attribute: 'property',
        attributeValue: 'og:image',
        content: 'https://julianunesadvocacia.com/og-image-placeholder.jpg',
      },
    ]

    metaDefinitions.forEach(({ selector, attribute, attributeValue, content }) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, attributeValue)
        document.head.appendChild(element)
      }

      element.content = content
    })
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-fade]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setShowWhatsapp(window.scrollY > 300)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const validateForm = () => {
    const nextErrors: FormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Informe seu nome.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Informe um telefone para contato.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Informe um e-mail válido.'
    }

    if (!formData.situation) {
      nextErrors.situation = 'Selecione o tipo de situação.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      setFormStatus('Revise os campos indicados antes de enviar.')
      return
    }

    setFormStatus('Mensagem pronta para envio. Integre este formulário ao canal de atendimento preferido.')
    setErrors({})
    setFormData(initialForm)
  }

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Escritório', href: '#escritorio' },
    { label: 'Para Quem', href: '#para-quem' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <div className="page-shell">
      <style>{appStyles}</style>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Julia Nunes Advocacia">
            {/* SUBSTITUIR PELO LOGO REAL — arquivo enviado por e-mail */}
            <div className="brand-mark" aria-hidden="true">
              <img src={logoImage} alt="" />
            </div>
            <div className="brand-text">
              <p className="brand-title">Julia Nunes Advocacia</p>
              <p className="brand-subtitle">Direito de Família Estratégico</p>
            </div>
          </a>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
          </button>

          <nav id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="ghost-button mobile-contact" href="#contato" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </nav>

          <a className="ghost-button desktop-contact" href="#contato">
            Contato
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section fade-section" data-fade>
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Julia Nunes Advocacia • Pelotas/RS</p>
              <h1 className="hero-title">Advocacia estratégica para quem tem muito a proteger.</h1>
              <p className="hero-text">
                Assessoria jurídica em divórcios e reorganização patrimonial para empresários,
                executivos e profissionais que buscam condução cuidadosa, discreta e bem
                estruturada.
              </p>
              <div className="hero-divider" aria-hidden="true" />
              <div>
                <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
                  Agendar conversa inicial
                </a>
              </div>
            </div>

            <div className="hero-media">
              {/* SUBSTITUIR PELAS FOTOS AUTORAIS DA DRA. JULIA NUNES */}
              <div className="hero-portrait">
                <img src={heroImage} alt="Retrato profissional da Dra. Julia Nunes" />
                <div className="portrait-caption">
                  <strong>Atuação reservada e estratégica</strong>
                  <span>Direito de família com atenção patrimonial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="para-quem" className="section-block navy-section fade-section" data-fade>
          <div className="section-inner">
            <h2 className="qualification-title">
              Este escritório é para
              <span className="title-break">um perfil específico de cliente.</span>
            </h2>
            <p className="section-intro">
              Atendemos com especial atenção empresários, sócios, executivos e profissionais
              liberais que passam por uma separação e buscam condução jurídica cuidadosa em
              questões familiares e patrimoniais.
            </p>

            <div className="qualification-grid">
              {qualificationItems.map((item) => (
                <article key={item.title} className="qualification-card">
                  <h3>{item.title}</h3>
                  <p className="qualification-text">{item.text}</p>
                </article>
              ))}
            </div>

            <p className="qualification-footer">
              Número reduzido de casos. Condução profunda e individualizada.
            </p>
          </div>
        </section>

        <section id="escritorio" className="section-block fade-section" data-fade>
          <div className="section-inner office-grid">
            <div>
              <p className="eyebrow">O Escritório</p>
              <h2 className="section-title">Estratégia jurídica com discrição, rigor e visão patrimonial.</h2>
              <p className="body-text">
                A atuação do escritório parte de uma premissa clara: processos de reorganização
                familiar com repercussão patrimonial relevante não devem ser conduzidos como demandas
                ordinárias. Exigem leitura técnica, domínio de estrutura societária e postura
                consultiva desde o início.
              </p>
              <p className="body-text">
                Nossa missão é conduzir processos de reorganização patrimonial e familiar com rigor
                técnico, discrição absoluta e visão estratégica de longo prazo, para que o cliente
                atravesse esse processo com seu legado preservado no plano econômico e na sua imagem.
              </p>
              <p className="office-highlight">
                Mais do que conduzir um divórcio, preservamos estruturas patrimoniais e empresariais.
              </p>
              <ul className="highlights-list">
                {officeHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="office-photo">
              {/* SUBSTITUIR PELAS FOTOS AUTORAIS DA DRA. JULIA NUNES */}
              <div className="office-photo-card">
                <img src={officeImage} alt="Ambiente do escritório Julia Nunes Advocacia" />
                <div className="photo-caption">
                  <strong>Atendimento consultivo</strong>
                  <span>Presencial em Pelotas e online para casos complexos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block beige-section fade-section" data-fade>
          <div className="section-inner">
            <p className="eyebrow">Como Conduzimos os Casos</p>
            <h2 className="section-title">Nossa abordagem</h2>

            <div className="approach-grid">
              {approachSteps.map((step) => (
                <article key={step.number} className="approach-card">
                  <span className="approach-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p className="approach-text">{step.text}</p>
                </article>
              ))}
            </div>

            <div className="section-divider" style={{ marginTop: '2.2rem' }} aria-hidden="true" />
          </div>
        </section>

        <section id="servicos" className="section-block fade-section" data-fade>
          <div className="section-inner">
            <p className="eyebrow">Atuação Estratégica</p>
            <h2 className="section-title">Áreas de Atuação</h2>
            <p className="section-intro">
              O escritório estrutura sua atuação a partir do impacto patrimonial, societário e
              familiar de cada caso, com abordagem técnica e individualizada.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-item">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </article>
              ))}
            </div>

            <p className="service-note">
              O atendimento é consultivo desde o primeiro contato. Não trabalhamos com volume,
              trabalhamos com profundidade.
            </p>
          </div>
        </section>

        <section className="section-block navy-section fade-section" data-fade>
          <div className="section-inner">
            <p className="note-top">Identidades preservadas a pedido dos clientes.</p>
            <h2 className="section-title">O que dizem nossos clientes</h2>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.initials} className="testimonial-card">
                  {/* EDITAR COM DEPOIMENTOS REAIS — preservar identidade dos clientes */}
                  <div className="testimonial-header">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {testimonial.initials}
                    </div>
                  </div>
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <p className="testimonial-signature">{testimonial.signature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block beige-section fade-section" data-fade>
          <div className="section-inner">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Perguntas frequentes</h2>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index

                return (
                  <article key={item.question} className="faq-item">
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="faq-question">{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div className={`faq-answer-wrap ${isOpen ? 'is-open' : ''}`}>
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="section-block fade-section" data-fade>
          <div className="section-inner">
            <p className="eyebrow">Contato</p>
            <h2 className="section-title">Entre em contato</h2>
            <p className="section-intro">
              O primeiro contato é confidencial. Responderemos com discrição e agilidade.
            </p>

            <div className="contact-grid" style={{ marginTop: '2rem' }}>
              <div className="contact-panel">
                <h3>Envie sua mensagem</h3>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="field-grid">
                    <label className="field">
                      <span>Nome</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) => handleFieldChange('name', event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name && <small className="field-error">{errors.name}</small>}
                    </label>

                    <label className="field">
                      <span>Telefone</span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(event) => handleFieldChange('phone', event.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone && <small className="field-error">{errors.phone}</small>}
                    </label>

                    <label className="field">
                      <span>E-mail</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) => handleFieldChange('email', event.target.value)}
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email && <small className="field-error">{errors.email}</small>}
                    </label>
                  </div>

                  <label className="field">
                    <span>Tipo de situação</span>
                    <select
                      value={formData.situation}
                      onChange={(event) => handleFieldChange('situation', event.target.value)}
                      aria-invalid={Boolean(errors.situation)}
                    >
                      {contactOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.situation && <small className="field-error">{errors.situation}</small>}
                  </label>

                  <label className="field">
                    <span>Mensagem</span>
                    <textarea
                      value={formData.message}
                      onChange={(event) => handleFieldChange('message', event.target.value)}
                    />
                  </label>

                  <div>
                    <button type="submit" className="primary-button">
                      Enviar
                    </button>
                  </div>

                  {formStatus && <p className="form-status">{formStatus}</p>}
                </form>
              </div>

              <aside className="contact-details">
                <h3>Contato direto</h3>
                <p className="contact-copy">
                  Atendimento reservado para Pelotas, Capão do Leão, Rio Grande, Jaguarão e região,
                  com possibilidade de atuação online em outros municípios e estados.
                </p>

                <div className="contact-stack">
                  <div className="contact-item">
                    <strong>WhatsApp</strong>
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      (53) 99166-0883
                    </a>
                  </div>
                  <div className="contact-item">
                    <strong>E-mail</strong>
                    <a href="mailto:contato@julianunesadvocacia.com">
                      contato@julianunesadvocacia.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <strong>Instagram</strong>
                    <a href="https://instagram.com/julianunesadv" target="_blank" rel="noreferrer">
                      @julianunesadv
                    </a>
                  </div>
                  <div className="contact-item">
                    <strong>Localização</strong>
                    <p>Pelotas/RS — Atendimento online disponível</p>
                  </div>
                </div>

                <p className="contact-note">
                  Todas as informações compartilhadas são tratadas com sigilo absoluto.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-block beige-section fade-section" data-fade>
          <div className="section-inner">
            <p className="eyebrow">Presença Regional</p>
            <h2 className="section-title">Pelotas/RS</h2>

            <div className="map-frame">
              <iframe
                title="Mapa de Pelotas/RS"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Pelotas%2C%20RS&z=12&output=embed"
              />
            </div>

            <p className="map-caption">
              Atendemos presencialmente em Pelotas e região. Para outras cidades, atendimento online
              mediante análise.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand-mark" aria-hidden="true">
              <img src={logoImage} alt="" />
            </div>
            <div className="brand-text">
              <p className="brand-title">Julia Nunes Advocacia</p>
              <p className="brand-subtitle">Pelotas/RS</p>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <a href="https://instagram.com/julianunesadv" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="mailto:contato@julianunesadvocacia.com">contato@julianunesadvocacia.com</a>
            <p>(53) 99166-0883</p>
          </div>

          <p className="footer-note">
            Este site tem caráter meramente informativo e não constitui publicidade nos termos do
            Código de Ética e Disciplina da OAB.
          </p>
          <p className="footer-note">© 2025 Julia Nunes Advocacia. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        className={`floating-whatsapp ${showWhatsapp ? 'is-visible' : ''}`}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M19.05 4.93A9.9 9.9 0 0 0 12.02 2C6.53 2 2.08 6.45 2.08 11.93c0 1.76.46 3.49 1.33 5.02L2 22l5.19-1.36a9.9 9.9 0 0 0 4.83 1.23h.01c5.48 0 9.93-4.45 9.93-9.94a9.86 9.86 0 0 0-2.91-7ZM12.03 20.2h-.01a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.22 8.22 0 0 1-1.26-4.43c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 0 1 2.42 5.84c0 4.54-3.7 8.24-8.25 8.24Zm4.52-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.24-.64.8-.78.97-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.97-1.22-.73-.65-1.22-1.46-1.36-1.7-.14-.24-.02-.38.1-.5.1-.1.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.41h-.48c-.16 0-.43.06-.66.31-.23.24-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.16 1.75 2.68 4.24 3.75.59.25 1.06.4 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.17-.06-.1-.22-.16-.46-.28Z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  )
}

export default App
