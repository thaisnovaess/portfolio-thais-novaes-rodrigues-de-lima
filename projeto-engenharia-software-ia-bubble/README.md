SM6 - Engenharia de Software e IA com Bubble.io

🫧 Desenvolvimento Low-Code com Governança: Gestão de Dados no Bubble.io Este repositório documenta o quinto experimento prático, focado na utilização da plataforma Bubble.io como aceleradora de desenvolvimento, sob o rigor dos fundamentos de Engenharia de Software, Segurança e Governança.

🎯 Objetivo Desenvolver uma aplicação web funcional (Gestor de Orçamentos/Férias) utilizando IA para o rascunho inicial, mas aplicando intervenção humana crítica para garantir escalabilidade, segurança (Privacy by Design) e controle de custos.

🏗️ Passo 1: Arquitetura e Modelagem de Dados Antes da implementação visual, a estrutura de dados foi planejada para evitar redundâncias e garantir performance:

Mapeamento de Entidades: Definição de tabelas como Usuário, Cliente e Orçamento.

Otimização de Relações: Uso de campos de referência única para evitar listas extensas que prejudicam o desempenho.

Option Sets: Padronização de status (ex: Pendente, Aprovado) para eliminar o uso de hardcode e garantir a integridade da lógica.

🛡️ Passo 2: Segurança e Privacy by Design Diferente das configurações padrão de IA, que criam dados publicamente visíveis, este projeto implementa regras estritas de privacidade para mitigar vulnerabilidades (OWASP Top 10):

Isolamento de Dados: Criação de regras onde This Data's Creator is Current User.

Proteção de Backend: Remoção de acessos públicos, garantindo que um usuário logado jamais visualize informações de terceiros.

⚡ Passo 3: Otimização e Governança Eficiência de Performance (WUs): Revisão de Repeating Groups para garantir que buscas ao banco ocorram de forma otimizada, prevenindo custos excessivos de infraestrutura.

Organização de Workflows: Padronização visual por cores (ex: Verde para Sucesso, Vermelho para Exclusão) e uso de documentação In-Platform (Notes) para facilitar a manutenção futura.

🚪 Passo 4: Estratégia de Saída (Vendor Lock-in) Como o Bubble retém a posse do código-fonte, foi definida uma estratégia de mitigação de risco:

Exportação de Dados: Caso seja necessário migrar para uma tecnologia tradicional (React/Node.js), os dados serão extraídos via Data API do Bubble em formato JSON, garantindo a portabilidade da informação.
