##### Rocketseat - Formação ReactJS
### Nível 01: Fundamentos
# Projeto Ignite Feed

O objetivo desse curso é revisitar a Lib React, relembrar conceitos, desenvolver técnicas e boas práticas.



### O que foi desenvolvido?
Um projeto simulando um feed de uma rede social, com os seguintes requisitos e funcionalidades:
- [x] Adicionar Comentários em um post
- [x] Deletar Comentários
- [x] Desabilitar o botão de publicar comentário, caso não tenha nada escrito no campo de texto
- [x] Contabilizar quantidade de curtidas (aplausos) presente abaixo do comentário

### Conceitos utilizados
Durante o curso foram abordados conceitos básicos do React como:
- Componentes
- Propriedades
- Estado 
- Imutabilidade
- Hooks

## Melhorias
Algumas melhorias foram implementadas, além do que foi passado no curso, como por exemplo:
> - Uso de arquivo ".json" como mock, de forma externa na arquitetura do projeto, ao invés da criação no meio do corpo do componente React. Gerando assim um código mais limpo e disponibilizando esse arquivo de mock com as informações, para que caso precise, outro componente possa utilizar.
> 
> - Ajuste na forma que a estilização de FOCUS foi utilizada. No projeto original do curso, a estilização do focus em cima dos componentes visuais era disparado até mesmo quando um click era realizado.
> 
> - As Interfaces no projeto original do curso foram criadas dentro dos componentes React. Então foi ajustado para arquivos externos, deixando assim o código do componente mais limpo e disponibilizando o acesso a essas interfaces em todo projeto.
