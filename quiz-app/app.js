// Questions extracted from practice-questions for each module
// Shape: { question: string, choices: string[], answerIndex: number, explanation?: string }

const MOD1_QUESTIONS = [
  {
    question: "Which Azure AI service provides access to GPT and DALL-E within a securable cloud service?",
    choices: [
      "Azure AI Language",
      "Azure AI Vision",
      "Azure OpenAI in Foundry Models",
      "Azure AI Translator",
    ],
    answerIndex: 2,
    explanation:
      "Provides enterprise-grade access to GPT and DALL·E via Azure with security, compliance, and scalable managed endpoints.",
  },
  {
    question: "What are the two types of Azure AI Foundry projects?",
    choices: [
      "Foundry projects and Hub-based projects",
      "Standard projects and Premium projects",
      "Basic projects and Advanced projects",
      "Individual projects and Multi-service projects",
    ],
    answerIndex: 0,
    explanation:
      "Foundry projects link to an Azure AI Foundry resource; hub-based projects add managed compute, Prompt Flow, storage, and Key Vault.",
  },
  {
    question: "Which is NOT included in the Azure AI Services resource type?",
    choices: [
      "Azure AI Speech",
      "Azure AI Language",
      "Azure AI Translator",
      "Azure AI Content Understanding",
    ],
    answerIndex: 3,
    explanation:
      "Azure AI Services multi-service resource includes Speech, Language, Translator, Vision, Face, Custom Vision, and Document Intelligence—NOT Content Understanding.",
  },
  {
    question: "Primary purpose of Azure AI Foundry Content Safety?",
    choices: [
      "Provide computer vision capabilities",
      "Enable speech-to-text and text-to-speech",
      "Flag potentially offensive text and images",
      "Translate text between languages",
    ],
    answerIndex: 2,
    explanation:
      "Content Safety detects and classifies unsafe content (text/images) to help filter or block harmful material.",
  },
  {
    question: "Which Responsible AI principle ensures no unfair bias across groups?",
    choices: ["Reliability and safety", "Privacy and security", "Fairness", "Transparency"],
    answerIndex: 2,
    explanation:
      "Fairness requires representative data and subgroup evaluation to avoid disadvantaging protected groups.",
  },
  {
    question: "Main difference between LLMs and SLMs?",
    choices: [
      "LLMs only in Azure, SLMs open source",
      "LLMs have many parameters and large data; SLMs optimized and lighter",
      "LLMs text only; SLMs multimodal",
      "LLMs free; SLMs paid",
    ],
    answerIndex: 1,
    explanation:
      "LLMs are general-purpose, large and compute-heavy; SLMs are smaller, task-focused, with lower latency and cost.",
  },
  {
    question: "Which service creates vector indexes to ground prompts?",
    choices: [
      "Azure AI Search",
      "Azure AI Document Intelligence",
      "Azure AI Content Understanding",
      "Azure AI Custom Vision",
    ],
    answerIndex: 0,
    explanation:
      "Azure AI Search builds vector/semantic indexes often used to ground LLM prompts in RAG solutions.",
  },
  {
    question: "Key characteristic of agents in AI apps?",
    choices: [
      "Only process text",
      "Autonomously act based on input or situations",
      "Limited to computer vision",
      "Require constant supervision",
    ],
    answerIndex: 1,
    explanation:
      "Agents operate with goals, tools, and memory to act beyond simple Q&A and can take actions autonomously.",
  },
  {
    question: "Advantage of a multi-service Azure AI resource?",
    choices: [
      "Better performance for all services",
      "Easier to manage multiple AI capabilities",
      "Lower cost across services",
      "Additional unique features",
    ],
    answerIndex: 1,
    explanation:
      "A single multi-service resource centralizes multiple services behind one endpoint and set of keys.",
  },
  {
    question: "Primary purpose of Azure AI Foundry SDK?",
    choices: [
      "Visual interface for AI development",
      "Programmatic access to projects and resources",
      "Replace other AI service SDKs",
      "Provide prebuilt AI models",
    ],
    answerIndex: 1,
    explanation:
      "The SDK connects to projects and resource connections to access models, agents, and services in code.",
  },
];

