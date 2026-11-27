const $ = id => document.getElementById(id);
 
const actions = {
  jsonFormat: s => JSON.stringify(JSON.parse(s), null, 2),
  jsonMinify: s => JSON.stringify(JSON.parse(s)),
  b64enc: s => btoa(String.fromCharCode(...new TextEncoder().encode(s))),
  b64dec: s => new TextDecoder().decode(Uint8Array.from(atob(s.trim()), c => c.charCodeAt(0))),
  urlEnc: s => encodeURIComponent(s),
  urlDec: s => decodeURIComponent(s),
  uuid: () => crypto.randomUUID(),
  password: () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*';
    return [...crypto.getRandomValues(new Uint32Array(20))]
      .map(n => chars[n % chars.length]).join('');
  },
  timestamp: s => {
    s = s.trim() || String(Date.now());
    const n = Number(s);
    const d = isNaN(n) ? new Date(s) : new Date(n < 1e12 ? n * 1000 : n);
    if (isNaN(d)) throw new Error('Invalid date or timestamp');
    return `ISO:   ${d.toISOString()}\nLocal: ${d.toLocaleString()}\nUnix:  ${Math.floor(d / 1000)}`;
  }
};
 
document.querySelectorAll('[data-act]').forEach(btn => {
  btn.addEventListener('click', () => {
    try {
      $('output').value = actions[btn.dataset.act]($('input').value);
    } catch (e) {
      $('output').value = '⚠️ ' + e.message;
    }
  });
});
 
$('copy').addEventListener('click', async () => {
  await navigator.clipboard.writeText($('output').value);
  $('copy').textContent = 'Copied ✅';
  setTimeout(() => ($('copy').textContent = 'Copy output'), 1500);
});
