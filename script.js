const questions = [
    {
        question: "Qual o principal objetivo de um Teste Unitário em Java?",
        options: [
            "Garantir que o sistema completo funcione sem erros na produção.",
            "Verificar que a integração entre diferentes módulos da aplicação está correta.",
            "Testar a menor porção isolada de código (método ou classe) para assegurar seu funcionamento esperado.",
            "Validar a performance da aplicação sob alta carga de usuários."
        ],
        answer: 2, // Índice da resposta correta (0-based)
        explanation: "O teste unitário foca no isolamento e na verificação de unidades individuais de código, como métodos ou classes, para garantir que funcionem corretamente."
    },
    {
        question: "Em JUnit, qual anotação é usada para marcar um método como um teste unitário?",
        options: [
            "@Test",
            "@RunTest",
            "@UnitTest",
            "@Execute"
        ],
        answer: 0,
        explanation: "A anotação `@Test` é o elemento fundamental do JUnit para identificar um método de teste. Ela indica que o método deve ser executado como parte da suíte de testes."
    },
    {
        question: "O que significa o 'Arrange' no padrão Arrange-Act-Assert (AAA) para testes unitários?",
        options: [
            "Executar o código que está sendo testado.",
            "Verificar se o resultado da execução está de acordo com o esperado.",
            "Configurar o ambiente, criar objetos e preparar dados para o teste.",
            "Limpar os recursos após a execução do teste."
        ],
        answer: 2,
        explanation: "A fase 'Arrange' é onde você prepara tudo o que é necessário para o teste: inicializa objetos, define entradas, configura mocks, etc."
    },
    {
        question: "Qual afirmação JUnit é usada para verificar se dois valores são iguais?",
        options: [
            "assertNotEquals(expected, actual);",
            "assertFalse(condition);",
            "assertEquals(expected, actual);",
            "assertTrue(condition);"
        ],
        answer: 2,
        explanation: "`assertEquals(expected, actual)` é a afirmação mais comum para comparar a igualdade de dois valores."
    },
    {
        question: "Em JUnit 5, qual anotação permite executar um método **antes de cada** método de teste dentro de uma classe de teste?",
        options: [
            "@BeforeAll",
            "@BeforeEach",
            "@AfterEach",
            "@AfterAll"
        ],
        answer: 1,
        explanation: "`@BeforeEach` (equivalente a `@Before` no JUnit 4) executa um método antes de cada teste, sendo útil para inicializar recursos comuns ou resetar estados."
    },
    {
        question: "Para que serve a anotação `@DisplayName` no JUnit 5?",
        options: [
            "Para definir a ordem de execução dos testes.",
            "Para indicar que um teste deve ser ignorado.",
            "Para fornecer um nome legível e descritivo para classes e métodos de teste.",
            "Para agrupar testes em categorias específicas."
        ],
        answer: 2,
        explanation: "`@DisplayName` melhora a legibilidade dos resultados dos testes, permitindo nomes mais descritivos e amigáveis para testes e classes de teste."
    },
    {
        question: "Qual a principal diferença de **escopo** entre um Teste Unitário e um Teste de Integração?",
        options: [
            "O Teste Unitário verifica o sistema inteiro, enquanto o Teste de Integração verifica apenas o front-end.",
            "O Teste Unitário verifica o código em produção; o Teste de Integração verifica o código em desenvolvimento.",
            "O Teste Unitário verifica uma única função isolada; o Teste de Integração verifica a interação entre duas ou mais unidades de código (ex: Service e Repository).",
            "O Teste Unitário utiliza Mocks; o Teste de Integração nunca utiliza Mocks."
        ],
        answer: 2, 
        explanation: "O Teste Unitário foca no isolamento (uma única unidade). O Teste de Integração testa como diferentes componentes (unidades) se comunicam e funcionam em conjunto (ex: uma classe chamando outra)."
    },
    {
        question: "Qual o foco principal do teste realizado em uma **Camada de Serviço (Service Layer)** de uma aplicação RESTful, quando isolada das outras camadas?",
        options: [
            "Garantir que a serialização e desserialização de objetos JSON (JSON -> Objeto Java) esteja correta.",
            "Validar a lógica de negócios e as regras de domínio, simulando as interações com o repositório e outras dependências.",
            "Verificar se o código de status HTTP (ex: 200 OK, 404 Not Found) e os cabeçalhos da resposta estão corretos.",
            "Avaliar a latência e o tempo de resposta da Camada de Serviço sob diferentes condições de rede."
        ],
        answer: 1, 
        explanation: "A Camada de Serviço é o coração da lógica de negócios. Os testes unitários dessa camada devem focar em garantir que as regras de domínio sejam aplicadas corretamente, utilizando Mocks para isolar o repositório de dados ou outros serviços."
    },
    {
        question: "Quando um teste unitário deve **falhar**?",
        options: [
            "Quando a função testada retorna um valor diferente do esperado.",
            "Quando a execução leva mais tempo do que o normal.",
            "Quando o ambiente de desenvolvimento não está configurado corretamente.",
            "Quando o desenvolvedor ainda não terminou de implementar a funcionalidade."
        ],
        answer: 0,
        explanation: "Um teste unitário falha precisamente para indicar que a unidade de código testada não se comportou como esperado sob as condições dadas, revelando um bug ou um desvio da especificação."
    },
    {
        question: "Qual o benefício principal de ter uma boa cobertura de testes unitários?",
        options: [
            "Garantir 100% de performance para o usuário final.",
            "Aumentar a complexidade do código, tornando-o mais robusto.",
            "Fornecer confiança na refatoração, detectar regressões precocemente e documentar o comportamento do código.",
            "Eliminar completamente a necessidade de testes manuais e de integração."
        ],
        answer: 2,
        explanation: "Uma boa cobertura de testes unitários oferece maior segurança ao fazer mudanças, ajuda a encontrar bugs antes que cheguem à produção e serve como uma forma de documentação executável do código."
    },
    {
        question: "O Teste de Ponta a Ponta (E2E) é o mais lento e complexo. Qual o objetivo **único** que ele cumpre que os testes Unitários e de Integração não cumprem?",
        options: [
            "Garantir a lógica interna de uma única função Java com 100% de precisão.",
            "Verificar se o sistema completo funciona da perspectiva do usuário, simulando a jornada real através da UI, rede e banco de dados.",
            "Confirmar se todas as dependências estão corretamente Mockadas e isoladas.",
            "Substituir todos os outros tipos de testes para economizar tempo de desenvolvimento."
        ],
        answer: 1, 
        explanation: "Testes E2E são os únicos que validam a 'experiência completa', garantindo que todos os subsistemas (Front-end, API, Banco de Dados, sistemas externos) trabalhem juntos corretamente, simulando o comportamento de um usuário real."
    },
    
    {
        question: "Além de detectar bugs, qual outro benefício crucial um bom conjunto de Testes Unitários oferece para o design do código?",
        options: [
            "Eles substituem a documentação técnica oficial, pois o código se torna autoexplicativo.",
            "Eles agem como uma forma de documentação executável e incentivam o desenvolvimento de classes e métodos mais coesos e menos acoplados.",
            "Eles forçam o uso de herança múltipla, o que simplifica a arquitetura.",
            "Eles reduzem a necessidade de um sistema de versionamento de código (Git)."
        ],
        answer: 1, 
        explanation: "O simples ato de *escrever* testes unitários exige que o código seja modular e fácil de isolar, naturalmente incentivando o desenvolvedor a criar classes mais coesas e com baixo acoplamento. Além disso, os testes mostram como usar a unidade de código, atuando como documentação de 'uso'."
    },

    {
        question: "Qual é o principal tipo de requisito de software que um Teste Unitário automatizado tem como função primária verificar?",
        options: [
            "Requisitos Não Funcionais (NFRs), como performance, segurança e usabilidade.",
            "Requisitos Funcionais (FRs), que definem o que o sistema **deve fazer** em termos de lógica e comportamento.",
            "Ambos os tipos são verificados com igual eficácia e detalhe.",
            "Nenhum, pois a função primária é garantir que o código seja legível e manutenível."
        ],
        answer: 1, 
        explanation: "Testes unitários verificam primariamente os **Requisitos Funcionais**, garantindo que as regras de negócio e a lógica de processamento da unidade de código (o 'o quê' do sistema) estejam corretas. Requisitos Não Funcionais (como performance e segurança) são geralmente cobertos por testes dedicados, como testes de carga e testes de segurança."
    }
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.dataset.index = index; // Armazena o índice da opção

        // Se o usuário já respondeu, marca a opção selecionada
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    updateNavigationButtons();
}