const MOD2_QUESTIONS = [
  {
    question: "Why deploy a language model to an endpoint in Azure AI Foundry?",
    choices: [
      "To reduce the model size",
      "To convert the model to a different architecture",
      "To expose the model via a secure API URL for client apps",
      "To automatically fine-tune the model",
    ],
    answerIndex: 2,
    explanation:
      "An endpoint provides a unique URL where apps send requests and receive responses from the deployed model.",
  },
  {
    question: "Which catalogs can you use to discover models when exploring options for your app?",
    choices: [
      "Only Hugging Face",
      "Only GitHub",
      "Only Azure AI Foundry",
      "Hugging Face, GitHub, and Azure AI Foundry",
    ],
    answerIndex: 3,
    explanation:
      "All three are referenced; Azure AI Foundry offers the easiest path to explore and deploy.",
  },
  {
    question: "When would you typically prefer an SLM over an LLM?",
    choices: [
      "For deep reasoning with extensive context",
      "For cost-efficient, fast responses on lower-end or edge hardware",
      "For maximum multilingual accuracy",
      "For image generation",
    ],
    answerIndex: 1,
    explanation:
      "SLMs are optimized for efficiency and speed; LLMs target complex reasoning and longer contexts.",
  },
  {
    question: "Which models are multi-modal (process both text and images)?",
    choices: [
      "GPT-4o and Phi3-vision",
      "Ada and Cohere embeddings",
      "DALL·E 3 and Stability AI",
      "Core42 JAIS and Nixtla TimeGEN-1",
    ],
    answerIndex: 0,
    explanation:
      "GPT-4o and Phi3-vision are cited as multi-modal; DALL·E 3 is image-generation focused.",
  },
  {
    question: "Primary purpose of embedding models like Ada and Cohere?",
    choices: [
      "Generating images from text",
      "Converting text to vectors for semantic search and RAG",
      "Performing speech recognition",
      "Providing chain-of-thought reasoning",
    ],
    answerIndex: 1,
    explanation:
      "Embeddings map text into vectors to enable similarity search and retrieval for grounding.",
  },
  {
    question: "Which is a domain- or region-specific model example?",
    choices: [
      "GPT-4 for any English task",
      "Core42 JAIS for Arabic-language applications",
      "DALL·E 3 for multilingual chat",
      "GPT-4o for time-series forecasting",
    ],
    answerIndex: 1,
    explanation:
      "JAIS is an Arabic LLM; Nixtla TimeGEN-1 is cited for time-series forecasting.",
  },
  {
    question: "Open-source vs proprietary models: which statement aligns with the module?",
    choices: [
      "Proprietary models are always cheaper",
      "Open-source models cannot be fine-tuned",
      "Proprietary models offer cutting-edge performance and enterprise support",
      "Open-source models cannot be deployed in Azure AI Foundry",
    ],
    answerIndex: 2,
    explanation:
      "Open-source emphasizes flexibility and cost-efficiency; proprietary emphasizes performance and enterprise support.",
  },
  {
    question: "Which criteria are listed for filtering models in selection?",
    choices: [
      "Task type, Precision, Openness, Deployment",
      "Latency, GPU brand, Region, Budget",
      "Token limit, JSON mode, Tools, Temperature",
      "Batch size, Learning rate, Epochs, Optimizer",
    ],
    answerIndex: 0,
    explanation:
      "The module calls out these four criteria to guide model selection.",
  },
  {
    question: "Which benchmark description is correctly matched?",
    choices: [
      "Coherence: exact string match to ground truth",
      "Fluency: grammatical correctness and natural-sounding responses",
      "Groundedness: model’s speed on GPU",
      "GPT Similarity: training dataset size",
    ],
    answerIndex: 1,
    explanation:
      "Coherence relates to flow; accuracy is exact match; groundedness is alignment to input data; GPT Similarity measures semantic similarity.",
  },
  {
    question: "Which deployment option uses compute-based billing and supports open/custom models?",
    choices: [
      "Standard deployment",
      "Serverless compute",
      "Managed compute",
      "Local deployment",
    ],
    answerIndex: 2,
    explanation:
      "Managed compute hosts models via managed VM images in a hub and uses compute-based billing.",
  },
  {
    question: "Which option supports Foundry Models with pay-as-you-go and token-based pricing?",
    choices: [
      "Standard deployment",
      "Serverless compute",
      "Managed compute",
      "On-premises cluster",
    ],
    answerIndex: 1,
    explanation:
      "Serverless compute in a hub uses token-based billing with Foundry Models and pay-as-you-go.",
  },
  {
    question: "Where are models hosted: Standard vs Serverless/Managed?",
    choices: [
      "Standard: AI Project in hub; Serverless/Managed: Foundry resource",
      "Standard: Foundry resource; Serverless/Managed: AI Project resource in a hub",
      "Both: Foundry resource only",
      "Both: AI Project resource in a hub only",
    ],
    answerIndex: 1,
    explanation:
      "Standard runs in the Foundry resource; Serverless/Managed run in the AI Project within a hub.",
  },
  {
    question: "Prompt engineering vs RAG vs fine-tuning: where to start?",
    choices: [
      "Start with fine-tuning immediately",
      "Start with RAG immediately",
      "Start with prompt engineering; add RAG or fine-tuning if needed",
      "Skip prompt engineering entirely",
    ],
    answerIndex: 2,
    explanation:
      "Prompt engineering is lowest complexity; RAG and fine-tuning add cost and complexity.",
  },
  {
    question: "Purpose of a system prompt in deployments?",
    choices: [
      "Reduce token pricing",
      "Set model behavior and guidance without exposing instructions to users",
      "Increase GPU utilization",
      "Disable JSON responses",
    ],
    answerIndex: 1,
    explanation:
      "System prompts define role/policies and can be combined with user-facing templates.",
  },
  {
    question: "Which scenario best calls for RAG rather than fine-tuning?",
    choices: [
      "Mimic a specific writing style consistently",
      "Answer questions from private policy documents",
      "Reduce inference latency on edge devices",
      "Enable multi-turn function calling",
    ],
    answerIndex: 1,
    explanation:
      "RAG grounds responses in external data sources; fine-tuning improves style/format/consistency.",
  },
  {
    question: "Considerations for scaling a generative AI solution include which set?",
    choices: [
      "Model deployment, monitoring/optimization, prompt management, model lifecycle",
      "Only GPU type and region",
      "Only batch size and cost",
      "Only temperature and top_p",
    ],
    answerIndex: 0,
    explanation:
      "The module lists these as key areas for real-world workloads.",
  },
];

