const fs = require('fs');
const html = fs.readFileSync('outputs/orlando-park-guide.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

class El {
  constructor(id) {
    this.id = id;
    this.value = ['park', 'rec'].includes(id) ? 'all' : '';
    this.checked = false;
    this.innerHTML = '';
    this.textContent = '';
    this.listeners = {};
  }
  addEventListener(type, fn) { this.listeners[type] = fn; }
  insertAdjacentHTML(_where, value) { this.innerHTML += value; }
  scrollIntoView() {}
}

const ids = ['park','rec','sr','q','list','food-list','count','must-count','consider-count','summary-count','must-list','consider-list','calendar','planner','restore-plan','clear-plan'];
const els = Object.fromEntries(ids.map(id => [id, new El(id)]));
global.document = {
  querySelector(selector) {
    if (selector.startsWith('#')) return els[selector.slice(1)] || new El(selector);
    return new El(selector);
  }
};
global.localStorage = { data: {}, getItem(k) { return this.data[k] || null; }, setItem(k,v) { this.data[k] = v; } };
global.confirm = () => true;
global.setTimeout = fn => fn();

new Function(script)();
if (!els.list.innerHTML.includes('Harry Potter and the Battle at the Ministry')) throw new Error('Attraction cards did not render');
if (!els['food-list'].innerHTML.includes('Das Stakehaus')) throw new Error('Food cards did not render');
if (!els.calendar.innerHTML.includes('🍴')) throw new Error('Meals did not render in calendar');
if (!els['summary-count'].textContent.includes('已确认')) throw new Error('Planner summary did not render');
console.log(els['summary-count'].textContent);
console.log(els.count.textContent);
console.log('Food + calendar integration OK');
