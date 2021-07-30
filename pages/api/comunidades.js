import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '9d02a4d019dac0ffeac3b8031802a6';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975772",
            ...request.body,
            /* title: "Amantes da Programação",
            imageUrl: "https://codingislove.com/wp-content/uploads/2015/12/codinglovenew.png",
            creatorSlug: "Milton Rodrigues", */
        })

        console.log(registroCriado)

        response.json({
            dados: 'Algum dado do meio de campo',
            registroCriado: registroCriado,
        })
        return;
    }
    response.status(404).json({
        message: "ainda não temos nada no Get, mas no POST tem!"
    })
}