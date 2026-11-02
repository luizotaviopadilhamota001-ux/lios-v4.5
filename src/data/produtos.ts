export type Tela = {
  src: string
  alt: string
  width: number
  height: number
}

export type PeriodoLicenca = "ano" | "semestre" | "mês"

export type Produto = {
  slug: string
  nome: string
  resumo: string
  menu: string
  titulo: string
  intro: string
  versao?: string
  download: string
  // A primeira tela abre a página; as demais vão para a galeria.
  telas: Tela[]
  comoFunciona?: string[]
  historia: { titulo: string; texto: string[] }[]
  destaques: string[]
  maisRecursos?: string[]
  relatorios?: string[]
  faq?: { pergunta: string; resposta: string }[]
  tutoriais?: { id: string; titulo: string }[]
  uso: string[]
  licenca: { periodo: PeriodoLicenca; nota: string }
  garantia: boolean
}

export const tmIntegrado: Produto = {
  slug: "tmintegrado",
  nome: "TmIntegrado",
  resumo: "Estoque, vendas, finanças e ordem de serviço em um só sistema.",
  menu: "Estoque, vendas, finanças e ordem de serviço",
  titulo: "Controle de estoque, finanças e ordem de serviço",
  intro:
    "O TmIntegrado reúne estoque, vendas, finanças e ordem de serviço em um único programa, com relatórios que dão uma visão geral da movimentação da empresa.",
  download: "https://www.lios.com.br/tmintegrado.exe",
  telas: [
    { src: "/images/tmintegrado_3.jpg", alt: "Menu de estoque do TmIntegrado, com venda, orçamento, pedido e nota fiscal", width: 793, height: 645 },
    { src: "/images/tmintegrado_1.jpg", alt: "Tela de inclusão de venda do TmIntegrado", width: 638, height: 473 },
    { src: "/images/tmintegrado_2.jpg", alt: "Tela de inclusão de ordem de serviço do TmIntegrado", width: 683, height: 528 },
    { src: "/images/tmintegrado_4.jpg", alt: "Cadastro de cheques recebidos do TmIntegrado", width: 826, height: 586 },
  ],
  historia: [
    {
      titulo: "Feito para movimentar rápido",
      texto: [
        "O TmIntegrado foi estruturado de forma objetiva para dar o máximo de rapidez na movimentação e trazer as informações relevantes na hora em que você precisa delas.",
        "O frente de caixa é simples de utilizar e dispensa o uso do mouse, deixando o processo mais rápido.",
      ],
    },
  ],
  destaques: [
    "Controle de estoque",
    "Frente de caixa que dispensa o mouse",
    "Ordem de serviço",
    "Contas a pagar e a receber",
    "Controle de contas bancárias e caixa",
  ],
  maisRecursos: [
    "Cheques emitidos",
    "Cheques recebidos",
    "Repasse de cheques",
    "Cheques devolvidos",
    "Lançamentos por categorias e subcategorias",
    "Cadastros de clientes e fornecedores",
  ],
  relatorios: [
    "Fluxo de caixa",
    "Contas a receber e a pagar: vencidas, pagas, em aberto e geral",
    "Movimentação de caixa",
    "Cheques emitidos por período, por cliente, compensados, etc.",
    "Cheques recebidos por cliente, por data, por vencimento, devolvidos e repassados",
    "Relatórios diversos de clientes e fornecedores",
  ],
  uso: ["Pode ser usado em rede", "Licença por computador"],
  licenca: { periodo: "mês", nota: "Licença mensal, com suporte." },
  garantia: true,
}

