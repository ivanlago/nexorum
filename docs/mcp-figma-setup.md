# MCP + Figma Setup (Nexorum)

## Objetivo
Habilitar conexão de agente via MCP com:
- runtime do Next.js
- arquivo de layout no Figma

## Pré-requisitos
- Node.js instalado
- Projeto com `npm install` já executado
- Token de acesso do Figma com permissão de leitura

## Configuração aplicada no projeto
Arquivo criado na raiz: `.mcp.json`

Servidores MCP configurados:
- `next-devtools` via `next-devtools-mcp`
- `figma` via `figma-developer-mcp`

## Como conectar
1. Exporte o token no terminal antes de iniciar o agente:
```bash
export FIGMA_API_KEY="seu_token_figma"
```

2. Inicie o Next.js em modo desenvolvimento:
```bash
npm run dev
```

3. Inicie o agente MCP-aware (Codex/cliente) no mesmo projeto.

4. No agente, solicite a leitura do arquivo Figma:
- Conta: `ivanslago@gmail.com`
- Projeto: `Nexorum Oficial`
- Versão: `Draft V1`

## Regra de implementação
- Reproduzir fielmente espaçamentos, tipografia, cores, grid e hierarquia visual do Figma.
- Priorizar componentes shadcn/ui sempre que possível.
- Se algum componente do Figma não existir no shadcn/ui, compor com utilitários Tailwind e registrar exceção em `docs/projeto-nexorum-premissas.md`.

## Bloqueios comuns
- Token inválido ou ausente.
- Permissão insuficiente no arquivo Figma.
- Nome do arquivo/projeto diferente do informado.
