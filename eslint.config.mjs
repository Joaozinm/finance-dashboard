import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node, // Adiciona variáveis globais do Node.js
            },
        },
    },
    pluginJs.configs.recommended,
]
