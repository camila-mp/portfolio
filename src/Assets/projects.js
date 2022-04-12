const summaryToDo = 'A aplicação consiste em uma lista de tarefas com várias '
+ 'funcionalidades, como: adicionar tarefa, riscar tarefa concluída, mudar'
+ ' ordem das tarefas, remover uma tarefa e salvar a lista de tarefas.';

const summaryWebWallet = 'A aplicação simula uma carteira de controle de gastos com'
+ ' conversor de moedas. A conversão de moedas é feita com consumo'
+ ' de dados da API awesomeAPI - Cotações de Moedas.';

const toDoListVanilla = {
  id: 1,
  title: 'To-Do List (Lista de Tarefas)',
  summary: summaryToDo,
  tags: ['front-end', 'JavaScript', 'vanilla'],
  link: 'https://github.com/camila-mp/lista-de-tarefas',
};

const webWalletReact = {
  id: 2,
  title: 'WebWallet',
  summary: summaryWebWallet,
  tags: ['front-end', 'JavaScript', 'ReactJS', 'Redux'],
  link: 'https://github.com/camila-mp/webwallet',
};

export { toDoListVanilla, webWalletReact };
