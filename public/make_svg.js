import fs from 'fs';

try {
    const b64 = fs.readFileSync('app-icon.png').toString('base64');

    const svg512 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><image width="512" height="512" href="data:image/png;base64,${b64}" preserveAspectRatio="xMidYMid slice"/></svg>`;
    fs.writeFileSync('icon-512.svg', svg512);

    const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><image width="192" height="192" href="data:image/png;base64,${b64}" preserveAspectRatio="xMidYMid slice"/></svg>`;
    fs.writeFileSync('icon-192.svg', svg192);

    console.log("SVG generated successfully");
} catch (e) {
    console.error(e);
}