export const tmFrenteCaixa: Produto = {
  slug: "tmfrentecaixa",
  nome: "TmFrenteCaixa",
  resumo: "Caixa básico para registrar vendas, emitir cupom simplificado e fechar o dia.",
  menu: "Caixa básico para pequenos negócios",
  titulo: "Sistema de caixa básico, rápido e simples",
  intro:
    "Registra vendas, emite cupom simplificado e apresenta relatórios com os totais de vendas. Ideal para pequenos restaurantes, quiosques, bancas e negócios em início de operação.",
  download: "https://www.lios.com.br/frentecaixa.exe",
  telas: [],
  comoFunciona: [
    "Você cadastra seus produtos com o valor de cada um.",
    "O atendente inicia a venda e digita o código de cada item.",
    "Ao finalizar, o sistema mostra o total e o valor do troco.",
    "No fim do dia, os relatórios mostram os totais de vendas.",
  ],
  historia: [
    {
      titulo: "O que farei por você?",
      texto: [
        "Sou um sistema de frente de caixa básico. Registro vendas, emito um cupom simplificado e, ao final do dia, posso te apresentar relatórios com os totais de vendas.",
      ],
    },
    {
      titulo: "O que o seu atendente poderá movimentar?",
      texto: [
        "Tenho alguns recursos que você pode configurar, limitando algumas funcionalidades. Por exemplo, posso deixar ou não liberado que o atendente altere o valor do produto na hora de vender.",
        "Posso deixar bloqueado que ele veja o total vendido no período de trabalho dele, assim somente você poderá acompanhar.",
      ],
    },
    {
      titulo: "Negócios que eu gosto de controlar",
      texto: [
        "Sou ideal para pequenos restaurantes, quiosques e bancas. Tem gente me usando até para emitir os tickets de quermesses, acredita?",
        "Como tenho um funcionamento simplificado, ajudo muito as pessoas que estão iniciando seus negócios.",
      ],
    },
  ],
  destaques: [
    "Registra vendas e emite cupom simplificado",
    "Mostra o total da venda e o valor do troco",
    "Controle de mesas",
    "Relatórios por dias e horários",
    "Abre a gaveta ao fechar a venda",
  ],
  maisRecursos: [
    "Controle por usuários",
    "Foto do produto na tela",
    "Possibilidade de código de barras",
    "Impressão em modo caracter",
    "Mini teclado numérico",
  ],
  faq: [
    {
      pergunta: "Tem controle de estoque?",
      resposta:
        "Não, este não é meu objetivo. Meu funcionamento está totalmente voltado para o controle das vendas e o fechamento do caixa de negócios esporádicos, como festas de colégios e festas de comunidade.",
    },
    {
      pergunta: "Preciso ter impressora?",
      resposta: "Não é necessário, posso trabalhar tranquilamente sem impressora.",
    },
    {
      pergunta: "Controla a abertura da gaveta?",
      resposta: "Sim, você pode me configurar para abrir a gaveta quando fechar uma venda.",
    },
    {
      pergunta: "Tem controle sobre mesas?",
      resposta:
        "Sim! Controlo as mesas deixando o número de vendas limitado (de 1 a 500). Quando você digita o número da venda como 23, significa que está fazendo uma venda para a mesa 23. Ao finalizar, a mesa fica livre para novo atendimento.",
    },
  ],
  uso: ["Pode ser usado em rede", "Licença por computador", "Suporte anual incluído"],
  licenca: { periodo: "ano", nota: "Licença anual, com suporte." },
  garantia: true,
}

export const tmPonto: Produto = {
  slug: "tmponto",
  nome: "TmPonto",
  resumo: "Controle de ponto eletrônico sem necessidade de relógio ponto.",
  menu: "Ponto eletrônico sem relógio ponto",
  titulo: "Controle de ponto",
  intro: "Sistema para controle de ponto eletrônico sem necessidade de relógio ponto.",
  versao: "2.0",
  download: "https://www.lios.com.br/tmpontoi.exe",
  telas: [
    { src: "/images/tmponto_1.jpg", alt: "Tela principal do TmPonto, com o botão Registrar Ponto", width: 649, height: 438 },
    { src: "/images/tmponto_5.jpg", alt: "Registro de entrada no TmPonto, com foto do funcionário, data e hora", width: 682, height: 440 },
    { src: "/images/tmponto_2.jpg", alt: "Cadastro de funcionário do TmPonto", width: 511, height: 448 },
    { src: "/images/tmponto_3.jpg", alt: "Cartão de ponto mensal com horas normais, extras e adicional noturno", width: 505, height: 598 },
    { src: "/images/tmponto_4.jpg", alt: "Menu de impressão do TmPonto, com cartão ponto e crachás", width: 690, height: 483 },
  ],
  historia: [],
  destaques: [
    "Registro de ponto com crachá e suporte a código de barras",
    "Horários diferenciados por semana e por funcionário",
    "Controle de adicional noturno",
    "Bloqueio contra alteração do horário do computador",
    "Cálculo de salário por hora",
  ],
  maisRecursos: [
    "Impressão de 2 estilos de crachá",
    "Backup de dados",
    "Controle de acesso por usuários",
    "Checagem de presença",
  ],
  uso: ["Pode ser usado em rede"],
  licenca: {
    periodo: "semestre",
    nota: "Licença semestral, com suporte total, atualizações e alterações no sistema.",
  },
  garantia: false,
}