function selectOption(selectedIndex, selectedDiv) {
    // Remove a classe 'selected' de todas as opções da pergunta atual
    Array.from(optionsContainer.children).forEach(optionDiv => {
        optionDiv.classList.remove('selected');
    });

    // Adiciona a classe 'selected' à opção clicada
    selectedDiv.classList.add('selected');
    userAnswers[currentQuestionIndex] = selectedIndex; // Armazena a resposta do usuário
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function showPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

/**
 * Retorna o título e a mensagem de parabéns personalizada baseada na pontuação.
 * @param {number} score - Pontuação do usuário.
 * @param {number} totalQuestions - Número total de perguntas.
 * @returns {{title: string, message: string}} Objeto com título e mensagem.
 */
function getCustomFeedback(score, totalQuestions) {
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
        return {
            title: "🏆 Parabéns! Mestre das Artes de Testes Unitários! 🥇",
            message: "Você demonstrou um conhecimento impecável! Seus testes estão prontos para garantir a qualidade de qualquer sistema Java/JUnit. **Zero Regressões!**"
        };
    } else if (percentage >= 70) {
        return {
            title: "🎉 Parabéns! Ótimo Resultado! 🎉",
            message: "Você atingiu a pontuação mínima de 70%! Seu domínio sobre os fundamentos dos testes unitários é sólido. Revise as questões que errou para aprimorar ainda mais!"
        };
    } else {
        return {
            title: "⚠️ Quase lá! Continue estudando ⚠️",
            message: "Seu conhecimento é um bom começo, mas você precisa revisar alguns conceitos chave de isolamento e arquitetura de testes. Use as explicações abaixo para aprender com seus erros!"
        };
    }
}

