const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function viewDatabase() {
  try {
    console.log('=== REGISTROS DE NEWSLETTER ===');
    const newsletterSubscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    if (newsletterSubscribers.length === 0) {
      console.log('No hay suscriptores de newsletter');
    } else {
      console.log(`Total: ${newsletterSubscribers.length} suscriptores`);
      console.log('');
      newsletterSubscribers.forEach((sub, index) => {
        console.log(`${index + 1}. Email: ${sub.email}`);
        console.log(`   Fecha: ${sub.createdAt.toLocaleString('es-ES')}`);
        console.log('');
      });
    }

    console.log('\n=== REGISTROS DE CONTACTO ===');
    const contactRequests = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    if (contactRequests.length === 0) {
      console.log('No hay mensajes de contacto');
    } else {
      console.log(`Total: ${contactRequests.length} mensajes`);
      console.log('');
      contactRequests.forEach((contact, index) => {
        console.log(`${index + 1}. Nombre: ${contact.name}`);
        console.log(`   Email: ${contact.email}`);
        console.log(`   Fecha: ${contact.createdAt.toLocaleString('es-ES')}`);
        console.log(`   Mensaje: ${contact.message.substring(0, 100)}${contact.message.length > 100 ? '...' : ''}`);
        console.log('');
      });
    }

  } catch (error) {
    console.error('Error al leer la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewDatabase();
