const editBtn = document.getElementById('btn');

editBtn.addEventListener('click', () => {
  const text = document.getElementById('text');
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});