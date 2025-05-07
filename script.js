document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const q1 = document.querySelector('input[name="q1"]:checked')?.value;

  let result = '';

  if (q1 === 'A') result = 'オヒアワイキキホテルがおすすめ！';
  else if (q1 === 'B') result = 'ワイキキマリアホテルがおすすめ！';
  else if (q1 === 'C') result = 'ワイキキビーチコマーホテルがおすすめ！';
  else if (q1 === 'D') result = 'プリンスワイキキがおすすめ！';
  else if (q1 === 'E') result = 'ハレクラニホテルがおすすめ！';
  else result = '回答が不足しています。';

  document.getElementById('result').innerText = result;
});