const quizContainer = document.getElementById("quiz");
const studyContainer = document.getElementById("study");
const controls = document.getElementById("controls");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");
const resultContainer = document.getElementById("result");
const moduleSelect = document.getElementById("moduleSelect");
const viewSelect = document.getElementById("viewSelect");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");

let currentQuestions = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickRandomQuestions(pool, count) {
  const indices = Array.from({ length: pool.length }, (_, i) => i);
  shuffle(indices);
  return indices.slice(0, count).map((i) => pool[i]);
}

function getQuestionsForSelection(sel) {
  if (sel === "mod2") return MOD2_QUESTIONS;
  if (sel === "all") return [...MOD1_QUESTIONS, ...MOD2_QUESTIONS];
  return MOD1_QUESTIONS;
}

function setHeadingForSelection(sel, view) {
  const isStudy = view === "study";
  if (sel === "mod2") {
    titleEl.textContent = isStudy
      ? "Module 2 Study Guide: Deploy models in Azure AI Foundry"
      : "Module 2 Quiz: Deploy models in Azure AI Foundry";
    subtitleEl.textContent = isStudy
      ? "Key notes from 2-module-deploy-models-AI-foundry."
      : "Answer all questions based on your notes in 2-module-deploy-models-AI-foundry.";
    return;
  }
  if (sel === "all") {
    titleEl.textContent = isStudy
      ? "Study Guide: Modules 1 + 2"
      : "All Modules Quiz: Modules 1 + 2";
    subtitleEl.textContent = isStudy
      ? "Concise notes across modules 1 and 2."
      : "Answer all questions from modules 1 and 2.";
    return;
  }
  titleEl.textContent = isStudy
    ? "Module 1 Study Guide: Develop Generative AI Applications"
    : "Module 1 Quiz: Develop Generative AI Applications";
  subtitleEl.textContent = isStudy
    ? "Key notes from 1-module-develop-gen-AI-apps."
    : "Answer all questions based on your notes in 1-module-develop-gen-AI-apps.";
}

