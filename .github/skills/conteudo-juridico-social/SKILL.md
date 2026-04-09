---
name: conteudo-juridico-social
description: 'Pesquisa notícias, vídeos do YouTube e perfis do Instagram sobre temas jurídicos atuais e transforma os achados em artigo jurídico autoral, carrossel de Instagram com CTA para infoproduto e analogia com personagem, série ou figura pública. Use para planejamento editorial e produção de conteúdo da ESM Advocacia.'
argument-hint: 'Área do Direito + tema atual + objetivo do infoproduto'
user-invocable: true
---

# Conteúdo Jurídico para Social e Infoprodutos

## Objetivo
Esta skill foi pensada para a **ESM Advocacia Especializada** e apoia um fluxo completo de conteúdo:
1. mapear notícias, vídeos e perfis relevantes;
2. sintetizar os achados em um **artigo jurídico original e robusto**;
3. adaptar o tema para um **carrossel de Instagram** com CTA para infoproduto; e
4. criar uma **associação contextual** com personagens, séries, filmes ou figuras públicas atuais.

## Contexto da marca ESM
Ao produzir o conteúdo, preserve o posicionamento já refletido no projeto:
- tom **claro, confiável, estratégico e orientado a resultado**;
- linguagem acessível, sem perder rigor técnico;
- foco em pessoas e empresas que precisam de orientação prática;
- valorização de **excelência técnica, comunicação clara, tecnologia e atendimento humanizado**.

## Áreas prioritárias do projeto
Use como prioridade as áreas já presentes em `src/pages/PracticeAreas.tsx`:
- Direito Imobiliário
- Direito da Saúde
- Direito do Passageiro Aéreo
- Direito de Família
- Direito de Sucessões
- Direito Trabalhista
- Direito de Telefonia
- Direito Bancário
- Direito Digital

## Quando usar
Use esta skill quando o pedido envolver:
- pesquisa de **tema jurídico atual** para redes sociais;
- análise de **notícias, YouTube e Instagram** para conteúdo autoral;
- criação de **artigo jurídico**, **roteiro de carrossel**, **legenda**, **CTA** ou **gancho de infoproduto**;
- construção de **calendário editorial** ou reaproveitamento de tendências para o escritório.

## Entradas mínimas esperadas
Antes de executar o fluxo, reúna ou peça ao usuário:
1. **área do Direito**;
2. **público-alvo** (cliente final, empresário, consumidor, trabalhador etc.);
3. **tema ou fato gerador** (notícia, decisão, tendência, problema recorrente);
4. **objetivo da peça** (atrair leads, educar audiência, vender ebook, captar consulta);
5. se possível, **links ou nomes de perfis/canais** para usar como ponto de partida.

> Se não houver pesquisa web ampla disponível, peça ao usuário 3 a 5 links, perfis, canais ou palavras-chave iniciais e trabalhe com base neles.

## Fluxo recomendado

### Etapa 1 — Radar e mapeamento de fontes
Monte primeiro um radar usando o template [source-map-template](./assets/source-map-template.md).

Critérios:
- priorize fontes **recentes** e **confiáveis**;
- diferencie fonte **oficial**, **jornalística**, **educacional** e **opinativa**;
- extraia: fato central, impacto prático, dor do público, oportunidade de orientação jurídica e gancho de produto.

Prioridade de confiabilidade:
1. tribunais, órgãos públicos, legislação, agências reguladoras;
2. veículos jornalísticos reconhecidos;
3. especialistas com histórico consistente;
4. perfis de Instagram e vídeos usados apenas como termômetro de linguagem e pauta.

### Etapa 2 — Síntese jurídica aprofundada
Converta o radar em uma tese central única:
- qual é o problema jurídico real?
- o que está mudando agora?
- quais riscos, direitos e medidas práticas interessam ao público?
- como a ESM pode explicar o tema com mais profundidade do que o conteúdo original?

Depois escreva um artigo seguindo [article-template](./assets/article-template.md).

Regras do artigo:
- produzir conteúdo **autoral**, sem copiar trechos de matérias, posts ou roteiros;
- citar as fontes como referência informativa, mas com síntese própria;
- contextualizar o tema no cenário brasileiro;
- mostrar utilidade prática: "o que isso significa", "o que fazer agora" e "erros a evitar";
- encerrar com CTA para consulta, material rico ou infoproduto.

### Etapa 3 — Transformação em carrossel do Instagram
A partir do artigo, crie um carrossel com base em [carousel-template](./assets/carousel-template.md).

Boas práticas do carrossel:
- abrir com um **gancho forte** e específico;
- manter cada slide com leitura rápida;
- alternar **problema**, **impacto**, **direito**, **passo prático** e **CTA**;
- terminar com ação clara: baixar ebook, entrar na lista, comentar palavra-chave ou agendar consulta.

### Etapa 4 — Associação com personagem, série ou figura pública
Associe o carrossel a um referente cultural ou público que aumente identificação.

Critérios:
- a associação deve ser **pertinente**, não forçada;
- use analogia para facilitar entendimento, não para afirmar fatos não comprovados;
- prefira referências amplamente conhecidas do momento;
- evite comparações potencialmente difamatórias ou ofensivas.