export const tmCheque: Produto = {
  slug: "tmcheque",
  nome: "TmCheque",
  resumo: "Preenche e imprime cheques em minutos, com canhoto, cópia e histórico.",
  menu: "Preenchimento e impressão de cheques",
  titulo: "Programa para preencher cheques",
  intro:
    "Reduza seu tempo de trabalho: preencha quantidades expressivas de cheques em minutos e não perca mais tempo escrevendo à mão, linha por linha.",
  versao: "4.0",
  download: "https://www.lios.com.br/tmchequei.exe",
  telas: [
    { src: "/images/tmcheque_1.jpg", alt: "Tela principal do TmCheque, com os dados do cheque e a lista de impressão", width: 782, height: 555 },
    { src: "/images/tmcheque_2.jpg", alt: "Configuração da posição de cada campo na folha de cheque", width: 752, height: 613 },
    { src: "/images/tmcheque_3.jpg", alt: "Emissão de recibo no TmCheque, com o valor por extenso", width: 494, height: 302 },
  ],
  historia: [
    {
      titulo: "Tarefas repetitivas cansam",
      texto: [
        "Diariamente, nos escritórios, milhares de pessoas perdem infinitas horas do dia fazendo tarefas que podem ser automatizadas por aplicativos. Sempre que um trabalho se repete, ele pode ser automatizado.",
      ],
    },
    {
      titulo: "Por que eu preciso do TmCheque?",
      texto: [
        "Se você preenche cheques à mão ou em máquinas de preencher cheques, rasurando, escrevendo errado ou não sabendo se sessenta se escreve com \"ss\" ou \"ç\", o TmCheque faz este trabalho rapidamente por você.",
      ],
    },
  ],
  destaques: [
    "Preenche o cheque automaticamente, com as devidas alterações de datas",
    "Configura vários modelos de cheque e de bancos",
    "Imprime em impressoras matriciais, jato de tinta, laser e de cheque",
    "Imprime cheques avulsos ou em formulário contínuo",
    "Guarda o histórico e gera relatórios dos cheques impressos e emitidos",
  ],
  maisRecursos: [
    "Imprime cópia do cheque",
    "Cruza o cheque",
    "Imprime o canhoto",
    "Imprime a linha \"BOM PARA\"",
    "Opção de preencher o campo \"NOMINAL\" somente no canhoto",
    "Mantém os dados do nominal cadastrados para reutilizar",
    "Permite impressão em impressoras na rede",
    "Emite recibo",
  ],
  tutoriais: [
    { id: "ieeB2jOSyB0", titulo: "Tutorial do TmCheque, parte 1" },
    { id: "x4gQzFd2n3A", titulo: "Tutorial do TmCheque, parte 2" },
  ],
  uso: ["Não tem suporte a uso em rede", "Licença por computador"],
  licenca: { periodo: "ano", nota: "Licença anual, com suporte." },
  garantia: true,
}

