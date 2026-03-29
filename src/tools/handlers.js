const readImage = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export const handlers = {
  'word-counter': ({ root }) => {
    root.innerHTML = `<label>Enter text</label><textarea id="t" rows="8"></textarea><div class="row"><div class="card"><strong id="w">0</strong><div class="muted">Words</div></div><div class="card"><strong id="c">0</strong><div class="muted">Characters</div></div><div class="card"><strong id="l">0</strong><div class="muted">Lines</div></div><div class="card"><strong id="r">0 min</strong><div class="muted">Read time</div></div></div>`;
    const t = root.querySelector('#t');
    const update = () => {
      const value = t.value;
      const words = value.trim() ? value.trim().split(/\s+/).length : 0;
      root.querySelector('#w').textContent = words;
      root.querySelector('#c').textContent = value.length;
      root.querySelector('#l').textContent = value ? value.split(/\n/).length : 0;
      root.querySelector('#r').textContent = `${Math.max(1, Math.ceil(words / 200))} min`;
    };
    t.addEventListener('input', update);
  },
  'case-converter': ({ root }) => {
    root.innerHTML = `<label>Input</label><textarea id="in" rows="8"></textarea><div class="row"><button class="btn" data-m="upper">UPPER</button><button class="btn" data-m="lower">lower</button><button class="btn" data-m="title">Title Case</button><button class="btn" data-m="sentence">Sentence case</button></div><label>Output</label><textarea id="out" rows="8" readonly></textarea>`;
    const input = root.querySelector('#in');
    const output = root.querySelector('#out');
    root.querySelectorAll('[data-m]').forEach((btn) => btn.addEventListener('click', () => {
      const v = input.value;
      const mode = btn.dataset.m;
      output.value = mode === 'upper' ? v.toUpperCase()
        : mode === 'lower' ? v.toLowerCase()
        : mode === 'title' ? v.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase())
        : v.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, (m) => m.toUpperCase());
    }));
  },
  'text-sorter': ({ root }) => {
    root.innerHTML = `<label>Lines</label><textarea id="in" rows="8"></textarea><div class="row"><button class="btn" id="asc">Sort Asc</button><button class="btn" id="desc">Sort Desc</button></div><label>Output</label><textarea id="out" rows="8" readonly></textarea>`;
    const i = root.querySelector('#in');
    const o = root.querySelector('#out');
    const run = (desc = false) => {
      const sorted = i.value.split('\n').filter(Boolean).sort((a, b) => a.localeCompare(b));
      o.value = (desc ? sorted.reverse() : sorted).join('\n');
    };
    root.querySelector('#asc').onclick = () => run(false);
    root.querySelector('#desc').onclick = () => run(true);
  },
  'remove-duplicate-lines': ({ root }) => {
    root.innerHTML = `<label>Lines</label><textarea id="in" rows="8"></textarea><button class="btn" id="run">Remove Duplicates</button><label>Output</label><textarea id="out" rows="8" readonly></textarea>`;
    root.querySelector('#run').onclick = () => {
      const lines = root.querySelector('#in').value.split('\n');
      root.querySelector('#out').value = [...new Set(lines)].join('\n');
    };
  },
  'json-formatter': ({ root }) => {
    root.innerHTML = `<label>JSON Input</label><textarea id="in" rows="10"></textarea><div class="row"><button class="btn" id="fmt">Format</button><button class="btn" id="min">Minify</button></div><label>Output</label><textarea id="out" rows="10" readonly></textarea><p class="muted" id="msg"></p>`;
    const i = root.querySelector('#in');
    const o = root.querySelector('#out');
    const msg = root.querySelector('#msg');
    const apply = (space) => {
      try {
        o.value = JSON.stringify(JSON.parse(i.value), null, space);
        msg.textContent = 'Valid JSON';
      } catch {
        msg.textContent = 'Invalid JSON';
      }
    };
    root.querySelector('#fmt').onclick = () => apply(2);
    root.querySelector('#min').onclick = () => apply(0);
  },
  'base64-encoder-decoder': ({ root }) => {
    root.innerHTML = `<label>Text</label><textarea id="in" rows="8"></textarea><div class="row"><button class="btn" id="enc">Encode</button><button class="btn" id="dec">Decode</button></div><label>Output</label><textarea id="out" rows="8" readonly></textarea>`;
    root.querySelector('#enc').onclick = () => root.querySelector('#out').value = btoa(unescape(encodeURIComponent(root.querySelector('#in').value)));
    root.querySelector('#dec').onclick = () => {
      try { root.querySelector('#out').value = decodeURIComponent(escape(atob(root.querySelector('#in').value))); }
      catch { root.querySelector('#out').value = 'Invalid Base64'; }
    };
  },
  'url-encoder-decoder': ({ root }) => {
    root.innerHTML = `<label>Text / URL</label><textarea id="in" rows="8"></textarea><div class="row"><button class="btn" id="enc">URL Encode</button><button class="btn" id="dec">URL Decode</button></div><label>Output</label><textarea id="out" rows="8" readonly></textarea>`;
    root.querySelector('#enc').onclick = () => root.querySelector('#out').value = encodeURIComponent(root.querySelector('#in').value);
    root.querySelector('#dec').onclick = () => root.querySelector('#out').value = decodeURIComponent(root.querySelector('#in').value);
  },
  'color-converter': ({ root }) => {
    root.innerHTML = `<label>HEX</label><input id="hex" placeholder="#2563eb" /><div class="row"><div><label>RGB</label><input id="rgb" readonly /></div><div><label>HSL</label><input id="hsl" readonly /></div></div>`;
    const hex = root.querySelector('#hex');
    const rgb = root.querySelector('#rgb');
    const hsl = root.querySelector('#hsl');
    hex.addEventListener('input', () => {
      const value = hex.value.replace('#', '');
      if (!/^[\da-fA-F]{6}$/.test(value)) return;
      const r = parseInt(value.slice(0, 2), 16), g = parseInt(value.slice(2, 4), 16), b = parseInt(value.slice(4, 6), 16);
      rgb.value = `rgb(${r}, ${g}, ${b})`;
      const rn = r / 255, gn = g / 255, bn = b / 255;
      const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
      let h = 0, s = 0; const l = (max + min) / 2; const d = max - min;
      if (d) { s = d / (1 - Math.abs(2 * l - 1)); h = max === rn ? 60 * (((gn - bn) / d) % 6) : max === gn ? 60 * (((bn - rn) / d) + 2) : 60 * (((rn - gn) / d) + 4); }
      hsl.value = `hsl(${Math.round((h + 360) % 360)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%)`;
    });
  },
  'password-generator': ({ root }) => {
    root.innerHTML = `<div class="row"><div><label>Length</label><input id="len" type="number" min="6" max="64" value="16" /></div><div><label><input id="sym" type="checkbox" checked /> Include symbols</label></div></div><button class="btn" id="gen">Generate</button><label>Password</label><input id="out" readonly />`;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const symbols = '!@#$%^&*()_+-={}[]:;,.?';
    root.querySelector('#gen').onclick = () => {
      const len = Number(root.querySelector('#len').value);
      const pool = chars + (root.querySelector('#sym').checked ? symbols : '');
      const arr = new Uint32Array(len);
      crypto.getRandomValues(arr);
      root.querySelector('#out').value = Array.from(arr, (n) => pool[n % pool.length]).join('');
    };
    root.querySelector('#gen').click();
  },
  'sha256-generator': async ({ root }) => {
    root.innerHTML = `<label>Input</label><textarea id="in" rows="8"></textarea><button class="btn" id="hash">Generate SHA-256</button><label>Hash</label><textarea id="out" rows="4" readonly></textarea>`;
    root.querySelector('#hash').onclick = async () => {
      const data = new TextEncoder().encode(root.querySelector('#in').value);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      root.querySelector('#out').value = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, '0')).join('');
    };
  },
  'age-calculator': ({ root }) => {
    root.innerHTML = `<label>Date of Birth</label><input id="dob" type="date" /><button class="btn" id="run">Calculate</button><div class="card"><strong id="out">Enter a date.</strong></div>`;
    root.querySelector('#run').onclick = () => {
      const dob = new Date(root.querySelector('#dob').value);
      if (Number.isNaN(dob.getTime())) return;
      const now = new Date();
      let y = now.getFullYear() - dob.getFullYear();
      let m = now.getMonth() - dob.getMonth();
      let d = now.getDate() - dob.getDate();
      if (d < 0) { m -= 1; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (m < 0) { y -= 1; m += 12; }
      root.querySelector('#out').textContent = `${y} years, ${m} months, ${d} days`;
    };
  },
  'percentage-calculator': ({ root }) => {
    root.innerHTML = `<div class="row"><div><label>Value</label><input id="v" type="number" /></div><div><label>Total</label><input id="t" type="number" /></div></div><button class="btn" id="run">Calculate Percentage</button><div class="card"><strong id="out">0%</strong></div>`;
    root.querySelector('#run').onclick = () => {
      const v = Number(root.querySelector('#v').value);
      const t = Number(root.querySelector('#t').value);
      root.querySelector('#out').textContent = t ? `${((v / t) * 100).toFixed(2)}%` : '0%';
    };
  },
  'image-resizer': ({ root }) => {
    root.innerHTML = `<input id="file" type="file" accept="image/*" /><div class="row"><div><label>Width</label><input id="w" type="number" /></div><div><label>Height</label><input id="h" type="number" /></div></div><button class="btn" id="run">Resize + Download</button><canvas id="c" style="display:none"></canvas>`;
    let src;
    root.querySelector('#file').onchange = async (e) => {
      src = await readImage(e.target.files[0]);
      const img = await loadImage(src);
      root.querySelector('#w').value = img.width;
      root.querySelector('#h').value = img.height;
    };
    root.querySelector('#run').onclick = async () => {
      if (!src) return;
      const img = await loadImage(src);
      const w = Number(root.querySelector('#w').value);
      const h = Number(root.querySelector('#h').value);
      const c = root.querySelector('#c');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      downloadDataUrl(c.toDataURL('image/png'), 'resized.png');
    };
  },
  'image-converter': ({ root }) => {
    root.innerHTML = `<input id="file" type="file" accept="image/*" /><label>Output Format</label><select id="fmt"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WEBP</option></select><button class="btn" id="run">Convert + Download</button><canvas id="c" style="display:none"></canvas>`;
    let src;
    root.querySelector('#file').onchange = async (e) => src = await readImage(e.target.files[0]);
    root.querySelector('#run').onclick = async () => {
      if (!src) return;
      const img = await loadImage(src);
      const c = root.querySelector('#c');
      c.width = img.width; c.height = img.height;
      c.getContext('2d').drawImage(img, 0, 0);
      const fmt = root.querySelector('#fmt').value;
      const ext = fmt.split('/')[1];
      downloadDataUrl(c.toDataURL(fmt, 0.9), `converted.${ext === 'jpeg' ? 'jpg' : ext}`);
    };
  },
  'image-compressor': ({ root }) => {
    root.innerHTML = `<input id="file" type="file" accept="image/*" /><label>Quality (0.1 - 1)</label><input id="q" type="number" min="0.1" max="1" step="0.1" value="0.7" /><button class="btn" id="run">Compress + Download</button><canvas id="c" style="display:none"></canvas>`;
    let src;
    root.querySelector('#file').onchange = async (e) => src = await readImage(e.target.files[0]);
    root.querySelector('#run').onclick = async () => {
      if (!src) return;
      const img = await loadImage(src);
      const c = root.querySelector('#c');
      c.width = img.width; c.height = img.height;
      c.getContext('2d').drawImage(img, 0, 0);
      const q = Math.min(1, Math.max(0.1, Number(root.querySelector('#q').value)));
      downloadDataUrl(c.toDataURL('image/jpeg', q), 'compressed.jpg');
    };
  },
  'image-cropper': ({ root }) => {
    root.innerHTML = `<input id="file" type="file" accept="image/*" /><div class="row"><input id="x" type="number" placeholder="x"/><input id="y" type="number" placeholder="y"/><input id="w" type="number" placeholder="width"/><input id="h" type="number" placeholder="height"/></div><button class="btn" id="run">Crop + Download</button><canvas id="c" style="display:none"></canvas>`;
    let src;
    root.querySelector('#file').onchange = async (e) => src = await readImage(e.target.files[0]);
    root.querySelector('#run').onclick = async () => {
      if (!src) return;
      const img = await loadImage(src);
      const x = Number(root.querySelector('#x').value) || 0;
      const y = Number(root.querySelector('#y').value) || 0;
      const w = Number(root.querySelector('#w').value) || img.width;
      const h = Number(root.querySelector('#h').value) || img.height;
      const c = root.querySelector('#c');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, x, y, w, h, 0, 0, w, h);
      downloadDataUrl(c.toDataURL('image/png'), 'cropped.png');
    };
  },
  'base64-image-converter': ({ root }) => {
    root.innerHTML = `<input id="file" type="file" accept="image/*" /><button class="btn" id="enc">Encode Image</button><label>Base64</label><textarea id="txt" rows="8"></textarea><button class="btn" id="dec">Decode to Preview</button><div id="preview"></div>`;
    let src;
    root.querySelector('#file').onchange = async (e) => src = await readImage(e.target.files[0]);
    root.querySelector('#enc').onclick = () => { if (src) root.querySelector('#txt').value = src; };
    root.querySelector('#dec').onclick = () => {
      const val = root.querySelector('#txt').value.trim();
      root.querySelector('#preview').innerHTML = val ? `<img src="${val}" alt="Preview"/>` : '';
    };
  }
};