Formato sugerido:
- **Referência escolhida**
- **Por que combina com o tema**
- **Como usar no slide 1 ou na legenda**

### Etapa 5 — Organização dos entregáveis na pasta `Conteudo`
Sempre que o usuário pedir produção estruturada por área, crie **por padrão** a seguinte organização:

```text
Conteudo/<RamoCorrelato>/<AAAA-MM-DD>/
├── artigo.md
└── info.md
```

Regras:
- use a **data atual no formato `AAAA-MM-DD`**;
- escolha o ramo correlato já existente no projeto, como `Imobiliario`, `Saude`, `Bancario`, `Digital` etc.;
- cada `artigo.md` deve ter **um infoproduto principal complementar** em `info.md`, salvo pedido expresso por múltiplas ofertas;
- `info2.md`, `info3.md` e demais variações só devem ser criados quando o usuário solicitar **upsells, versões alternativas ou esteira comercial adicional**;
- desenvolva o `artigo.md` com profundidade, tom autoral e aplicabilidade prática;
- desenvolva o `info.md` usando o template [infoproduct-template](./assets/infoproduct-template.md).

### Etapa 6 — Estrutura dos infoprodutos para Hotmart
Cada arquivo de infoproduto deve trazer, no mínimo:
- **b.1. Identificação do Produto**, escolhendo uma modalidade:
  - **Curso Online** — aulas em vídeo, texto, quiz, materiais e mais;
  - **eBook** — arquivos em `.pdf` ou `ePub` para leitura online ou download;
  - **Comunidade** — conteúdos frequentes para assinantes;
  - **Assinatura** — curso online e/ou área de membros recorrente;
  - **Evento Online** — conferências, palestras e workshops;
  - **Agentes de IA** — agente treinado com o conhecimento do nicho.
- **b.2. Descrição do Produto**;
- **b.3. Nome do Produto** — claro, objetivo e impactante;
- **b.4. Preço do Produto** — definido pelo custo-benefício e pela estratégia da oferta.

Além das informações de divulgação para Hotmart, o arquivo deve conter **o conteúdo do produto em si, amplamente desenvolvido**.

Exemplos:
- se for **eBook**, incluir sumário, capítulos redigidos, checklists e conclusão;
- se for **Curso Online**, incluir módulos, aulas, objetivos, exercícios e materiais de apoio;
- se for **Comunidade** ou **Assinatura**, incluir trilha editorial, cronograma e entregáveis recorrentes;
- se for **Agente de IA**, incluir base de conhecimento, fluxos, prompts centrais, casos de uso e limites éticos.

Sempre que possível, complemente com:
- promessa central;
- público-alvo;
- módulos ou entregáveis;
- conteúdo efetivamente desenvolvido;
- diferenciais;
- CTA de compra;
- observações de posicionamento comercial.

### Etapa 7 — Publicação no site
Quando solicitado, publique o conteúdo na página **`Conteúdos Jurídicos`** do site, com:
- card do artigo na listagem de `resources`;
- título, resumo, categoria e tempo de leitura;
- link interno para **leitura completa**;
- CTA coerente com o infoproduto ou com a consulta jurídica.

## Entrega padrão
Quando esta skill for usada, entregue no seguinte formato:

1. **Radar de fontes**
2. **Insight central / tese editorial**
3. **Artigo jurídico completo**
4. **Carrossel do Instagram slide a slide**
5. **Legenda do post com CTA para infoproduto**
6. **Associação cultural ou pública sugerida**
7. **Próximos conteúdos derivados** (ex.: reel, story, lead magnet, live, FAQ)
8. **Estrutura criada em `Conteudo/<Ramo>/<AAAA-MM-DD>/`**
9. **Arquivos `artigo.md` e `info.md` com detalhamento comercial e conteúdo desenvolvido do produto**
10. **Arquivos adicionais como `info2.md` e `info3.md` apenas se houver pedido expresso de múltiplas ofertas**
11. **Publicação ou sugestão de publicação na página `Conteúdos Jurídicos`**

## Guardrails essenciais
- Não apresentar o conteúdo como consultoria jurídica individual.
- Não inventar fatos, decisões ou números.
- Não copiar textos de notícias, legendas, roteiros ou materiais protegidos.
- Sempre sinalizar quando uma informação depender de validação adicional.
- Em temas sensíveis, incluir nota breve de caráter informativo e preventivo.

## Saída ideal para a ESM
O material final deve soar como:
- técnico, mas compreensível;
- estratégico e útil para o dia a dia do cliente;
- alinhado à proposta da ESM de unir **precisão jurídica**, **integridade**, **agilidade** e **resultado**.

## Exemplos de uso
- `/conteudo-juridico-social Direito Bancário + golpe do Pix + vender ebook de prevenção a fraudes`
- `/conteudo-juridico-social Direito da Saúde + negativa de medicamento + carrossel para captar consultas`
- `/conteudo-juridico-social Direito Imobiliário + distrato + post educativo com CTA para guia prático`