function renderQuiz() {
  quizContainer.innerHTML = "";
  resultContainer.textContent = "";
  resultContainer.className = "result";
  submitBtn.disabled = false;
  retryBtn.hidden = true;

  const selection = moduleSelect ? moduleSelect.value : "mod1";
  setHeadingForSelection(selection, "quiz");
  currentQuestions = getQuestionsForSelection(selection).slice();

  currentQuestions.forEach((q, qi) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const title = document.createElement("h2");
    title.className = "question-title";
    title.textContent = `Q${qi + 1}. ${q.question}`;
    card.appendChild(title);

    const choices = document.createElement("div");
    choices.className = "choices";

    q.choices.forEach((choice, ci) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q-${qi}`;
      input.value = String(ci);

      const text = document.createElement("span");
      text.textContent = choice;

      label.appendChild(input);
      label.appendChild(text);
      choices.appendChild(label);
    });

    card.appendChild(choices);
    quizContainer.appendChild(card);
  });
}

function studySection(title, content) {
  const section = document.createElement("article");
  section.className = "study-section";
  
  const h3 = document.createElement("h3");
  h3.textContent = title;
  section.appendChild(h3);
  
  const div = document.createElement("div");
  div.className = "study-content";
  div.innerHTML = content;
  section.appendChild(div);
  
  return section;
}

function getStudyContent(sel) {
  const mod1 = [
    studySection("1. Introduction to Azure AI Services", `
      <p>Azure provides multiple AI services for building comprehensive AI solutions. Key services include:</p>
      <ul>
        <li><strong>Azure OpenAI in Foundry Models:</strong> Access to GPT and DALL-E models with enterprise security</li>
        <li><strong>Azure AI Vision:</strong> Computer vision for object detection, image analysis, and text extraction</li>
        <li><strong>Azure AI Speech:</strong> Text-to-speech and speech-to-text conversion</li>
        <li><strong>Azure AI Language:</strong> Natural language processing, sentiment analysis, entity extraction</li>
        <li><strong>Azure AI Content Safety:</strong> Content moderation and safety filtering</li>
        <li><strong>Azure AI Search:</strong> Vector search and semantic indexing for RAG solutions</li>
      </ul>
    `),
    
    studySection("2. Azure AI Foundry Projects", `
      <p>Two types of projects in Azure AI Foundry:</p>
      <h4>Foundry Projects</h4>
      <ul>
        <li>Associated with Azure AI Foundry resource</li>
        <li>Support for Azure AI Foundry models, Agent Service, and AI services</li>
        <li>Tools for evaluation and responsible AI development</li>
        <li>Best for most generative AI chat apps and agents</li>
      </ul>
      <h4>Hub-based Projects</h4>
      <ul>
        <li>Include Azure AI Foundry resource + managed compute</li>
        <li>Support for Prompt Flow development</li>
        <li>Connected Azure storage and Key Vault for secure data</li>
        <li>Best for advanced scenarios like fine-tuning and Prompt Flow apps</li>
      </ul>
    `),
    
    studySection("3. AI Capabilities and Use Cases", `
      <h4>Generative AI</h4>
      <p>Generate original responses to natural language prompts. Examples:</p>
      <ul>
        <li>Real estate: Auto-generate property descriptions</li>
        <li>Content creation: Marketing copy and advertising</li>
      </ul>
      
      <h4>Agents</h4>
      <p>Autonomous AI applications that respond to input and take actions:</p>
      <ul>
        <li>Executive assistant: Meeting details, maps, taxi booking</li>
        <li>Customer service: Automated responses and task completion</li>
      </ul>
      
      <h4>Computer Vision</h4>
      <p>Process visual input from images, videos, and live streams:</p>
      <ul>
        <li>Grocery checkout: Product identification without barcodes</li>
        <li>Quality control: Defect detection in manufacturing</li>
      </ul>
      
      <h4>Information Extraction</h4>
      <p>Extract key information from documents, forms, and content:</p>
      <ul>
        <li>Expense processing: Extract dates, amounts, line items from receipts</li>
        <li>Document analysis: Pull structured data from unstructured documents</li>
      </ul>
    `),
    
    studySection("4. Large vs Small Language Models", `
      <h4>Large Language Models (LLMs)</h4>
      <ul>
        <li>Many millions of parameters</li>
        <li>Trained on huge volumes of data</li>
        <li>Best for complex reasoning and deep understanding</li>
        <li>Examples: GPT-4, Mistral Large, Llama3 70B</li>
      </ul>
      
      <h4>Small Language Models (SLMs)</h4>
      <ul>
        <li>Optimized for specific scenarios</li>
        <li>Lower overhead and cost</li>
        <li>Perfect for edge devices and cost-sensitive applications</li>
        <li>Examples: Phi3, Mistral OSS models, Llama3 8B</li>
      </ul>
    `),
    
    studySection("5. Responsible AI Principles", `
      <h4>Fairness</h4>
      <p>AI systems should treat all people fairly without bias based on gender, ethnicity, or other factors. Use representative data and evaluate subgroup performance.</p>
      
      <h4>Reliability and Safety</h4>
      <p>AI systems must perform reliably and safely. Apply rigorous testing and appropriate confidence thresholds for predictions.</p>
      
      <h4>Privacy and Security</h4>
      <p>Protect personal data and implement appropriate safeguards. Secure endpoints and manage data access properly.</p>
      
      <h4>Inclusiveness</h4>
      <p>AI should benefit all parts of society regardless of physical ability, gender, sexual orientation, ethnicity, or other factors.</p>
      
      <h4>Transparency</h4>
      <p>Users should understand the system's purpose, how it works, and its limitations. Share confidence scores and model information.</p>
      
      <h4>Accountability</h4>
      <p>Developers and organizations are responsible for AI systems they create and deploy. Establish governance frameworks.</p>
    `),
  ];

  const mod2 = [
    studySection("1. Model Discovery and Selection", `
      <h4>Model Catalogs</h4>
      <p>Three main sources for discovering models:</p>
      <ul>
        <li><strong>Hugging Face:</strong> Vast catalog of open-source models</li>
        <li><strong>GitHub:</strong> Access via GitHub Marketplace and Copilot</li>
        <li><strong>Azure AI Foundry:</strong> Comprehensive catalog with deployment tools</li>
      </ul>
      
      <h4>Selection Criteria</h4>
      <p>Four key characteristics to consider:</p>
      <ul>
        <li><strong>Task type:</strong> Text-only, multi-modal, or specific capabilities</li>
        <li><strong>Precision:</strong> Base model vs fine-tuned for your domain</li>
        <li><strong>Openness:</strong> Open-source vs proprietary models</li>
        <li><strong>Deployment:</strong> Local, serverless, or managed infrastructure</li>
      </ul>
    `),
    
    studySection("2. Model Types and Capabilities", `
      <h4>Chat Completion Models</h4>
      <p>Generate coherent, contextually appropriate text responses:</p>
      <ul>
        <li>GPT-4, Mistral Large for general conversation</li>
        <li>DeepSeek-R1, o1 for complex reasoning tasks</li>
      </ul>
      
      <h4>Multi-modal Models</h4>
      <p>Process images, audio, and text together:</p>
      <ul>
        <li>GPT-4o, Phi3-vision for image analysis and generation</li>
        <li>Useful for computer vision and document analysis</li>
      </ul>
      
      <h4>Image Generation Models</h4>
      <p>Create visuals from text prompts:</p>
      <ul>
        <li>DALL·E 3, Stability AI for marketing materials and art</li>
      </ul>
      
      <h4>Embedding Models</h4>
      <p>Convert text to numerical representations for semantic search:</p>
      <ul>
        <li>Ada, Cohere for RAG scenarios and recommendation engines</li>
      </ul>
      
      <h4>Domain-Specific Models</h4>
      <p>Specialized for languages, regions, or industries:</p>
      <ul>
        <li>Core42 JAIS for Arabic language applications</li>
        <li>Mistral Large for European languages</li>
        <li>Nixtla TimeGEN-1 for time-series forecasting</li>
      </ul>
    `),
    
    studySection("3. Model Deployment Options", `
      <h4>Standard Deployment</h4>
      <ul>
        <li><strong>Hosting:</strong> Azure AI Foundry resource</li>
        <li><strong>Models:</strong> Azure AI Foundry models (OpenAI, Models-as-a-service)</li>
        <li><strong>Billing:</strong> Token-based</li>
      </ul>
      
      <h4>Serverless Compute</h4>
      <ul>
        <li><strong>Hosting:</strong> AI Project resource in a hub</li>
        <li><strong>Models:</strong> Foundry Models with pay-as-you-go billing</li>
        <li><strong>Billing:</strong> Token-based</li>
      </ul>
      
      <h4>Managed Compute</h4>
      <ul>
        <li><strong>Hosting:</strong> AI Project resource in a hub</li>
        <li><strong>Models:</strong> Open and custom models</li>
        <li><strong>Billing:</strong> Compute-based</li>
      </ul>
      
      <h4>Why Deploy to Endpoints?</h4>
      <p>Endpoints provide secure API URLs where applications can send requests and receive responses from deployed models. This enables integration with chat applications and other client apps.</p>
    `),
    
    studySection("4. Model Performance Evaluation", `
      <h4>Benchmark Metrics</h4>
      <ul>
        <li><strong>Accuracy:</strong> Exact match with correct answers</li>
        <li><strong>Coherence:</strong> Natural flow and human-like language</li>
        <li><strong>Fluency:</strong> Grammatical correctness and vocabulary usage</li>
        <li><strong>Groundedness:</strong> Alignment between generated answers and input data</li>
        <li><strong>GPT Similarity:</strong> Semantic similarity to ground truth</li>
        <li><strong>Quality Index:</strong> Comparative aggregate score (0-1)</li>
        <li><strong>Cost:</strong> Price per token for cost-quality tradeoffs</li>
      </ul>
      
      <h4>Evaluation Approaches</h4>
      <ul>
        <li><strong>Manual:</strong> Rate model responses for quick quality assessment</li>
        <li><strong>Automated:</strong> Use precision, recall, F1 scores with your ground truth data</li>
      </ul>
    `),
    
    studySection("5. Model Optimization Strategies", `
      <h4>Prompt Engineering (Start Here)</h4>
      <ul>
        <li>Instruct model to act as a persona</li>
        <li>Guide model to suggest better questions</li>
        <li>Provide templates for specific output formats</li>
        <li>Ask for step-by-step reasoning (chain-of-thought)</li>
        <li>Add context to improve accuracy</li>
        <li>Use system prompts to set behavior without exposing instructions to users</li>
      </ul>
      
      <h4>Retrieval Augmented Generation (RAG)</h4>
      <p>When to use: Model lacks contextual knowledge</p>
      <ul>
        <li>Retrieve relevant context from data sources before generating responses</li>
        <li>Useful for domain-specific knowledge or recent events</li>
        <li>Example: Employee Q&A about company expense policies</li>
      </ul>
      
      <h4>Fine-tuning</h4>
      <p>When to use: Need consistent response format, style, or behavior</p>
      <ul>
        <li>Train base model on example prompts and responses</li>
        <li>Improves consistency with your specific requirements</li>
        <li>More expensive and complex than prompt engineering</li>
      </ul>
    `),
    
    studySection("6. Scaling for Production", `
      <h4>Key Considerations</h4>
      <ul>
        <li><strong>Model deployment:</strong> Choose optimal deployment type for performance and cost</li>
        <li><strong>Monitoring and optimization:</strong> Track performance and resource consumption</li>
        <li><strong>Prompt management:</strong> Orchestrate and optimize prompts for accuracy</li>
        <li><strong>Model lifecycle:</strong> Manage updates and changes (GenAIOps)</li>
      </ul>
      
      <h4>Azure AI Foundry Tools</h4>
      <p>Provides visual and code-first tools for building and maintaining scalable generative AI solutions.</p>
    `),
  ];

  if (sel === "mod2") return mod2;
  if (sel === "all") return [...mod1, ...mod2];
  return mod1;
}

function renderStudy() {
  quizContainer.classList.add("is-hidden");
  controls.classList.add("is-hidden");
  // Hide and clear quiz result while in study view
  resultContainer.textContent = "";
  resultContainer.className = "result";
  studyContainer.classList.remove("is-hidden");
  studyContainer.innerHTML = "";

  const selection = moduleSelect ? moduleSelect.value : "mod1";
  setHeadingForSelection(selection, "study");
  const cards = getStudyContent(selection);
  cards.forEach((c) => studyContainer.appendChild(c));
}

function renderView() {
  const view = viewSelect ? viewSelect.value : "quiz";
  if (view === "study") {
    renderStudy();
  } else {
    quizContainer.classList.remove("is-hidden");
    controls.classList.remove("is-hidden");
    studyContainer.classList.add("is-hidden");
    // clear study view when going back to quiz
    studyContainer.innerHTML = "";
    renderQuiz();
  }
}

function scoreQuiz() {
  let score = 0;
  const total = currentQuestions.length;

  currentQuestions.forEach((q, qi) => {
    const inputs = document.querySelectorAll(`input[name="q-${qi}"]`);
    let selectedIndex = -1;
    inputs.forEach((input, ci) => {
      const label = input.parentElement;
      if (input.checked) selectedIndex = ci;
      if (ci === q.answerIndex) label.classList.add("correct");
      if (input.checked && ci !== q.answerIndex) label.classList.add("incorrect");
      input.disabled = true;
    });
    if (selectedIndex === q.answerIndex) score += 1;

    const cards = document.querySelectorAll(".question-card");
    const card = cards[qi];
    const exp = document.createElement("div");
    exp.className = "explanation";
    exp.textContent = `Explanation: ${q.explanation || "Refer to your notes for details."}`;
    card.appendChild(exp);
  });

  const pct = Math.round((score / total) * 100);
  resultContainer.textContent = `You scored ${score}/${total} (${pct}%).`;
  resultContainer.className = `result ${pct >= 75 ? "good" : "bad"}`;
  submitBtn.disabled = true;
  retryBtn.hidden = false;
}

submitBtn.addEventListener("click", scoreQuiz);
retryBtn.addEventListener("click", renderQuiz);
if (moduleSelect) moduleSelect.addEventListener("change", renderView);
if (viewSelect) viewSelect.addEventListener("change", renderView);

renderView();


