document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('terminal-form');
const input = document.getElementById('command');
const output = document.getElementById('terminal-output');
const responses = {
  help: 'Available commands:\nabout · skills · education · connections · clear',
  about: 'Nicolas Uchimura\nSoftware engineer. Informatics Engineering, University of Aveiro.',
  skills: 'Java\nPython\nSoftware engineering · Git · Collaboration',
  education: 'University of Aveiro\nInformatics Engineering',
  connections: 'github.com/nicolasruchimura2\nLinkedIn: Nicolas Uchimura\nnicolasruchimura@gmail.com',
  whoami: 'Nicolas Uchimura — Software Engineer'
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase();
  input.value = '';
  if (!command) return;
  if (command === 'clear') { output.replaceChildren(); return; }
  const row = document.createElement('p');
  row.textContent = '% ' + command + '\n' + (responses[command] || 'Command not found. Type help to see available commands.');
  output.append(row);
  while (output.children.length > 3) output.firstElementChild.remove();
});
