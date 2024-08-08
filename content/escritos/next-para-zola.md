+++
draft = true
date = 2024-01-28
authors = ["Thiago Campos"]
title = "Transição do NextJs para o Zola"
description = "Detalhes e motivações que me levaram a re-escrever todo meu sítio web, migrando do NextJS para o Zola."
template = "pages/escrito.html"
+++
### Novo
Há alguns anos trabalho com tecnologias de _Single Page Application_ (SPAs), especialmente _React_ e _frameworks_
adjacentes, fato relevante que, somado a minha certa ignorância, levou-me a criar a primeira versão de meu sítio
web pessoal com [NextJS](https://nextjs.org) e [ContentLayer](https://contentlayer.dev). Apesar de ter sido um
projeto bem sucedido no que refere-se a realizar tudo aquilo que foi-se definido nos requisitos iniciais, a
estrutura complexa de aplicações _React_ e a dificultosa manutenção de bibliotecas de JavaScript, levaram-me a
migrar do _NextJs_ para o gerador de site estático [Zola](https://getzola.org).

### Antigo
Desde o início do desenvolvimento, havia poucas dúvidas de que este sítio *web* 
seria feito com [*Next.JS*](https://nextjs.org/), afinal, era algo com o qual 
eu já estava bem familiarizado e, graças ao [*ContentLayer*](https://contentlayer.dev/), poderia gerenciar 
facilmente um blog com arquivos *Markdown*. Contudo, algumas inconveniências, 
como o grande número de dependências e a telemetria ativada por padrão, fizeram-me procurar alternativas.

A dificuldade em manter as dependências de um projeto *React/Next.JS* atualizadas 
e livres de vulnerabilidades é de conhecimento comum na comunidade *web*. Para 
conseguir rodar o meu projeto, eram necessários 21 pacotes presentes entre as 
dependências e as dependências de desenvolvimento (*dev-dependency*), uma quantidade 
razoavelmente alta para um projeto tão simples. Em comparação, o Zola oferece todas
as soluções necessárias em um único binário estático.

Outro incômodo notável, a coleta de dados de telemetria sobre usos gerais dos 
projetos que utilizam a *framework*, foi adicionada nas versões mais recentes. 
Ainda que seja feita de forma "completamente anônima", costumo não concordar com 
a coleta de dados independentemente da quantidade e qualidade dos dados coletados. 
Para solucionar essa questão, foi necessário personalizar o comando de *build* no 
provedor que utilizo, algo relativamente trivial: `next telemetry disable && next build`. 
Mesmo tendo sido resolvida, a questão voltava a me incomodar a cada nova *build*.

Contando com um certo tempo ocioso com a chegada do período de férias da faculdade, 
optei por iniciar a busca por uma solução definitiva para as inconveniências encontradas
no *Next*. Entre buscas por alternativas e leitura de documentações dos projetos mais
interessantes, encontrei um sucessor, o [Zola](https://getzola.org), em apenas algumas horas.

O processo de instalação e os primeiros passos são bem detalhados em sua documentação, 
facilitando o contato inicial com o *Zola*. Contudo, a documentação se beneficiaria de 
algumas melhorias, como uma organização um pouco mais simples, um maior detalhamento em 
temas mais complexos e uma maior oferta de exemplos de códigos, que foram supridas através 
da leitura dos repositórios dos temas disponibilizados pela comunidade. A falta de 
conteúdos técnicos sobre a ferramenta também deixa a desejar, ainda mais quando comparada
aos conteúdos de *React/Next*.

A estrutura básica de um projeto *Zola* é composta por uma pasta `content` que contém os 
arquivos *Markdown* e são nelas que definimos as seções e páginas do nosso site (um 
assunto que poderia ser melhor definido na documentação), `sass` que contém os 
arquivos de estilização, `static` que contém os arquivos estáticos como imagens e fontes,
e `templates` que contém os arquivos *HTML*.

A maior mudança vista foi em como desenvolvemos e organizamos as páginas, migrar de um
sistema baseado em componentes para um voltado a templates pode ser desafiador no início,
principalmente para aqueles que estão tendo o primeiro contato com templates Jinja. Infelizmente, 
quando dúvidas mais complexas aparecem, o conteúdo raso visto na documentação e a falta de conteúdo 
sobre a ferramenta podem dificultar o desenvolvimento. Nesses casos, a melhor opção é recorrer ao 
[fórum oficial](https://zola.discourse.group/). Ainda assim, agradou-me como esta mudança me incentivou
a simplificar alguns elementos, visto que seria relativamente trabalhoso manter alguns componentes complexos.
Outra vantagem está na simplificação de interações, exigindo poucas ou, no meu caso, nenhuma linha de *javascript* no
projeto inteiro. Essas simplificações melhoram a acessibilidade do sítio *web* e facilitam a manutenção, ainda que
possam deixar a aplicação com certo aspecto bruto.

De forma geral, a popularização de bibliotecas e *frameworks* complexas como solução para
todas as necessidades parece-me equivocada. São excelentes ferramentas para grandes sistemas 
*web*, contudo podem e devem ser consideradas exageradas para demandas mais simples. Nesse plano,
aplicações como Zola e HTMX aparecem como ótimas alternativas.
