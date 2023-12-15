const editBtn = document.getElementById('btn');

editBtn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
});