function submitQuiz() {
    let score = 0;
    feedbackElement.innerHTML = ''; // Limpa feedback anterior

    // 1. Cálculo da pontuação
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.answer;
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            score++;
        }

        // 2. Geração de feedback detalhado
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        
        // Define a cor de fundo do item de feedback
        feedbackItem.style.backgroundColor = isCorrect ? '#e8f5e9' : '#ffebee';
        feedbackItem.style.border = isCorrect ? '1px solid #c8e6c9' : '1px solid #ffcdd2';
        feedbackItem.style.borderRadius = '5px';
        feedbackItem.style.padding = '15px';
        feedbackItem.style.marginBottom = '10px';


        feedbackItem.innerHTML = `
            <p class="question-text"><strong>Q${index + 1}:</strong> ${q.question}</p>
            <p class="your-answer">Sua resposta: <span style="color: ${isCorrect ? '#27ae60' : '#e74c3c'}; font-weight: bold;">${userAnswer !== null ? q.options[userAnswer] : 'Não respondida'}</span> ${isCorrect ? '✅' : '❌'}</p>
            <p class="correct-answer">Resposta correta: <span style="color: #27ae60;">${q.options[correctAnswer]}</span></p>
            <p class="explanation" style="margin-top: 8px;"><strong>Explicação:</strong> ${q.explanation}</p>
        `;
        feedbackElement.appendChild(feedbackItem);
    });

    // 3. Aplicação do feedback personalizado
    const customFeedback = getCustomFeedback(score, questions.length);

    // Atualiza o título e a mensagem de parabéns
    document.getElementById('result').querySelector('h2').textContent = customFeedback.title;
    scoreElement.innerHTML = `${customFeedback.message}<br><br>Você acertou **${score}** de **${questions.length}** perguntas.`;
    
    // 4. Exibição
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuestion();
}

// Event Listeners
prevBtn.addEventListener('click', showPrevQuestion);
nextBtn.addEventListener('click', showNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Inicializa o quiz
loadQuestion();