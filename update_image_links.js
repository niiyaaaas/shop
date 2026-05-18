const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace Amazon URLs with local generated images
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/61Q6U\+t11NL\._SL1500_\.jpg/g, 'assets/images/mb_biozyme.png');
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/51wN3t4q8yL\._SL1500_\.jpg/g, 'assets/images/gnc_whey.png');
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/51KntIqC1wL\._SL1080_\.jpg/g, 'assets/images/wellcore_creatine.png');
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/61k1K-j2cTL\._SL1500_\.jpg/g, 'assets/images/avvatar_whey.png');
    
    // Replace remaining Amazon image thumbnails on PDP
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/71Xm06O2GQL\._SL1500_\.jpg/g, 'assets/images/mb_biozyme.png');
    content = content.replace(/https:\/\/m\.media-amazon\.com\/images\/I\/71YmQxT01jL\._SL1500_\.jpg/g, 'assets/images/mb_biozyme.png');
    
    fs.writeFileSync(file, content);
    console.log(`Updated images in ${file}`);
});
