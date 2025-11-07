require('dotenv').config();
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01'
});

const DRY_RUN = !!process.env.DRY_RUN;
const SOURCE_DIR = '/Users/eumoitinho/Downloads/24h3-main/public';

// Mapeamento de hotéis para imagens
const hotelImageMap = {
  'Charlie Connect PUC': '24H Fachadas/01 - Charlie.png',
  'Pousada São Lourenço': '24H Fachadas/02 - Hotel Pousada São Lourenço.png',
  'Coral Trade': '24H Fachadas/03 - Coral Trade.png',
  'Master Porto Alegre': '24H Fachadas/04 - Master POA.png',
  'Master Express Moinhos de Vento': '24H Fachadas/05 - Master - Moinhos de Vento.png',
  'Intercity Piazza Navona': '24H Fachadas/06 - Intercity Piaza Navona.png',
  'Charlie Porto Alegre Moinhos': '24H Fachadas/07 - Charlie Moinhos.png',
  'Coral Express': '24H Fachadas/08 - Coral Express.png',
  'Ibis Styles Porto Alegre Moinhos de Vento': '24H Fachadas/09 - Ibis Style.png',
  'Master Express Cidade Baixa': '24H Fachadas/10 - Master Express Cidade Baixa.png',
  'Açores Premium Hotel': '24H Fachadas/11 - Açores Premium Hotel.png',
  'Garibaldi Business Hotel': '24H Fachadas/12 - Garibaldi.png',
  'Master Cosmopolitan': '24H Fachadas/13 - Master Cosmopolitan.png',
  'Umbu Hotel': '24H Fachadas/14 - Umbu.png',
  'Master Alberto Bins': '24H Fachadas/15 - Master Alberto.png',
  'Continental Business': '24H Fachadas/16 - Continental.jpg',
  'Nacional Inn Porto Alegre': '24H Fachadas/16 - Hotel Nacional Inn.png',
  'Park Plaza Porto Alegre': '24H Fachadas/17 - Park Plaza.png',
  'Master Express Dom Pedro II': '24H Fachadas/18 - Master Express Dom Pedro.png',
  'Hotel Embaixador': '24H Fachadas/19 - Hotel Embaixador.png',
  'Dan Inn Express Porto Alegre': '24H Fachadas/20 - Hotel Dan Inn.png',
  'Ritter Hotéis': '24H Fachadas/21 - Ritter Hoteis.png',
  'Intercity Praia de Belas': '24H Fachadas/22 - Intercity.png',
  'Blue Tree Towers Millenium': '24H Fachadas/23 - Blue Tree Towers.png',
  'Plaza São Rafael': '24H Fachadas/24 - Hotel Plaza São Rafael.png',
  'Hotel Lancaster POA': '24H Fachadas/25 - Hotel Lancaster.png',
  'Master Express Grande Hotel': '24H Fachadas/26 - Master Express Grande Hotel.png',
  'Fast 10 City Hotel': '24H Fachadas/27 - Fast10 City Hotel.png'
};

// Mapeamento de passeios para imagens
const tourImageMap = {
  'City tour meio turno com café ao fim da tarde e jantar italiano': 'carbonara-do-sacristao.jpg',
  'City tour meio turno com café/happy hour e tempo livre no Cais': 'instagramCais.jpeg',
  'Bate e volta de Porto Alegre para dois dias em Gramado e Canela': 'gramado-no-rio-grande-do-sul-2113024.jpg',
  'Bate e volta de Porto Alegre para dois dias no Vale dos Vinhedos': 'valedosvinhedos.jpg',
  'Bate e volta de Porto Alegre para dois dias em Bento Gonçalves e Gramado': 'Locomotiva_estacao_bento_goncalves.jpg',
  'City tour meio turno com almoço italiano e tempo livre no Cais': 'italiano.webp',
  'City tour de meio turno com almoço churrasco mais tradicional da cidade': 'churrasco.jpg',
  'Linha turismo e barco Cisne Branco com happy hour e tempo livre no Cais': 'caisPorto.jpg',
  'Combo linha turismo + barco Cisne Branco': 'navegando-pelo-guaiba.jpg',
  'City tour meio turno com happy hour italiano': 'italiano2.jpg',
  'City tour meio turno com café a tarde e jantar com vinhos e cachaças gaúchas': 'MG_1137-credito-RHSPhotos-1-1.webp',
  'Bate e volta Porto Alegre para Nova Petrópolis com city tour': 'novapetropolis.jpg',
  'Bate e volta Porto Alegre para Gramado e Canela com city tour': 'Catedral_de_Pedra,_Canela_RS.jpg',
  'Bate e volta de Porto Alegre para Bento Gonçalves com city tour': 'gd_1nmkp3.jpg'
};

