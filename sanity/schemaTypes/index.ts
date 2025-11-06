import { type SchemaTypeDefinition } from 'sanity'
import homePage from './homePage'
import sobrePage from './sobrePage'
import equipePage from './equipePage'
import eventosPage from './eventosPage'
import opcoesViagemPage from './opcoesViagemPage'
import trabalheConoscoPage from './trabalheConoscoPage'
import lazerPage from './lazerPage'
import cbenfPage from './cbenfPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, sobrePage, equipePage, eventosPage, opcoesViagemPage, trabalheConoscoPage, lazerPage, cbenfPage],
}
