import { type SchemaTypeDefinition } from 'sanity'
import sobrePage from './sobrePage'
import equipePage from './equipePage'
import eventosPage from './eventosPage'
import opcoesViagemPage from './opcoesViagemPage'
import trabalheConoscoPage from './trabalheConoscoPage'
import lazerPage from './lazerPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sobrePage, equipePage, eventosPage, opcoesViagemPage, trabalheConoscoPage, lazerPage],
}