async function uploadImageToSanity(imagePath, filename) {
  try {
    const fileBuffer = fs.readFileSync(imagePath);
    const asset = await client.assets.upload('image', fileBuffer, {
      filename: filename,
      contentType: getContentType(filename)
    });
    return asset._id;
  } catch (error) {
    console.error(`❌ Erro ao fazer upload de ${filename}:`, error.message);
    return null;
  }
}

function getContentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.avif': 'image/avif'
  };
  return types[ext] || 'image/jpeg';
}

async function updateCBEnfPageWithImages() {
  console.log('🚀 Iniciando upload de imagens para o Sanity...');

  // Buscar o documento atual
  const docId = 'cbenfPage-1';
  let cbenfPage = await client.fetch(`*[_id == "${docId}"][0]`);

  if (!cbenfPage) {
    console.error('❌ Documento cbenfPage-1 não encontrado! Execute primeiro o populate-cbenf.js');
    return;
  }

  console.log('📋 Documento encontrado. Iniciando upload de imagens...');

  // Upload de imagens dos hotéis
  console.log('\n🏨 Fazendo upload de imagens dos hotéis...');
  const updatedHotels = [];
  
  for (const hotel of cbenfPage.accommodation?.hotels || []) {
    const hotelName = hotel.name;
    const imagePath = hotelImageMap[hotelName];
    
    if (imagePath) {
      const fullPath = path.join(SOURCE_DIR, imagePath);
      
      if (fs.existsSync(fullPath)) {
        console.log(`  📤 Uploading: ${hotelName} -> ${imagePath}`);
        
        if (!DRY_RUN) {
          const assetId = await uploadImageToSanity(fullPath, path.basename(imagePath));
          
          if (assetId) {
            updatedHotels.push({
              ...hotel,
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: assetId
                }
              }
            });
            console.log(`  ✅ Upload concluído: ${hotelName}`);
          } else {
            updatedHotels.push(hotel);
            console.log(`  ⚠️  Falha no upload, mantendo hotel sem imagem: ${hotelName}`);
          }
        } else {
          updatedHotels.push(hotel);
          console.log(`  [DRY RUN] Seria feito upload: ${hotelName}`);
        }
      } else {
        console.log(`  ⚠️  Arquivo não encontrado: ${fullPath}`);
        updatedHotels.push(hotel);
      }
    } else {
      console.log(`  ⚠️  Imagem não mapeada para: ${hotelName}`);
      updatedHotels.push(hotel);
    }
  }

  // Upload de imagens dos passeios
  console.log('\n🎯 Fazendo upload de imagens dos passeios...');
  const updatedTours = [];
  
  for (const tour of cbenfPage.tours?.items || []) {
    const tourName = tour.name;
    const imagePath = tourImageMap[tourName];
    
    if (imagePath) {
      const fullPath = path.join(SOURCE_DIR, imagePath);
      
      if (fs.existsSync(fullPath)) {
        console.log(`  📤 Uploading: ${tourName} -> ${imagePath}`);
        
        if (!DRY_RUN) {
          const assetId = await uploadImageToSanity(fullPath, path.basename(imagePath));
          
          if (assetId) {
            updatedTours.push({
              ...tour,
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: assetId
                }
              }
            });
            console.log(`  ✅ Upload concluído: ${tourName}`);
          } else {
            updatedTours.push(tour);
            console.log(`  ⚠️  Falha no upload, mantendo passeio sem imagem: ${tourName}`);
          }
        } else {
          updatedTours.push(tour);
          console.log(`  [DRY RUN] Seria feito upload: ${tourName}`);
        }
      } else {
        console.log(`  ⚠️  Arquivo não encontrado: ${fullPath}`);
        updatedTours.push(tour);
      }
    } else {
      console.log(`  ⚠️  Imagem não mapeada para: ${tourName}`);
      updatedTours.push(tour);
    }
  }

  // Upload de outras imagens
  console.log('\n🖼️  Fazendo upload de outras imagens...');
  
  // Imagem de fundo do Hero
  const heroImagePath = path.join(SOURCE_DIR, 'image.jpeg');
  let heroImageRef = null;
  if (fs.existsSync(heroImagePath)) {
    console.log('  📤 Uploading: Hero background -> image.jpeg');
    if (!DRY_RUN) {
      const assetId = await uploadImageToSanity(heroImagePath, 'image.jpeg');
      if (assetId) {
        heroImageRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        };
        console.log('  ✅ Hero background upload concluído');
      }
    }
  }

  // Imagem de passagens aéreas
  const flightsImagePath = path.join(SOURCE_DIR, 'aero.avif');
  let flightsImageRef = null;
  if (fs.existsSync(flightsImagePath)) {
    console.log('  📤 Uploading: Flights -> aero.avif');
    if (!DRY_RUN) {
      const assetId = await uploadImageToSanity(flightsImagePath, 'aero.avif');
      if (assetId) {
        flightsImageRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        };
        console.log('  ✅ Flights image upload concluído');
      }
    }
  } else {
    // Tentar aero.jpg como fallback
    const flightsImagePathJpg = path.join(SOURCE_DIR, 'aero.jpg');
    if (fs.existsSync(flightsImagePathJpg)) {
      console.log('  📤 Uploading: Flights -> aero.jpg');
      if (!DRY_RUN) {
        const assetId = await uploadImageToSanity(flightsImagePathJpg, 'aero.jpg');
        if (assetId) {
          flightsImageRef = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: assetId
            }
          };
          console.log('  ✅ Flights image upload concluído');
        }
      }
    }
  }

  // Imagem da equipe 24H
  const about24HImagePath = path.join(SOURCE_DIR, '2025-03-27-Liciane-e-Betinna-24H-75.jpg');
  let about24HImageRef = null;
  if (fs.existsSync(about24HImagePath)) {
    console.log('  📤 Uploading: About 24H -> 2025-03-27-Liciane-e-Betinna-24H-75.jpg');
    if (!DRY_RUN) {
      const assetId = await uploadImageToSanity(about24HImagePath, '2025-03-27-Liciane-e-Betinna-24H-75.jpg');
      if (assetId) {
        about24HImageRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        };
        console.log('  ✅ About 24H image upload concluído');
      }
    }
  }

  // Imagem do About (cben.webp)
  const aboutImagePath = path.join(SOURCE_DIR, 'cben.webp');
  let aboutImageRef = null;
  if (fs.existsSync(aboutImagePath)) {
    console.log('  📤 Uploading: About -> cben.webp');
    if (!DRY_RUN) {
      const assetId = await uploadImageToSanity(aboutImagePath, 'cben.webp');
      if (assetId) {
        aboutImageRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        };
        console.log('  ✅ About image upload concluído');
      }
    }
  }

  // Atualizar o documento
  console.log('\n💾 Atualizando documento no Sanity...');
  
  const updateData = {
    'accommodation.hotels': updatedHotels,
    'tours.items': updatedTours
  };

  if (heroImageRef) {
    updateData['hero.backgroundImage'] = heroImageRef;
  }

  if (flightsImageRef) {
    updateData['flights.image'] = flightsImageRef;
  }

  if (about24HImageRef) {
    updateData['about24H.image'] = about24HImageRef;
  }

  if (aboutImageRef) {
    updateData['about.image'] = aboutImageRef;
  }

  if (!DRY_RUN) {
    await client.patch(docId).set(updateData).commit();
    console.log('✅ Documento atualizado com sucesso!');
  } else {
    console.log('[DRY RUN] Documento seria atualizado com:', JSON.stringify(updateData, null, 2));
  }

  console.log('\n🎉 Processo concluído!');
}

updateCBEnfPageWithImages()
  .then(() => {
    console.log('✅ Upload de imagens concluído!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Erro fatal:', error);
    process.exit(1);
  });

