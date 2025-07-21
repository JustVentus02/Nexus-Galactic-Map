const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('resetZoom', () => {
  test('resets zoom and translation values', () => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    const { window } = dom;

    // modify state so we can test reset
    window.currentZoom = 2;
    window.translateX = 50;
    window.translateY = 25;

    window.resetZoom();

    expect(window.currentZoom).toBe(1);
    expect(window.translateX).toBe(0);
    expect(window.translateY).toBe(0);
  });
});
