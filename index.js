const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({ authStrategy: new LocalAuth() });
client.on('qr', (qr) => { qrcode.generate(qr, { small: true }); });
client.on('ready', () => { console.log('הבוט מוכן!'); });
client.on('message', async msg => {
    const text = msg.body.toLowerCase().trim();
    if (text === 'מחירון') { await msg.reply('https://link1.com'); }
    else if (text === 'אתר') { await msg.reply('https://link2.com'); }
    else if (text === 'עזרה') { await msg.reply('https://link3.com'); }
});
client.initialize();
