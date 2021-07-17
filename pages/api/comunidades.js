import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    const TOKEN = '9d02a4d019dac0ffeac3b8031802a6';

    const client = new SiteClient(TOKEN);

    
    console.log(TOKEN);
    response.json({
        dados: 'Algum dado do meio de campo'
    })
}