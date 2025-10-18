import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import eventosPage from './eventosPage'
import lazerPage from './lazerPage'
import sobrePage from './sobrePage'
import equipePage from './equipePage'
import eventosInfoPage from './eventosInfoPage'
import opcoesViagemPage from './opcoesViagemPage'
import trabalheConoscoPage from './trabalheConoscoPage'
import landingPageEventos from './landingPageEventos'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    eventosPage,
    lazerPage,
    sobrePage,
    equipePage,
    eventosInfoPage,
    opcoesViagemPage,
    trabalheConoscoPage,
    landingPageEventos
  ],
}
