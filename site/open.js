fetch('https://raw.githubusercontent.com/Tacticalcougar/Missionary/refs/heads/main/site/index.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const remoteContent = doc.getElementById('content');

    if (remoteContent) {
      document.getElementById('content').innerHTML = remoteContent.innerHTML;
    } else {
      document.getElementById('content').innerHTML = '<p>Error: Content not found on remote page.</p>';
    }
  })
  .catch(error => {
    console.error('Error fetching content:', error);
    document.getElementById('content').innerHTML = '<p>Error: Failed to load content.</p>';
  });