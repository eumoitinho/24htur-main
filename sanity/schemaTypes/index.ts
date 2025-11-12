import { type SchemaTypeDefinition } from 'sanity'
import homePage from './homePage'
import sobrePage from './sobrePage'
import equipePage from './equipePage'
import eventosPage from './eventosPage'
import eventosInfoPage from './eventosInfoPage'
import opcoesViagemPage from './opcoesViagemPage'
import trabalheConoscoPage from './trabalheConoscoPage'
import lazerPage from './lazerPage'
import cbenfPage from './cbenfPage'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, sobrePage, equipePage, eventosPage, eventosInfoPage, opcoesViagemPage, trabalheConoscoPage, lazerPage, cbenfPage],
}