export const tmFin: Produto = {
  slug: "tmfin",
  nome: "TmFin",
  resumo: "Contas a pagar e a receber, cheques, saldo de contas e fluxo de caixa.",
  menu: "Controle financeiro prático",
  titulo: "Controle financeiro prático e intuitivo",
  intro:
    "Você não precisará de treinamento para entender o sistema. Basta analisar cada atalho e perceberá o quão fácil é operá-lo.",
  download: "https://www.lios.com.br/tmfini.exe",
  telas: [
    { src: "/images/tmfin_1.jpg", alt: "Menu financeiro do TmFin, com contas a receber e a pagar", width: 808, height: 548 },
    { src: "/images/tmfin_2.jpg", alt: "Menu de relatórios do TmFin, com as opções de fluxo de caixa", width: 901, height: 556 },
    { src: "/images/tmfin_3.jpg", alt: "Menu de cheques do TmFin, com emitidos, recebidos e devolvidos", width: 810, height: 552 },
    { src: "/images/tmfin_4.jpg", alt: "Calendário de pagamentos do TmFin", width: 789, height: 576 },
    { src: "/images/tmfin_5.jpg", alt: "Inclusão de cheque recebido no TmFin", width: 826, height: 586 },
  ],
  historia: [
    {
      titulo: "Cadastro de clientes e fornecedores",
      texto: [
        "O TmFin permite que você cadastre seus clientes e fornecedores e gerencie contas a receber e a pagar. Controle cheques emitidos e recebidos com facilidade.",
      ],
    },
    {
      titulo: "Saldo de contas e caixa",
      texto: [
        "Controle o saldo de contas bancárias através do cruzamento de pagamentos, recebimentos e cheques. Tenha uma visão completa das suas finanças.",
      ],
    },
  ],
  destaques: [
    "Contas a pagar e a receber",
    "Cheques emitidos, recebidos, repassados e devolvidos",
    "Controle de contas bancárias e caixa",
    "Fluxo de caixa e diversos relatórios",
    "Operação que não precisa de mouse",
  ],
  maisRecursos: ["Lançamentos por categorias e subcategorias"],
  relatorios: [
    "Fluxo de caixa",
    "Contas a receber e a pagar: vencidas, pagas, em aberto e geral",
    "Movimentação de caixa",
    "Cheques emitidos por período, por cliente, compensados, etc.",
    "Cheques recebidos por cliente, por data, por vencimento, devolvidos e repassados",
    "Relatórios diversos de clientes e fornecedores",
  ],
  uso: ["Pode ser usado em rede", "Licença por computador", "Suporte anual incluído"],
  licenca: { periodo: "ano", nota: "Licença anual, com suporte." },
  garantia: true,
}

export const tmRecibo: Produto = {
  slug: "tmrecibo",
  nome: "TmRecibo",
  resumo: "Emite recibos com a sua logomarca e o valor por extenso, em segundos.",
  menu: "Emissor de recibos",
  titulo: "Emissor de recibos",
  intro:
    "Configure seus dados ou os da sua empresa e tenha um recibo sempre à mão, emitido facilmente e em segundos.",
  download: "https://www.lios.com.br/tmreciboi.exe",
  telas: [
    { src: "/images/tmrecibo_2.jpg", alt: "Preenchimento de recibo no TmRecibo, com o valor por extenso", width: 491, height: 307 },
    { src: "/images/tmrecibo_3.jpg", alt: "Recibo pronto para impressão, com logomarca e dados do emitente", width: 1021, height: 612 },
    { src: "/images/tmrecibo_1.jpg", alt: "Tela inicial do TmRecibo", width: 515, height: 218 },
  ],
  historia: [
    {
      titulo: "Está cansado de procurar por recibos?",
      texto: [
        "Está cansado de procurar aquele bloquinho de recibos e ainda, ao preencher, escrever algo errado? O TmRecibo vai resolver o seu problema.",
      ],
    },
  ],
  destaques: [
    "Leiaute pronto com a sua logomarca",
    "Preenche o valor por extenso automaticamente",
    "Preenche a data da emissão automaticamente",
    "Emite recibo em uma ou duas vias",
    "Controle de usuários para utilização do aplicativo",
  ],
  maisRecursos: ["Impressão gráfica"],
  uso: ["Licença por computador"],
  licenca: { periodo: "ano", nota: "Licença anual, com suporte." },
  garantia: true,
}

export const produtos = [tmIntegrado, tmFrenteCaixa, tmPonto, tmCheque, tmFin, tmRecibo]

export function caminhoProduto(produto: Produto) {
  return `/solucoes/${produto.slug}`
}

export const rotuloPeriodo: Record<PeriodoLicenca, string> = {
  ano: "por ano",
  semestre: "por semestre",
  mês: "por mês",
}
